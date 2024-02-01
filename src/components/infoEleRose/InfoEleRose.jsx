import { INFO_ELEROSE } from "../../constants/constants";
import "./InfoEleRose.css";

const InfoEleRose = () => {
	return (
		<section className="container container_info_ele_rose">
			<article className="content_info">
				<img className="info_icon" src={require("../../assest/icon-service-client.png")} alt="" />
				<div className="info_data">
					<h1 className="info_title">{INFO_ELEROSE.serviceClient.title}</h1>
					<p className="info_text">{INFO_ELEROSE.serviceClient.text}</p>
				</div>
			</article>
			<article className="content_info">
				<img className="info_icon" src={require("../../assest/icon-car.png")} alt="" />
				<div className="info_data">
					<h1 className="info_title">{INFO_ELEROSE.deliveries.title}</h1>
					<p className="info_text">{INFO_ELEROSE.deliveries.text}</p>
				</div>
			</article>
		</section>
	)
}

export default InfoEleRose;