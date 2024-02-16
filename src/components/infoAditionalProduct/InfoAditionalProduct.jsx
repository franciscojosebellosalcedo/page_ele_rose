import { useState } from "react";
import "./InfoAditionalProduct.css";
import { INFO_ELEROSE } from "../../constants/constants";
import Qualification from "../qualification/Qualification";
import { useDispatch, useSelector } from "react-redux";
import { setActiveQualification } from "../../features/qualification/qualification";

const InfoAditionalProduct = ({product}) => {
	const [openContent, setOpenContent] = useState({
		description: true,
		shipping: false,
		comments: false
	});
	const dispatch=useDispatch();

	const handlerOpenContent = (target) => {
		const keys = Object.keys(openContent);
		const contents = openContent;
		for (let index = 0; index < keys.length; index++) {
			const key = keys[index];
			contents[key] = false;
		}
		if(target==="comments" && contents[`${target}`]===false){
			dispatch(setActiveQualification(false));
		}else{
			dispatch(setActiveQualification(true));
		}
		contents[`${target}`] = true;
		setOpenContent({ ...contents });

	}
	return (
		<section className="">
			<section className="section_aditional_product">
				<article className="list_title_info">
					<h3 onClick={() => handlerOpenContent("description")} className={`title_item ${openContent.description === true ? "see_element_before_title" : ""}`}>Descripción</h3>
					<h3 onClick={() => handlerOpenContent("shipping")} className={`title_item ${openContent.shipping === true ? "see_element_before_title" : ""}`}>Envios y pagos</h3>
					<h3 onClick={() => handlerOpenContent("comments")} className={`title_item ${openContent.comments === true ? "see_element_before_title" : ""}`}>Comentarios</h3>
				</article>
			</section>
			{
				openContent.shipping === true ?
					<p className="text_info_shipping">{INFO_ELEROSE.infoEleRoseDetails}</p>
					: ""
			}
			{
				openContent.description === true ?
					<div className="content_description">
						<h3 className="title_description">Maximiza la Vida Útil de Tu Producto con los siguientes Consejos</h3>
						<ul className="list_tips">
							<li>
								<p>Evita el contacto con el agua</p>
							</li>
							<li>
								<p>Pontelos después de aplicar perfumes, cremas o productos de belleza</p>
							</li>
							<li>
								<p>Evita hacer ejercicio con ellos</p>
							</li>
							<li>
								<p>Evita el contacto con productos químicos</p>
							</li>
							<li>
								<p>Limpialos con un paño suave y guardalos en un lugar seco después de usarlos</p>
							</li>
						</ul>
					</div>
					: ""
			}
			{
				openContent.comments=== true ?
					<Qualification product={product}/>
				:""
			}
		</section>
	)
}

export default InfoAditionalProduct;