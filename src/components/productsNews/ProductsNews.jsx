import ItemProduct from "../itemProduct/ItemProduct";
import "./ProductsNews.css";

const ProductsNews = () => {
	return (
		<section className='container container_products_news'>
			<h1 className="container_title container_title_products_news">Productos nuevos</h1>
			<div className="grid_products">
				<ItemProduct/>
				<ItemProduct/>
				<ItemProduct/>
				<ItemProduct/>
				<ItemProduct/>
				<ItemProduct/>
			</div>
		</section>
	)
}

export default ProductsNews;