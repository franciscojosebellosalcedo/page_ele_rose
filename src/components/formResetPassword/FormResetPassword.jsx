import { useState } from "react";
import "./FormResetPassword.css";
import LoaderButton from "../loaderButton/LoaderButton";

const FormResetPassword = () => {
    const [isLoader,setIsLoader]=useState(false);
    const [alertForm,setAlertForm]=useState({message:"",type:0});

  return (
    <div className="container_form_reset_password">
        <div className="form">
					<h3 className="title_modal">Restablece tu contraseña</h3>
					<p className={`alert_modal_user ${alertForm.type === 0 ? "color_alert_red" : "color_alert_green"}`}>{alertForm.message}</p>
					<form className="form_modal">
						<input className="input" type="password" placeholder="Contraseña" />
						<input className="input" type="password" placeholder="Contraseña" />
						<button  className="btn_login">{isLoader===true ? <LoaderButton/>:"Enviar"}</button>
					</form>
				</div>
    </div>
  )
}

export default FormResetPassword;