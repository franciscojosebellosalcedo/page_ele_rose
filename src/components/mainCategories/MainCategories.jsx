import "./MainCategories.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SETTINGS_SLIDER_RESPONSIVE } from "../../constants/constants";
import { useSelector } from "react-redux";

const MainCategories = () => {
	const categories = useSelector((state) => state.category.data.list);

	return (
		<section className="container container_main_categories">
			<h1 className="container_title container_title_categories">Categorías</h1>
			<div className="conatiner_slider_categories">
					{
						categories && categories.length > 0 ?
						<Slider {...SETTINGS_SLIDER_RESPONSIVE}>
								{
									categories.map((cat, index) => {
										return <div className="slider-container slider_container_categorie">
											<h4 className="item_slider_category_name">{cat?.name}</h4>
											<img className="slider_imagen_categorie" src={cat?.imagen} alt="" />
											<div className="container_see_more_categorie">
												<button className="btn btn_see_more_categorie">Ver más <i className="uil uil-arrow-right"></i></button>
											</div>
										</div>
									})
								}
							</Slider>
							:""
					}

			</div>
		</section>
	)
}

export default MainCategories;