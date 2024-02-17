import "./SliderAditionalProduct.css";
import { ROUTES, SETTINGS_SLIDER_RESPONSIVE } from "../../constants/constants";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ItemProduct from "../itemProduct/ItemProduct";


const SliderAditionalProduct = ({product}) => {
	const [productByCat,setProductsByCar]=useState([]);
	const products=useSelector((state)=>state.product.data.list);


	useEffect(()=>{
			const list=products.filter((pro)=>pro.category?._id===product?.category?._id && pro?._id !== product?._id);
			setProductsByCar(list);
	},[]);
	return (
		<section className="container container_main_categories list_products_relationals">
			<h1 className="container_title container_title_categories">Pruductos relacionados</h1>
			<div className="conatiner_slider_categories">
					{
						productByCat && productByCat.length > 0 ?
						<Slider {...SETTINGS_SLIDER_RESPONSIVE}>
								{
									productByCat.map((pro, index) => {
										return index<6 ? <div key={index}><ItemProduct product={pro}/></div>:""
									})
								}
							</Slider>
							:""
					}

			</div>
		</section>
	)
}

export default SliderAditionalProduct;