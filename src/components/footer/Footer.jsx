import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/constants";
import { setIsOpenModal } from "../../features/user/user";
import { isValidObject } from "../../utils/utils";
import "./Footer.css";

const Footer = () => {
	const navigate=useNavigate();
	const userPage = useSelector((state) => state.user.data.user);
	const dispatch = useDispatch();
	const isOpenModal = useSelector((state) => state.user.data.isOpenModal)


	const handlerOpenModal = (e) => {
		e.preventDefault();
		if (isValidObject(userPage) === true) {
			navigate(ROUTES.ACCOUNT);
		} else {
			dispatch(setIsOpenModal());
		}
	}

	return (
		<footer className="container container_footer">
			<section className="info_footer">
				<div className="content_info_footer">
					<h1 className="info_footer_title">Información</h1>
					<ul className="list_info_ele_rose">
						<li onClick={(e)=>handlerOpenModal(e)} >Mi cuenta</li>
						<li><a href="https://wa.me/message/24YJVHRVEYC3P1" target="_blank" >Whatsapp +57 305 355 9355</a></li>
						<li><a href="mailto:laurasalguedo24@gmail.com?subject=Servicio%20al%20cliente&" target="_blank">eleroseaccesorios@gmail.com</a></li>
					</ul>
				</div>

				<div className="content_info_footer">
					<h1 className="info_footer_title">Ele rose</h1>
					<ul className="list_info_ele_rose">
						<li onClick={()=>navigate(ROUTES.ABOUT)}>Sobre nosotros</li>
						<li onClick={()=>navigate(ROUTES.CONTACT)}>Contacto</li>
					</ul>
				</div>

				<div className="content_info_footer">
					<h1 className="info_footer_title">Servicio al cliente</h1>
					<ul className="list_info_ele_rose">
						<li onClick={()=>navigate(ROUTES.FREQUENTY_QUESTIONS)}>Preguntas frecuentes</li>
						<li onClick={()=> navigate(ROUTES.INFO_SEND_ORDER)}>Envíos</li>
						<li onClick={()=> {}}>Proceso de compra</li>
						<li onClick={()=> {}}>Medios de pago</li>
					</ul>
				</div>

				<div className="content_info_footer">
					<h1 className="info_footer_title">Siguenos</h1>

						<ul>
						<a href="https://www.instagram.com/elerose_accesorios" target="_blank" className="icon_media">
							<i className="uil uil-instagram"></i>
						</a>
						<a href="https://wa.me/message/24YJVHRVEYC3P1" target="_blank" className="icon_media">
							<i className="uil uil-whatsapp"></i>
						</a>
						<a href="https://www.tiktok.com/@elerose_?_t=8jrOAosRLvR&_r=1" target="_blank" className="icon_media">
							<img src={require("../../assest/tik-tok.png")} alt="" />
						</a>
						</ul>
				</div>
			</section>

			<section className="info_footer_page">
				&#169; 2024 Ele Rose Accesorios - Todos los derechos reservados | Desarrollado por Francisco José Bello Salcedo
			</section>
		</footer>
	)
}

export default Footer;