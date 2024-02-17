import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { INFO_ELEROSE, LIST_NUMBER_SCORE, ROUTES, SETTINGS_SLIDER_RESPONSIVE_RATINGS } from "../../constants/constants";
import "./HappyClients.css";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

const HappyClients = () => {
	const qualifications = useSelector((state) => state.qualification.data.list);
	const navigate=useNavigate();

	return (
		<section className="container container_happy_clients">
			<h1 className="container_title container_title_products_news"> {INFO_ELEROSE.ratingsClients.title} </h1>
			<div className="container_slider_ratings_client">
				{
					qualifications && qualifications.length > 0 ?
						<>
							<Slider {...SETTINGS_SLIDER_RESPONSIVE_RATINGS}>
								{
									qualifications.map((qual, index) => {
										return <div key={index} className="slider-container  slider_container_item_rating">
											<figure className="container_icon_rating">
												{
													LIST_NUMBER_SCORE.map((value, index) => {
														return qual.score < value ? <AiOutlineStar key={index} className="icon_rating" score={qual.score} /> : <AiFillStar key={index} className="icon_rating" />
													})
												}
											</figure>
											<h4 className="text_nowrap title_rating">{qual?.title}</h4>
											<p className="text_nowrap description_rating">{qual?.description} </p>

											<section className="content_info_rating">
												<p className="text_nowrap name_client_rating">{qual?.user?.name}</p>
												<p className="date_rating">{formatDate(qual?.createdAt)}</p>
												<img onClick={()=>navigate(ROUTES.PRODUCT+`/${qual?.product?.name}`)} className="slider_imagen_rating" src={qual?.product?.imagen} alt="" />
												<p className="text_nowrap name_product_rating">{qual?.product?.name}</p>
											</section>

										</div>
									})
								}
							</Slider>
						</>
						: ""
				}


			</div>
		</section>
	)
}

export default HappyClients;