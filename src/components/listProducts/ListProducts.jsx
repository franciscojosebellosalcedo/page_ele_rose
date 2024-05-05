import { INFO_ELEROSE } from "../../constants/constants";
import ItemProduct from "../itemProduct/ItemProduct";
import "./ListProducts.css";

const ListProducts = ({products}) => {
	return (
		<div className="grid_products">
				{
					products && products.length >0 ?
						<>
							{
								products.map((product,index)=>{
									return product.status=== true ? product.category !== null ?<ItemProduct key={index} product={product}/>: "":""
								})
							}
						</>
					:<p className="message_list_products">{INFO_ELEROSE.messageProductsNotFound}</p>
				}
			</div>
	)
}

export default ListProducts;