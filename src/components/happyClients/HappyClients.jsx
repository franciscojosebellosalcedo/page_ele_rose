import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { INFO_ELEROSE, LIST_NUMBER_SCORE, SETTINGS_SLIDER_RESPONSIVE_RATINGS } from "../../constants/constants";
import "./HappyClients.css";

const HappyClients = () => {
	return (
		<section className="container container_happy_clients">
			<h1 className="container_title container_title_products_news"> {INFO_ELEROSE.ratingsClients.title} </h1>
			<div className="container_slider_ratings_client">
				<Slider {...SETTINGS_SLIDER_RESPONSIVE_RATINGS}>
					<div className="slider-container  slider_container_item_rating">
						<figure className="container_icon_rating">
							{
								LIST_NUMBER_SCORE.map((value, index) => {
									return 4 < value ? <AiOutlineStar className="icon_rating" score={4} /> : <AiFillStar className="icon_rating" />
								})
							}
						</figure>
						<h4 className="text_nowrap title_rating">Muy lindas</h4>
						<p className="text_nowrap description_rating">A mi hermana le gustó mucho </p>

						<section className="content_info_rating">
							<p className="text_nowrap name_client_rating">Francisco bello</p>
							<p className="date_rating">31/1/2024</p>
							<img className="slider_imagen_rating" src={require("../../assest/example-treme-1.webp")} alt="" />
							<p className="text_nowrap name_product_rating">Collar invisibles de perlas</p>
						</section>

					</div>
					<div className="slider-container  slider_container_item_rating">
						<figure className="container_icon_rating">
							{
								LIST_NUMBER_SCORE.map((value, index) => {
									return 4 < value ? <AiOutlineStar className="icon_rating" score={4} /> : <AiFillStar className="icon_rating" />
								})
							}
						</figure>
						<h4 className="text_nowrap title_rating">Muy lindas</h4>
						<p className="text_nowrap description_rating">A mi hermana le gustó mucho </p>

						<section className="content_info_rating">
							<p className="text_nowrap name_client_rating">Francisco bello</p>
							<p className="date_rating">31/1/2024</p>
							<img className="slider_imagen_rating" src={require("../../assest/example-treme-1.webp")} alt="" />
							<p className="text_nowrap name_product_rating">Collar invisibles de perlas</p>
						</section>

					</div>
					<div className="slider-container  slider_container_item_rating">
						<figure className="container_icon_rating">
							{
								LIST_NUMBER_SCORE.map((value, index) => {
									return 4 < value ? <AiOutlineStar className="icon_rating" score={4} /> : <AiFillStar className="icon_rating" />
								})
							}
						</figure>
						<h4 className="text_nowrap title_rating">Muy lindas</h4>
						<p className="text_nowrap description_rating">A mi hermana le gustó mucho </p>

						<section className="content_info_rating">
							<p className="text_nowrap name_client_rating">Francisco bello</p>
							<p className="date_rating">31/1/2024</p>
							<img className="slider_imagen_rating" src={require("../../assest/example-treme-1.webp")} alt="" />
							<p className="text_nowrap name_product_rating">Collar invisibles de perlas</p>
						</section>

					</div>
					<div className="slider-container  slider_container_item_rating">
						<figure className="container_icon_rating">
							{
								LIST_NUMBER_SCORE.map((value, index) => {
									return 4 < value ? <AiOutlineStar className="icon_rating" score={4} /> : <AiFillStar className="icon_rating" />
								})
							}
						</figure>
						<h4 className="text_nowrap title_rating">Muy lindas</h4>
						<p className="text_nowrap description_rating">A mi hermana le gustó mucho </p>

						<section className="content_info_rating">
							<p className="text_nowrap name_client_rating">Francisco bello</p>
							<p className="date_rating">31/1/2024</p>
							<img className="slider_imagen_rating" src={require("../../assest/example-treme-1.webp")} alt="" />
							<p className="text_nowrap name_product_rating">Collar invisibles de perlas</p>
						</section>

					</div>
					<div className="slider-container  slider_container_item_rating">
						<figure className="container_icon_rating">
							{
								LIST_NUMBER_SCORE.map((value, index) => {
									return 4 < value ? <AiOutlineStar className="icon_rating" score={4} /> : <AiFillStar className="icon_rating" />
								})
							}
						</figure>
						<h4 className="text_nowrap title_rating">Muy lindas</h4>
						<p className="text_nowrap description_rating">A mi hermana le gustó mucho </p>

						<section className="content_info_rating">
							<p className="text_nowrap name_client_rating">Francisco bello</p>
							<p className="date_rating">31/1/2024</p>
							<img className="slider_imagen_rating" src={require("../../assest/example-treme-1.webp")} alt="" />
							<p className="text_nowrap name_product_rating">Collar invisibles de perlas</p>
						</section>

					</div>
				</Slider>
			</div>
		</section>
	)
}

export default HappyClients;