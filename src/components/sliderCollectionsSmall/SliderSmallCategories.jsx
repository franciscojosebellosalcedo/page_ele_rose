import "./SliderSmallCategories.css";
import { ROUTES, SETTINGS_SLIDER_RESPONSIVE_CATEGORIES_ACCESORIES } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { useSelector } from "react-redux";


const SliderSmallCollections = () => {
	const nav = useNavigate();
	const collections = useSelector((state) => state.collection.data.list);

    const navigate = (coll) => {
		nav(ROUTES.ONE_COLLECTION + `/${coll?.name}`);
	}

	return (
		<article className="container_slider_categories_accesories">
			<Slider {...SETTINGS_SLIDER_RESPONSIVE_CATEGORIES_ACCESORIES}>
				{collections.map((coll, index) => {
					return (
						<div key={index} className="slider-container content_item_slider">
							<span
								onClick={() => navigate(coll)}
								className=" item_slider_categories"
							>
								{coll?.name}
							</span>
						</div>
					);
				})}
			</Slider>
		</article>
	);
};

export default SliderSmallCollections;
