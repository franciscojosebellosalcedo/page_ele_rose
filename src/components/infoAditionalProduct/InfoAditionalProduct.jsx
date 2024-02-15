import { useState } from "react";
import "./InfoAditionalProduct.css";

const InfoAditionalProduct = () => {
	const [openContent,setOpenContent]=useState({
		description:false,
		shipping:true,
		comments:false
	})

	const handlerOpenContent=(target)=>{
		const keys=Object.keys(openContent);
		const contents=openContent;
		for (let index = 0; index < keys.length; index++) {
			const key = keys[index];
			contents[key]=false;
		}
		contents[`${target}`]=true;
		setOpenContent({...contents});

	}
	return (
		<section className="section_aditional_product">
			<article className="list_title_info">
				<h3 onClick={()=>handlerOpenContent("description")} className={`title_item ${openContent.description===true ? "see_element_before_title":""}`}>Descripción</h3>
				<h3 onClick={()=>handlerOpenContent("shipping")} className={`title_item ${openContent.shipping===true ? "see_element_before_title":""}`}>Envios y pagos</h3>
				<h3 onClick={()=>handlerOpenContent("comments")} className={`title_item ${openContent.comments===true ? "see_element_before_title":""}`}>Comentarios</h3>
			</article>

		</section>
	)
}

export default InfoAditionalProduct;