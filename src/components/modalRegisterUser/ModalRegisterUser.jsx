import { Link } from "react-router-dom";
import "./ModalRegisterUser.css";
import { useState } from "react";

const ModalRegisterUser = ({ isOpenModal,handlerOpenModal }) => {
	const [isRegister, setIsRegister] = useState(false);
	const [alertModal,setAlertModal]=useState("");

	const handlerIsRegister=(e)=>{
		e.preventDefault();
		setIsRegister(!isRegister);
	}

	return (
		<section className={`container_modal_register_user ${isOpenModal=== true ? "see_modal_user":""}`}>
			<div className={`modal`}>
				<i className="uil uil-times icon_close_modal" onClick={(e) => {handlerOpenModal(e)}}></i>
				<img className="logo_modal" src={require("../../assest/logo.jpeg")} alt="" />
				<h3 className="title_modal">{isRegister === false ? "Inicia sesión" : "Crear tu cuenta"}</h3>
				<p className="alert_modal_user">{alertModal}</p>
				<form className="form_modal">
					{
						isRegister === true ? <>
							<input className="input" type="email" placeholder="Nombre" />
							<input className="input" type="email" placeholder="Número de teléfono" />
							<input className="input" type="email" placeholder="Dirección" />
						</> : ""
					}
					<input className="input" type="email" placeholder="Correo electrónico" />
					<input className="input" type="password" placeholder="Contraseña" />
					{
						isRegister === false ?
							<Link className="forgot_password">¿Olvidó la contraseña?</Link>
							: ""
					}
					{
						isRegister === false ?
							<button className="btn_form btn_login">Iniciar sesión</button>
							:
							<button className="btn_form btn_login">Crear cuenta</button>
					}
				</form>
				<p className="not_account_use">{isRegister===false ? "¿No tienes cuenta?":"¿Ya tienes cuenta?"}  <button className="btn btn_register_user" onClick={(e)=>handlerIsRegister(e)}>{isRegister===false ? "Registrate aquí":"Inicia sesión aquí"} <i className="uil uil-arrow-right"></i></button></p>
			</div>
		</section>
	)
}

export default ModalRegisterUser;