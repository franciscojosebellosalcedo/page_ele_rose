import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./HeaderSection.css";
import { ROUTES, SETTINGS_SLIDER_RESPONSIVE } from "../../constants/constants";
import { useSelector } from "react-redux";

const HeaderSection = ({ title }) => {
	const categories=useSelector((state)=>state.category.data.list);
	const collections=useSelector((state)=>state.collection.data.list);

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
			<article>
				<Slider {...SETTINGS_SLIDER_RESPONSIVE}>
					{
						categories.map((cat, index) => {
							return <div key={index} className="slider-container">
								<h4>{cat?.name}</h4>
							</div>
						})
					}
				</Slider>
			</article>
		</section>
	)
}

export default HeaderSection;