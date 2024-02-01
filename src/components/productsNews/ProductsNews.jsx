import { useSelector } from "react-redux";
import ItemProduct from "../itemProduct/ItemProduct";
import "./ProductsNews.css";

const ProductsNews = () => {
	const products=useSelector((state)=>state.product.data.list);
	return (
		<section className='container container_products_news'>
			<h1 className="container_title container_title_products_news">Productos nuevos</h1>
			<div className="grid_products">
				{
					products && products.length >0 ?
						<>
							{
								products.filter((pro)=>pro.isNow===true).map((product,index)=>{
									return <ItemProduct key={index} product={product}/>
								})
							}
						</>
					:""
				}

			</div>
		</section>
	)
}

export default ProductsNews;