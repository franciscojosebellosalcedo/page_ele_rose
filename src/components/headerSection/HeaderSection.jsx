import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ROUTES, SETTINGS_SLIDER_RESPONSIVE_CATEGORIES_ACCESORIES } from "../../constants/constants";
import FilterProducts from "../filterProducts/FilterProducts";
import "./HeaderSection.css";

const HeaderSection = ({ title }) => {
	const categories = useSelector((state) => state.category.data.list);
	const nav = useNavigate();

	const navigate = (cat) => {
		nav(ROUTES.ONE_CATEGORY + `/${cat?.name}`);
	}

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
			<article className="container_slider_categories_accesories">
				<Slider {...SETTINGS_SLIDER_RESPONSIVE_CATEGORIES_ACCESORIES}>
					{
						categories.map((cat, index) => {
							return <div key={index} className="slider-container content_item_slider">
								<span onClick={() => navigate(cat)} className=" item_slider_categories">{cat?.name}</span>
							</div>
						})
					}
				</Slider>
			</article>
			<FilterProducts />
		</section>
	)
}

export default HeaderSection;