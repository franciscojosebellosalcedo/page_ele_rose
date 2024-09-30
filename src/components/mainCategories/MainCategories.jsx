import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ROUTES, SETTINGS_SLIDER_RESPONSIVE_CATEGORIES_MAIN } from "../../constants/constants";
import "./MainCategories.css";

const MainCategories = () => {
	const categories = useSelector((state) => state.category.data.list);
	const navigate=useNavigate();

	const goTo=(e,cat)=>{
		e.preventDefault();
		navigate(`${ROUTES.ONE_CATEGORY}/${cat.name}`);
	}

	return (
		<section className="container container_main_categories">
			<h1 className="container_title container_title_categories">Categorías</h1>
			<div className="conatiner_slider_categories">
					{
						categories && categories.length > 0 ?
						<Slider {...SETTINGS_SLIDER_RESPONSIVE_CATEGORIES_MAIN}>
								{
									categories.map((cat, index) => {
										return <div key={index} className="slider-container slider_container_categorie">
											<h4 className="item_slider_category_name">{cat?.name}</h4>
											<img className="slider_imagen_categorie" src={cat?.imagen} alt="" />
											<div className="container_see_more_categorie">
												<button className="btn btn_see_more_categorie" onClick={(e)=>goTo(e,cat)}>Ver más <i className="uil uil-arrow-right"></i></button>
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