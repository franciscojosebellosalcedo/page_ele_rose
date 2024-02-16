import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/constants";
import { setActiveCart, setActiveSendOrder, setCart } from "../../features/cart/cart";
import { setUser } from "../../features/user/user";
import { createUser, login } from "../../service/user.service";
import { isValidObject, saveRefressTokenLocalStorage, sendOrderUser } from "../../utils/utils";
import LoaderButton from "../loaderButton/LoaderButton";
import ModalOrderInfo from "../modalOrderInfo/ModalOrderInfo";
import "./ModalRegisterUser.css";

const ModalRegisterUser = ({ isOpenModal, handlerOpenModal }) => {
	const [isRegister, setIsRegister] = useState(false);
	const [alertModal, setAlertModal] = useState({ type: 0, message: "" });
	const [newUser, setNewUser] = useState({ name: "", address: "", phone: "", email: "", password: "", isAdmin: false });
	const [isLoader, setIsLoader] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [messageActiveSendOrder, setMessageActiveSendOrder] = useState("En cuanto te registres o inicies sesión se enviará tu pedido");
	const isActiveSendOrder = useSelector((state) => state.cart.data.activeSendOrder);
	const cart = useSelector((state) => state.cart.data.list);
	const [alertOrder, setAlertOrder] = useState({ message: "", type: 0, title: "" });
	const [isActiveModalInfoOrder, setIsActiveModalInfoOrder] = useState(false);
	const [isForgotPassword, setIsForgotPassword] = useState(false);

	const handlerOpenForgotPassword = (e) => {
		e.preventDefault();
		setIsForgotPassword(!isForgotPassword);
	}

	const handlerOpenModalInfoOrder = () => {
		setIsActiveModalInfoOrder(!isActiveModalInfoOrder);
	}

	const handlerCreatedUser = (target, value) => {
		setNewUser({ ...newUser, [target]: value });
	}

	const loginUser = async (e) => {
		e.preventDefault();
		setIsLoader(true);
		try {
			const dataLogin = { email: newUser.email, password: newUser.password };
			if (isValidObject(dataLogin) === false) {
				setAlertModal({ message: "Llene todos los campos", type: 0 });
			}
			else {
				const responseLogin = (await login(dataLogin)).data;
				if (responseLogin.status === 200 && responseLogin.response) {
					const data = responseLogin.data;
					setDataUser(data);
					setNewUser({ name: "", address: "", isAdmin: false, phone: "", email: "", password: "" });
					setAlertModal({ message: "", type: 0 });
					if (isActiveSendOrder && cart.length > 0) {
						const responseOrder = await sendOrderUser(cart, data.user, data.accessToken);
						if (responseOrder.status === 201 && responseOrder.response) {
							dispatch(setActiveCart());
							setAlertOrder({
								message: "Hemos recibido tu pedido y nos pondremos en contacto contigo en breve para confirmar todos los detalles y coordinar la entrega.",
								title: responseOrder.message,
								type: 1
							});
							dispatch(setCart([]));
						} else {
							setAlertOrder({
								message: "Se produjo un error al enviar el pedido, por favor intente nuevamente.",
								title: responseOrder.message,
								type: 0
							});
						}
						handlerOpenModalInfoOrder();
						dispatch(setActiveSendOrder(false));
					} else {
						navigate(ROUTES.ACCOUNT);
					}
					handlerOpenModal(e);
				} else {
					setAlertModal({ message: responseLogin.message, type: 0 });
				}
			}
		} catch (error) {
			setAlertModal({ message: "Correo o contraseña no válida", type: 0 });
		}
		setIsLoader(false);
	}

	const setDataUser = (data) => {
		const { user, refressToken } = data;
		const dataUser = { name: user.name, address: user.address, _id: user._id, email: user.email, phone: user.phone, token: data.accessToken };
		dispatch(setUser({ ...dataUser }));
		saveRefressTokenLocalStorage(refressToken);
	}

	const createUserPage = async (e) => {
		e.preventDefault();
		setIsLoader(true);
		try {
			if (!isValidObject(newUser)) {
				setAlertModal({ message: "Llene todos los campos", type: 0 });
			} else if (newUser.password.length < 8) {
				setAlertModal({ message: "Por los menos 8 caracteres en la contraseña", type: 0 });
			} else {
				setAlertModal({ type: 0, message: "" });
				const responseCreateUser = await createUser(newUser);
				if (responseCreateUser.status === 200 && responseCreateUser.response) {
					const data = responseCreateUser.data;
					setDataUser(data);
					setNewUser({ name: "", address: "", isAdmin: false, phone: "", email: "", password: "" });
					setAlertModal({ message: "", type: 0 });
					if (isActiveSendOrder && cart.length > 0) {
						const responseOrder = await sendOrderUser(cart, data.user, data.accessToken);
						dispatch(setActiveCart());
						if (responseOrder.status === 201 && responseOrder.response) {
							setAlertOrder({
								message: "Hemos recibido tu pedido y nos pondremos en contacto contigo en breve para confirmar todos los detalles y coordinar la entrega.",
								title: responseOrder.message,
								type: 1
							});
							dispatch(setCart([]));
						} else {
							setAlertOrder({
								message: "Se produjo un error al enviar el pedido, por favor intente nuevamente.",
								title: responseOrder.message,
								type: 0
							});
						}
						handlerOpenModalInfoOrder();
						dispatch(setActiveSendOrder(false));
					} else {
						navigate(ROUTES.ACCOUNT);
					}
					handlerOpenModal(e);
				} else {
					setAlertModal({ message: responseCreateUser.message, type: 0 });
				}
			}
		} catch (error) {
			setAlertModal({ message: "Error en el servidor", type: 0 });
		}
		setIsLoader(false);
	}

	const handlerIsRegister = (e) => {
		e.preventDefault();
		setIsRegister(!isRegister);
		setIsForgotPassword(false);
	}

	const getTitleModal = () => {
		if (isRegister === true) {
			return "Crear tu cuenta";
		} else if (isForgotPassword === true) {
			return "Restablece tu contraseña"
		} else if (isRegister === false) {
			return "Inicia sesión";
		}
	}

	return (
		<>
			<section className={`container_modal_register_user ${isOpenModal === true ? "see_modal_user" : ""}`}>
				<div className={`modal`}>
					<i className="uil uil-times icon_close_modal" onClick={(e) => { handlerOpenModal(e); setAlertModal({ message: "", type: 0 }); dispatch(setActiveSendOrder(false)) }}></i>
					<img className="logo_modal" src={require("../../assest/logo.jpeg")} alt="" />
					<h3 className="title_modal">{getTitleModal()}</h3>
					<p className={`alert_modal_user ${alertModal.type === 0 ? "color_alert_red" : "color_alert_green"}`}>{alertModal.message}</p>
					{
						isActiveSendOrder === true ?
							<p className={`message_send_order`}>{messageActiveSendOrder}</p>
							: ""
					}
					<form className="form_modal">
						{
							isRegister === true ? <>
								<input value={newUser.name} onInput={(e) => handlerCreatedUser("name", e.target.value)} className="input" type="email" placeholder="Nombre" />
								<input value={newUser.phone} onInput={(e) => handlerCreatedUser("phone", e.target.value)} className="input" type="tel" placeholder="Número de teléfono" />
								<input value={newUser.address} onInput={(e) => handlerCreatedUser("address", e.target.value)} className="input" type="text" placeholder="Dirección" />
							</> : ""
						}
						<input value={newUser.email} onInput={(e) => handlerCreatedUser("email", e.target.value)} className="input" type="email" placeholder="Correo electrónico" />
						{
							isForgotPassword === true ? "" :
								<input value={newUser.password} onInput={(e) => handlerCreatedUser("password", e.target.value)} className="input" type="password" placeholder="Contraseña" />
						}
						{
							isForgotPassword === true ? "" :
								<>
									{
										isRegister === false ?
											<a onClick={(e) => handlerOpenForgotPassword(e)} className="forgot_password">¿Olvidó la contraseña?</a>
											: ""
									}
								</>
						}
						{
							isForgotPassword === true ?
								<button className="btn_login">Enviar</button> :
								""
						}
						{
							isForgotPassword === true ?
								<button onClick={(e)=>handlerOpenForgotPassword(e)} className="btn_login">Cancelar</button>
								:
								<>
									{
										isRegister === false ?
											<button className="btn_form btn_login" onClick={(e) => loginUser(e)}>{isLoader === true ? <LoaderButton /> : "Iniciar sesión"}</button>
											:
											<button className={`btn_form btn_login ${isLoader === true ? "none_cursor" : ""}`} onClick={(e) => createUserPage(e)}>{isLoader === true ? <LoaderButton /> : "Crear cuenta"}</button>
									}
								</>
						}

					</form>
					<p className="not_account_use">{isRegister === false ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}  <button className="btn btn_register_user" onClick={(e) => handlerIsRegister(e)}>{isRegister === false ? "Registrate aquí" : "Inicia sesión aquí"} <i className="uil uil-arrow-right"></i></button></p>
				</div>

			</section>
			<ModalOrderInfo alertOrder={alertOrder} isActiveModalInfoOrder={isActiveModalInfoOrder} handlerOpenModalInfoOrder={handlerOpenModalInfoOrder} />
		</>
	)
}

export default ModalRegisterUser;