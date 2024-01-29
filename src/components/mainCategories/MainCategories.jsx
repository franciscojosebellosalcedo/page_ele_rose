import "./MainCategories.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SETTINGS_SLIDER_RESPONSIVE } from "../../constants/constants";

const MainCategories = () => {


	return (
		<section className="container container_main_categories">
			<h1 className="container_title container_title_categories">Categorías</h1>
			<div className="conatiner_slider_categories">
				<Slider {...SETTINGS_SLIDER_RESPONSIVE}>
					<div className="slider-container slider_container_categorie">
						<img className="slider_imagen_categorie" src={require("./../../assest/example-treme-1.webp")} alt="" />
					</div>
					<div className="slider-container slider_container_categorie">
						<img className="slider_imagen_categorie" src={require("./../../assest/example-treme-2.webp")} alt="" />
					</div>
					<div className="slider-container slider_container_categorie">
						<img className="slider_imagen_categorie" src={require("./../../assest/example-treme-3.webp")} alt="" />
					</div>
				</Slider>
			</div>
		</section>
	)
}

export default MainCategories;