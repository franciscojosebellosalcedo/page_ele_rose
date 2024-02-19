import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { SETTINGS_SLIDER_RESPONSIVE } from "../../constants/constants";
import ItemProduct from "../itemProduct/ItemProduct";
import "./SliderAditionalProduct.css";


const SliderAditionalProduct = ({ product }) => {
	const [productByCat, setProductsByCar] = useState([]);
	const products = useSelector((state) => state.product.data.list);

	const toUp = () => {
		if (window.scrollY > 200) {
			window.scrollTo({
				top: 0, behavior: "smooth"
			});
		}
	}


	useEffect(() => {
		const list = products.filter((pro) => pro.category?._id === product?.category?._id && pro?._id !== product?._id);
		setProductsByCar(list);
	}, []);
	return (
		productByCat && productByCat.length > 0 ?
			<section className="container container_main_categories list_products_relationals">
				<h1 className="container_title container_title_categories">Pruductos relacionados</h1>
				<div className="conatiner_slider_categories">
					{
						<Slider {...SETTINGS_SLIDER_RESPONSIVE}>
							{
								productByCat.map((pro, index) => {
									return index < 6 ? <div onClick={() => toUp()} key={index}><ItemProduct product={pro} /></div> : ""
								})
							}
						</Slider>
					}

				</div>
			</section> : ""
	)
}

export default SliderAditionalProduct;