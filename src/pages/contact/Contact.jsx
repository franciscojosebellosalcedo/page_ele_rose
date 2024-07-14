import "./Contact.css";
import NavBar from '../../components/navBar/NavBar';
import HeaderSection from '../../components/headerSection/HeaderSection';
import Footer from '../../components/footer/Footer';
import { useState } from "react";
import { isEmailValid, isValidObject } from "../../utils/utils";
import { saveInfoContact } from "../../service/contact.service";
import emailjs from "@emailjs/browser";
import LoaderButton from "../../components/loaderButton/LoaderButton";

const Contact = () => {
	const [dataInfoContact, setDataInfoContact] = useState({
		name: "",
		email: "",
		affeir: "",
		message: ""
	});
	const [alertFormContact, setAlertFormContact] = useState({
		message: "",
		type: 0,
		isOpen: false
	})

	const [isLoader, setIsLoader] = useState(false);

	const handlerFormContact = (target, value) => {
		setDataInfoContact({ ...dataInfoContact, [target]: value });
	}

	const sendDataInfoContact = async(e) => {
		try {
			setIsLoader(true)
			e.preventDefault();
		if(!isValidObject(dataInfoContact)){
			setAlertFormContact({message:"Llene los campos por favor",type:0,isOpen:true});
		}else if(!isEmailValid(dataInfoContact.email)){
			setAlertFormContact({message:"Correo electrónico no valido",type:0,isOpen:true});
		}else{
			const responseSendInfoContact=await saveInfoContact(dataInfoContact);
			if(responseSendInfoContact.status===201 && responseSendInfoContact.response){
				const serviceID = "service_dnmr0bg";
				const templateID = "template_nafb8vg";
				emailjs.init({publicKey: "_yOP6dNF1dy9F4KYE"})
				await emailjs.send(serviceID, templateID ,{
					name: dataInfoContact.name,
					email: dataInfoContact.email,
					affeir: dataInfoContact.affeir,
					message: dataInfoContact.message
				});
				setAlertFormContact({message:responseSendInfoContact.message,type:1,isOpen:true});
				setDataInfoContact({
					name: "",
					email: "",
					affeir: "",
					message: ""
				});
			}else{
				setAlertFormContact({message:responseSendInfoContact.message,type:0,isOpen:true});
			}
		}
		} catch (error) {
			setAlertFormContact({message:"Error en el servidor",type:0,isOpen:true});

		}
		setIsLoader(false)

	}

	return (
		<section className='container_contact'>
			<NavBar />
			<HeaderSection title={"Contacto"} />
			<section className="content_contact">
				<article className="box_content_contact">
					<div>
						<h3 className="item_box_title">Dirección</h3>
						<p>Arjona Bolívar</p>
					</div>
					<div>
						<h3 className="item_box_title">Correo electrónico</h3>
						<p>Eleroseaccesorios@gmail.com</p>
					</div>
					<div>
						<h3 className="item_box_title">WhatsApp</h3>
						<p>305 355 9355</p>
					</div>
				</article>
				<form className="form_contact">
					<input onInput={(e) => handlerFormContact("name", e.target.value)} value={dataInfoContact.name} className="input" type="text" placeholder="Nombre" />
					<input onInput={(e) => handlerFormContact("email", e.target.value)} value={dataInfoContact.email} className="input" type="email" placeholder="Correo electrónico" />
					<input onInput={(e) => handlerFormContact("affeir", e.target.value)} value={dataInfoContact.affeir} className="input" type="text" placeholder="Asunto" />
					<textarea onInput={(e) => handlerFormContact("message", e.target.value)} value={dataInfoContact.message} placeholder="Mensaje"></textarea>
					{
						alertFormContact.isOpen ?
							<p style={{color:alertFormContact.type===0 ? "red":"green"}} className="error_amount error_item_cart alert_form_contact">{alertFormContact.message}</p>
							: ""
					}
					<button onClick={(e) => sendDataInfoContact(e)} className="btn btn_send_message_contact"> {isLoader ? <LoaderButton/> : <>Enviar <i className="uil uil-message"></i></>} </button>
				</form>
			</section>
			<Footer />
		</section>
	)
}

export default Contact;