import "./SliderMain.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SETTINGS_SLIDER_MAIN } from "../../constants/constants";

const  SliderMain=()=> {

	return (
		<div className="container container_slider">
			<Slider {...SETTINGS_SLIDER_MAIN}>
				<div className="slider-container">
					<img className="slider_imagen" src={require("./../../assest/example-img-slider.jpeg")} alt="" />
				</div>
			</Slider>
		</div>
	);
}

export default SliderMain;