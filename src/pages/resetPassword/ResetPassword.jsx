import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import FormResetPassword from "../../components/formResetPassword/FormResetPassword";
import NavBar from "../../components/navBar/NavBar";
import "./ResetPassword.css";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../constants/constants";

const ResetPassword = () => {
	const params=useParams();
	const navigate=useNavigate();
	const [token,setToken]=useState("");

	useEffect(()=>{
		if(params?.token){
			setToken(params.token);
		}else{
			navigate(ROUTES.INIT);
		}
	},[]);

  return (
    <div className="container_reset_password">
        <NavBar/>
        {params?.token !==null || params?.token !==undefined? <FormResetPassword token={token}/>:""}
        <Footer/>
    </div>
  )
}

export default ResetPassword;