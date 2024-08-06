import { INFO_ELEROSE } from "../../constants/constants";
import ItemProduct from "../itemProduct/ItemProduct";
import "./ListProducts.css";

const ListProducts = ({products , isPageDiscount, isPageFavorite}) => {

	const getTextProductListEmpty = ()=>{

		if(isPageDiscount === true){
			return  "No hay productos en descuento"
		}

		if(isPageFavorite === true){
			return "No tienes productos favoritos"
		}

		return INFO_ELEROSE.messageProductsNotFound;
	}

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
					:<p className="message_list_products">{getTextProductListEmpty()}</p>
				}
			</div>
	)
}

export default ListProducts;