import "./Footer.css";

const Footer = () => {
	return (
		<footer className="container container_footer">
			<section className="info_footer">
				<div className="content_info_footer">
					<h1 className="info_footer_title">Información</h1>
					<ul className="list_info_ele_rose">
						<li>Mi cuenta</li>
						<li>Whatsapp +57 3053559355</li>
						<li>elerose@gmail.com</li>
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
					<figure className="icon_media">
						<i className="uil uil-instagram"></i>
					</figure>
					<figure className="icon_media">
						<i className="uil uil-whatsapp"></i>
					</figure>
					<figure className="icon_media">
						<img src={require("../../assest/tik-tok.png")} alt="" />
					</figure>
				</div>
			</section>

			<section className="info_footer_page">
				&#169; 2024 Ele Rose Accesorios - Todos los derechos reservados | Desarrollado por Francisco José Bello Salcedo
			</section>
		</footer>
	)
}

export default Footer;