import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ROUTES } from "../../constants/constants";
import "./HeaderSection.css";

const HeaderSection = ({ title }) => {

	return (
		<section className="container_section">
			<section className="header_section">
				<div className="content_section">
					<h1 className="section_title">{title}</h1>
					<div className="bread_crumb">
						<Link to={ROUTES.INIT}>Inicio</Link> <i className="uil uil-angle-right"></i> <span>{title}</span>
					</div>
				</div>
			</section>
		</section>
	)
}

export default HeaderSection;