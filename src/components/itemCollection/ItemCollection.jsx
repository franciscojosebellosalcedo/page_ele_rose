import { useSelector } from "react-redux";
import "./ItemCollection.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/constants";

const ItemCollection = ({ collection }) => {
	const products = useSelector((state) => state.product.data.list);
	const [amountProductByCollection, setAmountProductByCollection] = useState(0);
	const navigate=useNavigate();

	useEffect(() => {
		let aux=0;
		if(products.length >0 && collection){
			for (let index = 0; index < products.length; index++) {
				const product = products[index];
				if(product && product.collection){
					if(product.collection._id===collection._id){
						aux++;
					}
				}
			}
		}
		setAmountProductByCollection(aux);
	}, []);

	return (
		<div onClick={(e)=>navigate(ROUTES.ONE_COLLECTION+`/${collection?.name}`)} className="item_collection">
			<div className="content_img_item_collection">
				<img className="item_collection_img" src={collection?.imagen} alt="" />
				<h4 className="text_nowrap name_collection_recent item_name_collection">{collection?.name}</h4>
			</div>
			<p className="item_collection_amount_product">{amountProductByCollection} productos</p>
		</div>
	)
}

export default ItemCollection;