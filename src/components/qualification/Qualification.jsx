import { useEffect, useState } from "react";
import "./Qualification.css";
import { useDispatch, useSelector } from "react-redux";
import { createQualification, getAllQualificationByIdProduct } from "../../service/qualification.service";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { LIST_NUMBER_SCORE } from "../../constants/constants";
import LoaderButton from "../loaderButton/LoaderButton";
import { formatDate, isValidObject } from "../../utils/utils";
import { setIsOpenModal } from "../../features/user/user";
import { addQualification } from "../../features/qualification/qualification";

const Qualification = ({ product }) => {
	const token = useSelector((state) => state.user.data.user.token);
	const user = useSelector((state) => state.user.data.user);
	const [qualifications, setQualification] = useState([]);
	const [score, setScore] = useState(5);
	const [isLoaderComments, setIsLoaderComments] = useState(false);
	const [isLoader, setIsLoader] = useState(false);
	const [openWriteComment, setOpenWriteComment] = useState(false);
	const [newComment, setNewComment] = useState({ title: "", description: "", score: 0, user: null, product: product?._id });
	const [alert, setAlert] = useState({ message: "", type: 0, view: false });
	const dispatch=useDispatch();

	const handlerFormComment = (target, value) => {
		setNewComment({ ...newComment, [target]: value });
	}

	const handlerOpenWriteComment = () => {
		if (openWriteComment) {
			setAlert({ message: "", type: 0, view: false });
		}
		setOpenWriteComment(!openWriteComment);
	};

	const getAllQualificationsByProduct = async () => {
		setIsLoaderComments(true);
		try {
			const response = (await getAllQualificationByIdProduct(token, product))
				.data;
			if (response.status === 200 && response.response) {
				const data = response.data;
				setQualification([...data]);
			}
		} catch (error) {
			console.log(error);
		}
		setIsLoaderComments(false);
	};

	const setScoreProduct = (n) => {
		setScore(n);
	};

	const createNewComment = async (e) => {
		e.preventDefault();
		setIsLoader(true);
		try {
			if (newComment.description === "") {
				setAlert({ message: "Escriba un comentario 😔", type: 0, view: true });
			} else if (!isValidObject(user)) {
				dispatch(setIsOpenModal());
			} else {
				newComment.score = score;
				newComment.user = user?._id;
				const responseCreatedQualification = (await createQualification(token, newComment)).data;
				if (responseCreatedQualification.status === 201 && responseCreatedQualification.response) {
					const data = responseCreatedQualification.data;
					const list = qualifications;
					list.unshift(data);
					dispatch(addQualification(data));
					setQualification(list);
					setAlert({ message: "Tu comentario se envió correctamente 😊", type: 1, view: true });
					setNewComment({ ...newComment, title: "", description: "" });
					setScore(5);
				}
			}
		} catch (error) {
			console.log(error);
			setAlert({ message: "Se produjo un error al enviar tu comentario 😔", type: 0, view: true });
		}
		setIsLoader(false);
	}

	useEffect(() => {
		getAllQualificationsByProduct();
		setAlert({ message: "", type: 0, view: false });
	}, [product]);

	return (
		<section className="container_qualifications_product">
			<h3 className="title_qualifications_product">Comentarios de clientes</h3>
			{
				isLoaderComments === true ?
				<div className="box_loader">
					<LoaderButton />
				</div>
			 : (
				qualifications && qualifications.length === 0 ? (
					<div className="content_not_commets">
						<p className="text_not_comments">Sin comentarios</p>
						<div>
							{LIST_NUMBER_SCORE.map((num) => {
								return <AiOutlineStar key={num} className="icon_rating" />;
							})}
						</div>
					</div>
				):
					<section className="section_list_comments_recents">
						<p className="title_list_qualifications">Comentarios más recientes</p>
						<div className="list_comments">
							{
								qualifications.map((qual, index) => {
									return index < 3 ? <article className="item_qualification" key={qual?._id}>
										<p className="date_qualification">{formatDate(qual.createdAt)}</p>
										<div className="list_star_comments">
											{LIST_NUMBER_SCORE.map((start, index) => {
												return index < qual?.score ? (
													<AiFillStar
														key={index}
														className="icon_star "
														score={qual?.score}
													/>
												) : (
													<AiOutlineStar
														key={index}
														className="icon_star "
													/>
												);
											})}
										</div>
										<p className="name_user_qualification"><i className="uil uil-user icon_user"></i>{qual?.user?.name}</p>
										<h4 className="text_nowrap title_qualification">{qual?.title}</h4>
										<p className="text_nowrap description_qualification">{qual?.description}</p>
									</article> : ""
								})
							}
						</div>
					</section>
			)}
			<button
				onClick={() => handlerOpenWriteComment()}
				className="btn btn_write_commet"
			>
				{openWriteComment === true
					? "Cancelar comentario"
					: "Escribir comentario"}
			</button>
			{openWriteComment === true ? (
				<section className="container_form_commet">
					<h3 className="form_title">Escribir comentario</h3>
					<div className="list_star">
						{LIST_NUMBER_SCORE.map((start, index) => {
							return index < score ? (
								<AiFillStar
									key={start}
									onMouseOver={() => setScore(index + 1)}
									className="icon_rating "
									onClick={() => setScoreProduct(index + 1)}
									score={score}
								/>
							) : (
								<AiOutlineStar
									key={start}
									onMouseOver={() => setScore(index + 1)}
									className="icon_rating "
									onClick={() => setScoreProduct(index + 1)}
								/>
							);
						})}
					</div>
					<form className="form_comment">
						{
							alert.view === true ?
								<p className={`alert_form_comment ${alert.type === 0 ? "color_red" : "color_green"}`}>{alert.message}</p>
								: ""
						}
						<input
							value={newComment?.title}
							onInput={(e) => handlerFormComment("title", e.target.value)}
							className="input_form_comment input_title_comment"
							placeholder="Título del comentario (Opcional)"
							type="text"
						/>
						<textarea
							value={newComment?.description}
							onInput={(e) => handlerFormComment("description", e.target.value)}
							className="input_form_comment input_description_comment"
							placeholder="Comentario"
							name=""
							id=""
							cols="30"
							rows="10"
						></textarea>
						<div className="btns_form">
							<button onClick={(e) => createNewComment(e)} className=" btn_form_commet">{isLoader === true ? <LoaderButton /> : "Enviar"}</button>
							<button
								onClick={() => handlerOpenWriteComment()}
								className=" btn_form_commet"
							>
								Cancelar
							</button>
						</div>
					</form>
				</section>
			) : (
				""
			)}
		</section>
	);
};

export default Qualification;
