import { useDispatch } from "react-redux";
import "./ItemProductCart.css";
import { incrementAmountItem,decrementAmountItem, removeItemCart, setActiveCart } from "../../features/cart/cart";

const ItemProductCart = ({item,index}) => {
	const dispatch=useDispatch();

	const removeItem=()=>{
		dispatch(removeItemCart(index));
		if(index===0){
			dispatch(setActiveCart());
		}
	}

	const decrementAmount=(index,amount)=>{
		dispatch(decrementAmountItem({index,amount}));
	}
	const incremetAmount=(index,amount)=>{
		dispatch(incrementAmountItem({index,amount}));
	}

	return (
		<div className="content_product_cart">
			<img className="img_product_cart" src={item?.product?.imagen} alt="" />
			<div className="section_data_product_cart">
				<p className="text_item_cart name_item_cart">{item?.product?.name} </p>
				<section className="section_bottom_item_cart">
					<div>
						<p className="text_nowrap text_item_cart amout_item_cart">Disp: {item?.product?.amount}</p>
						<p className="text_nowrap text_item_cart amout_item_cart">Qty: {item?.amount}</p>
						<p className="text_nowrap text_item_cart price_item_cart">$ {item?.product?.pricePromotion >0 ? item?.product?.pricePromotion :item?.product?.realPrice}</p>
					</div>
					<input  className="input_amount" value={item?.amount} type="number" name="" id="" />
					<div className="controllers">
						<i onClick={()=>incremetAmount(index,1)} className="uil uil-arrow-up icon_controller"></i>
						<i onClick={()=>decrementAmount(index,1)} className="uil uil-arrow-down icon_controller"></i>
					</div>
				</section>
			</div>

			<i className="uil uil-times icon_delete_item_cart" onClick={()=>removeItem()}></i>
		</div>
	)
}

export default ItemProductCart;