import { useSelector } from "react-redux";
import ItemProduct from "../itemProduct/ItemProduct";
import "./ProductsNews.css";

const ProductsNews = () => {
	const products=useSelector((state)=>state.product.data.list.filter((pro)=>pro.isNow===true));
	return (
		<section className='container container_products_news'>
			<h1 className="container_title container_title_products_news">Productos nuevos</h1>
			<div className="grid_products">
				{
					products && products.length >0 ?
						<>
							{
								products.map((product,index)=>{
									return <ItemProduct product={product}/>
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