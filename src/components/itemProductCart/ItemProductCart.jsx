import { useDispatch } from "react-redux";
import "./ItemProductCart.css";
import { removeItemCart } from "../../features/cart/cart";

const ItemProductCart = ({item,index}) => {
	const dispatch=useDispatch();

	const removeItem=()=>{
		dispatch(removeItemCart(index));
	}

	return (
		<div className="content_product_cart">
			<img className="img_product_cart" src={item?.product?.imagen} alt="" />
			<div className="section_data_product_cart">
				<p className="text_item_cart name_item_cart">{item?.product?.name} </p>
				<section className="section_bottom_item_cart">
					<div>
						<p className="text_nowrap text_item_cart amout_item_cart">Qty: {item?.amount}</p>
						<p className="text_nowrap text_item_cart name_item_cart">$ {item?.product?.pricePromotion >0 ? item?.product?.pricePromotion :item?.product?.realPrice}</p>
					</div>
					<input className="input_amount" value={item?.amount} type="number" name="" id="" />

				</section>
			</div>

			<i className="uil uil-times icon_delete_item_cart" onClick={()=>removeItem()}></i>
		</div>
	)
}

export default ItemProductCart;