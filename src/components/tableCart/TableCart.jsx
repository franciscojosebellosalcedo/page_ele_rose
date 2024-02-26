import { useDispatch, useSelector } from "react-redux";
import "./TableCart.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/constants";
import cart, { decrementAmountItem, incrementAmountItem, removeItemCart, setActiveCart, setActiveSendOrder, setAmountItemCart, setCart } from "../../features/cart/cart";
import { getTotalPriceCart, isValidCart, isValidObject, sendOrderUser } from "../../utils/utils";
import ModalOrderInfo from "../modalOrderInfo/ModalOrderInfo";
import { useState ,useEffect} from "react";
import { setIsOpenModal } from "../../features/user/user";
import LoaderButton from "../loaderButton/LoaderButton";

const TableCart = () => {
	const listItemCart = useSelector((state) => state.cart.data.list);
	const isActiveCart = useSelector((state) => state.cart.data.active);
	const [alertOrder, setAlertOrder] = useState({ message: "", type: 0, title: "" });
	const [isActiveModalInfoOrder, setIsActiveModalInfoOrder] = useState(false);
	const [isLoader, setIsLoader] = useState(false);
	const user = useSelector((state) => state.user.data.user);
	const nav = useNavigate();
	const dispatch = useDispatch();
	let [amounts,setAmounts]=useState([]);
	const [isValidAmount,setIsValidAmount]=useState(true);

	const handlerOpenModalInfoOrder = () => {
		setIsActiveModalInfoOrder(!isActiveModalInfoOrder);
	}

	const navigate = (url) => {
		nav(url);
		if (isActiveCart) {
			dispatch(setActiveCart());
		}
	}

	const removeItem = (index) => {
		dispatch(removeItemCart(index));
	}

	const sendOrder = async (e) => {
		e.preventDefault();
		setIsLoader(true);
		try {
			if (isValidObject(user) === false && listItemCart.length) {
				dispatch(setActiveSendOrder(true));
				dispatch(setIsOpenModal());
			} else {
					if (listItemCart.length > 0) {
						if (!isValidCart(listItemCart)) {
							handlerOpenModalInfoOrder();
							setAlertOrder({
								message:
									"Verifica que la cantidad ingresada en los productos sea la correcta, no debe superar lo disponible",
								title: "Error",
								type: 0,
							});
						}else{
							const responseOrder = await sendOrderUser(listItemCart, user, user.token);
							if (responseOrder.status === 201 && responseOrder.response) {
								if (isActiveCart) {
									dispatch(setActiveCart());
								}
								dispatch(setCart([]));
								setAlertOrder({
									message: "Hemos recibido tu pedido y nos pondremos en contacto contigo en breve para confirmar todos los detalles y coordinar la entrega.",
									title: responseOrder.message,
									type: 1
								});
							} else {
								setAlertOrder({
									message: "Se produjo un error al enviar el pedido, por favor intente nuevamente.",
									title: responseOrder.message,
									type: 0
								});
							}
							handlerOpenModalInfoOrder();
						}
					}
				
			}
		} catch (error) {
			setAlertOrder({
				message: "Se produjo un error al enviar el pedido, por favor intente nuevamente.",
				title: "Error",
				type: 0
			});
		}
		setIsLoader(false);
	}

	const handlerAmount=(value,item,index)=>{
		const list=amounts;
		if(value==="" || parseInt(value)===0){
			dispatch(setAmountItemCart({product:item.product,amount:0}));
			list[index].amount="";
			setAmounts(list);
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
			list[index].amount=num;
			setAmounts(list);
			setIsValidAmount(true);
		}
	}

	const decrementAmount=(index,num)=>{
		dispatch(decrementAmountItem({index,amount:num}));
		const list=amounts;
		if(listItemCart[index].amount-num>0){
			const newAmount=parseInt(list[index].amount)-num;
			list[index].amount=newAmount;
			setAmounts(list);
		}
	}

	const incremetAmount=(index,num,item)=>{
		dispatch(incrementAmountItem({index,amount:num}));
		if((parseInt(listItemCart[index].amount)+num)<=item.product.amount){
			const newAmount=parseInt(amounts[index].amount)+num;
			const list=amounts;
			list[index].amount===""?list[index].amount=1: list[index].amount<=0 || list[index].amount>item.product.amount ? list[index].amount=1 :list[index].amount=newAmount;
		}
		setIsValidAmount(true);
	}

	useEffect(()=>{
		if(listItemCart.length>0){
			const list=[];
			for (let index = 0; index < listItemCart.length; index++) {
				const item = listItemCart[index];
				const dataAmount={index,amount:item.amount}
				list.push(dataAmount);
			}
			setAmounts(list);
		}
	},[]);

	return (
		<section className="container_table_cart">
			{
				(listItemCart && listItemCart.length > 0) && amounts.length>0?
					<>
						<table className="resp">
							<thead>
								<tr>
									<th scope="col">Producto</th>
									<th scope="col">Precio</th>
									<th scope="col">Disponibles</th>
									<th scope="col">Cantidad</th>
									<th scope="col">Total</th>
									<th scope="col">Acciones</th>
								</tr>
							</thead>
							<tbody>
								{
									listItemCart.map((item, index) => {
										return <tr key={item.product._id}>
											<td>
												<div className="content_product_table">
													<img className="imagen_product_cart" src={item?.product.imagen} alt="" />
													<p className="name_product_cart">{item?.product.name}</p>
												</div>
											</td>
											<td>
												$ {item?.product?.pricePromotion > 0 ? item?.product?.pricePromotion : item?.product?.realPrice}
											</td>
											<td>
												{item?.product?.amount}
											</td>
											<td>
												<div className="container_input">
												<input onInput={(e)=>handlerAmount(e.target.value,item,index)} value={amounts[index].amount} style={{border: item?.amount===0 ? "1px solid red":""}} className="input_amount_cart" type="number" defaultValue={item?.amount} />
												<div className="controllers_inputs_table">
													<i onClick={()=>incremetAmount(index,1,item)}  className="uil uil-arrow-up icon_controller"></i>
													<i onClick={()=>decrementAmount(index,1,item)}  className="uil uil-arrow-down icon_controller"></i>
												</div>
												</div>
											</td>
											<td>
												$ {item?.product?.pricePromotion > 0 ? item?.product?.pricePromotion * item?.amount : item?.product?.realPrice * item?.amount}
											</td>
											<td>
												<i onClick={() => removeItem(index)} className="uil uil-times icon_delete_product_cart"></i>
											</td>
										</tr>
									})
								}
							</tbody>
						</table>
						<h3 className="total_price_order">Total:   <span>$ {getTotalPriceCart(listItemCart)}</span></h3>
						{
							isActiveCart === false ?
								<button onClick={(e) => sendOrder(e)} className="btn_cart btn_cart_page">{isLoader === true ? <LoaderButton /> : "Pedir por WhatsApp"}</button>
								: ""
						}
						<div>
							<button onClick={()=>navigate(ROUTES.ACCESORIES)} className="btn_cart_page_add_much_p">Agregar Más Productos</button>
						</div>
					</>
					:
					<section className="content_cart_empty">
						<h3>Carrito de compras vacio</h3>
						<button className="btn" onClick={() => { navigate(ROUTES.ACCESORIES) }}>Ver productos</button>
					</section>
			}
			<ModalOrderInfo alertOrder={alertOrder} isActiveModalInfoOrder={isActiveModalInfoOrder} handlerOpenModalInfoOrder={handlerOpenModalInfoOrder} />
		</section>
	);
};

export default TableCart;
