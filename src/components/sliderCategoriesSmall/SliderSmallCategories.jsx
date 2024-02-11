import "./SliderSmallCategories.css";
import { ROUTES, SETTINGS_SLIDER_RESPONSIVE_CATEGORIES_ACCESORIES } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { useSelector } from "react-redux";


const SliderSmallCategories = () => {
	const nav = useNavigate();
	const categories = useSelector((state) => state.category.data.list);

    const navigate = (cat) => {
		nav(ROUTES.ONE_CATEGORY + `/${cat?.name}`);
	}

	return (
		<article className="container_slider_categories_accesories">
			<Slider {...SETTINGS_SLIDER_RESPONSIVE_CATEGORIES_ACCESORIES}>
				{categories.map((cat, index) => {
					return (
						<div key={index} className="slider-container content_item_slider">
							<span
								onClick={() => navigate(cat)}
								className=" item_slider_categories"
							>
								{cat?.name}
							</span>
						</div>
					);
				})}
			</Slider>
		</article>
	);
};

export default SliderSmallCategories;
