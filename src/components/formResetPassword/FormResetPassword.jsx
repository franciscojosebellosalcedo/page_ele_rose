import { useState } from "react";
import "./FormResetPassword.css";
import LoaderButton from "../loaderButton/LoaderButton";
import { setNewPassword } from "../../service/user.service";
import { isValidObject } from "../../utils/utils";

const FormResetPassword = ({token}) => {
    const [isLoader,setIsLoader]=useState(false);
    const [alertForm,setAlertForm]=useState({message:"",type:0});
		const [dataPassword,setDataPassword]=useState({password:"",repetPassword:""});

		const handlerFormResetPassword=(target,value)=>{
			setDataPassword({...dataPassword,[target]:value});
		}

		const resetPasswordUser=async(e)=>{
			e.preventDefault();
			setIsLoader(true);
			try {
				if(isValidObject(dataPassword)===false){
					setAlertForm({message:"Llene los campos",type:0});
				}else{
					const responseResetPassword=await setNewPassword(token,dataPassword);
				}
			} catch (error) {
				console.log(error);
			}
			setIsLoader(false);
		}

  return (
    <div className="container_form_reset_password">
        <div className="form">
					<h3 className="title_modal">Restablece tu contraseña</h3>
					<p className={`alert_modal_user ${alertForm.type === 0 ? "color_alert_red" : "color_alert_green"}`}>{alertForm.message}</p>
					<form className="form_modal">
						<input onInput={(e)=>handlerFormResetPassword("password",e.target.value)} value={dataPassword.password} className="input" type="password" placeholder="Contraseña" />
						<input onInput={(e)=>handlerFormResetPassword("repetPassword",e.target.value)} value={dataPassword.repetPassword} className="input" type="password" placeholder="Repetir contraseña" />
						<button onClick={(e)=>resetPasswordUser(e)} className="btn_login">{isLoader===true ? <LoaderButton/>:"Enviar"}</button>
					</form>
				</div>
    </div>
  )
}

export default FormResetPassword;