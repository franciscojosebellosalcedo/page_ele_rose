import { useDispatch, useSelector } from "react-redux";
import { decrementAmountItem, incrementAmountItem, removeItemCart, setActiveCart, setAmountItemCart } from "../../features/cart/cart";
import "./ItemProductCart.css";

const ItemProductCart = ({item,index}) => {
	const cart=useSelector((state)=>state.cart.data.list);
	const dispatch=useDispatch();

	const removeItem=()=>{
		dispatch(removeItemCart(index));
		if(cart.length===1){
			dispatch(setActiveCart());
		}
	}

	const decrementAmount=(index,amount)=>{
		dispatch(decrementAmountItem({index,amount}));
	}

	const incremetAmount=(index,amount)=>{
		dispatch(incrementAmountItem({index,amount}));
	}

	// const setAmountItem=(value,item)=>{
	// 	const valueAmount=parseInt(value);
	// 	if(value === "" ){
	// 		dispatch(setAmountItemCart({amount:1,product:item.product}));
	// 	}else if(valueAmount < 1){
	// 		dispatch(setAmountItemCart({amount:1,product:item.product}));
	// 	}
	// 	else if(valueAmount>item.product.amount){
	// 		dispatch(setAmountItemCart({amount:item.product.amount,product:item.product}));
	// 	}
	// 	else{
	// 		dispatch(setAmountItemCart({amount:valueAmount,product:item.product}));
	// 	}
	// }


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
					{/* <input value={item?.amount} className="input_amount"  type="number" name="" id="" /> */}
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