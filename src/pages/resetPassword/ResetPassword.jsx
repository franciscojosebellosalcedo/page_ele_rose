import Footer from "../../components/footer/Footer";
import FormResetPassword from "../../components/formResetPassword/FormResetPassword";
import NavBar from "../../components/navBar/NavBar";
import "./ResetPassword.css";

const ResetPassword = () => {
  return (
    <div className="container_reset_password">
        <NavBar/>
        <FormResetPassword/>
        <Footer/>
    </div>
  )
}

export default ResetPassword;