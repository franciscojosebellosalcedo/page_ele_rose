import { useDispatch, useSelector } from "react-redux";
import { decrementAmountItem, incrementAmountItem, removeItemCart, setActiveCart, setAmountItemCart } from "../../features/cart/cart";
import "./ItemProductCart.css";
import { useEffect, useState,useRef } from "react";

const ItemProductCart = ({item,index}) => {
	const cart=useSelector((state)=>state.cart.data.list);
	const isActiveCart=useSelector((state)=>state.cart.data.active);
	let [amount,setAmount]=useState(1);
	const [isValidAmount,setIsValidAmount]=useState(true);
	const dispatch=useDispatch();

	const removeItem=()=>{
		dispatch(removeItemCart(index));
		if(cart.length===1){
			dispatch(setActiveCart());
		}
	}

	const handlerAmount=(value)=>{
		if(value==="" || parseInt(value)===0){
			dispatch(setAmountItemCart({product:item.product,amount:0}));
			setAmount("");
			setIsValidAmount(false);
		}else{
			const num=parseInt(value);
			if(num<0 || num>item.product.amount){
				setIsValidAmount(false);
				dispatch(setAmountItemCart({product:item.product,amount:0}));
			}else{
				setIsValidAmount(true);
				dispatch(setAmountItemCart({product:item.product,amount:num}));
			}
			setAmount(num);
		}
	}

	const decrementAmount=(index,num)=>{
		dispatch(decrementAmountItem({index,amount:num}));
		if(cart[index].amount-num>0){
			const newAmount=parseInt(amount)-num;
			setAmount(newAmount);
		}
	}

	const incremetAmount=(index,num)=>{
		dispatch(incrementAmountItem({index,amount:num}));
		if((cart[index].amount+num)<=item.product.amount){
			const newAmount=parseInt(amount)+num;
			setAmount(amount === ""? 1 :amount <=0 || amount>item.product.amount ? 1:newAmount);
		}
		setIsValidAmount(true);
	}

	useEffect(()=>{
		if(cart.length>0){
			setAmount(cart[index].amount);
		}
	},[]);

	useEffect(()=>{
		if(cart.length>0){
			setAmount(cart[index].amount);
		}
	},[cart.length]);

	useEffect(()=>{
		if(cart.length>0){
			setAmount(cart[index].amount);
		}
	},[isActiveCart]);

	return (
		<section className="container_item_cart">
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
					<input onInput={(e)=>handlerAmount(e.target.value)} value={amount}  className="input_amount"  type="number"/>
					<div className="controllers">
						<i onClick={()=>incremetAmount(index,1)}  className="uil uil-arrow-up icon_controller"></i>
						<i onClick={()=>decrementAmount(index,1)}  className="uil uil-arrow-down icon_controller"></i>
					</div>
				</section>
			</div>


			<i className="uil uil-times icon_delete_item_cart" onClick={()=>removeItem()}></i>
		</div>
		{
			isValidAmount === false ?
				<p className="error_amount error_item_cart">Cantidad ingresada incorrecta</p>
			:""
		}
		</section>
	)
}

export default ItemProductCart;