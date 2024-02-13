import "./Footer.css";

const Footer = () => {
	return (
		<footer className="container container_footer">
			<section className="info_footer">
				<div className="content_info_footer">
					<h1 className="info_footer_title">Información</h1>
					<ul className="list_info_ele_rose">
						<li>Mi cuenta</li>
						<li><a href="https://api.whatsapp.com/message/24YJVHRVEYC3P1?autoload=1&app_absent=0" target="_blank" >Whatsapp +57 305 355 9355</a></li>
						<li><a href="mailto:laurasalguedo24@gmail.com?subject=Servicio%20al%20cliente&" target="_blank">elerose@gmail.com</a></li>
					</ul>
				</div>

				<div className="content_info_footer">
					<h1 className="info_footer_title">Ele rose</h1>
					<ul className="list_info_ele_rose">
						<li>Sobre nosotros</li>
						<li>Contacto</li>
					</ul>
				</div>

				<div className="content_info_footer">
					<a href="https://www.instagram.com/elerose_accesorios" target="_blank" className="icon_media">
						<i className="uil uil-instagram"></i>
					</a>
					<a href="https://api.whatsapp.com/message/24YJVHRVEYC3P1?autoload=1&app_absent=0" target="_blank" className="icon_media">
						<i className="uil uil-whatsapp"></i>
					</a>
					<a href="https://www.tiktok.com/@elerose_?_t=8jrOAosRLvR&_r=1" target="_blank" className="icon_media">
						<img src={require("../../assest/tik-tok.png")} alt="" />
					</a>
				</div>
			</section>

			<section className="info_footer_page">
				&#169; 2024 Ele Rose Accesorios - Todos los derechos reservados | Desarrollado por Francisco José Bello Salcedo
			</section>
		</footer>
	)
}

export default Footer;