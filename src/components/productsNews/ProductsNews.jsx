import { useSelector } from "react-redux";
import ListProducts from "../listProducts/ListProducts";
import "./ProductsNews.css";

const ProductsNews = () => {
	const products=useSelector((state)=>state.product.data.list);
	return (
		<section className='container container_products_news'>
			<h1 className="container_title container_title_products_news">Productos nuevos</h1>
			<ListProducts products={products.filter((pro)=>pro.isNow===true)}/>
		</section>
	)
}

export default ProductsNews;