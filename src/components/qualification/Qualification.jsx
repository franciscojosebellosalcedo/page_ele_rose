import { useEffect, useState } from "react";
import "./Qualification.css";
import { useSelector } from "react-redux";
import { getAllQualificationByIdProduct } from "../../service/qualification.service";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { LIST_NUMBER_SCORE } from "../../constants/constants";

const Qualification = ({ product }) => {
	const token = useSelector((state) => state.user.data.user.token);
	const user = useSelector((state) => state.user.data.user);
	const [qualifications, setQualification] = useState([]);
	const [score, setScore] = useState(5);
    const [isLoaderComments,setIsLoaderComments]=useState(false);
    const [isLoader,setIsLoader]=useState(false);
	const [openWriteComment, setOpenWriteComment] = useState(false);
    const [newComment,setNewComment]=useState({title:"",description:"",user:user?._id,product:product?._id});

    const handlerFormComment=(target,value)=>{
        setNewComment({...newComment,[target]:value});
    }

	const handlerOpenWriteComment = () => {
		setOpenWriteComment(!openWriteComment);
	};

	const getAllQualificationsByProduct = async () => {
		try {
			const response = (await getAllQualificationByIdProduct(token, product))
				.data;
			if (response.status === 200 && response.response) {
				setQualification(response.data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const setScoreProduct = (n) => {
		setScore(n);
	};

    const createNewComment=async (e)=>{
        e.preventDefault();
        setIsLoader(true);
        try {
            //quede aqui por enviar la petiion de crear un nuevo comemtario
        } catch (error) {
            console.log(error);
        }
        setIsLoader(false);
    }

	useEffect(() => {
		getAllQualificationsByProduct();
	}, []);

	return (
		<section className="container_qualifications_product">
			<h3 className="title_qualifications_product">Comentarios de clientes</h3>
			{qualifications && qualifications.length === 0 ? (
				<div className="content_not_commets">
					<p className="text_not_comments">Sin comentarios</p>
					<div>
						{LIST_NUMBER_SCORE.map((num) => {
							return <AiOutlineStar key={num} className="icon_rating" />;
						})}
					</div>
				</div>
			) : (
				""
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
                        <p className="alert_form_comment">Escribe un comentario</p>
						<input
                        onInput={(e)=>handlerFormComment("title",e.target.value)}
							className="input_form_comment input_title_comment"
							placeholder="Título del comentario (Opcional)"
							type="text"
						/>
						<textarea
                        onInput={(e)=>handlerFormComment("description",e.target.value)}
							className="input_form_comment input_description_comment"
							placeholder="Comentario"
							name=""
							id=""
							cols="30"
							rows="10"
						></textarea>
						<button onClick={(e)=>createNewComment(e)} className=" btn_form_commet">Enviar</button>
						<button
							onClick={() => handlerOpenWriteComment()}
							className=" btn_form_commet"
						>
							Cancelar
						</button>
					</form>
				</section>
			) : (
				""
			)}
		</section>
	);
};

export default Qualification;
