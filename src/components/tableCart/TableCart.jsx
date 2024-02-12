import { useDispatch, useSelector } from "react-redux";
import "./TableCart.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/constants";
import { removeItemCart, setActiveCart, setActiveSendOrder, setCart } from "../../features/cart/cart";
import { getTotalPriceCart, isValidObject, sendOrderUser } from "../../utils/utils";
import ModalOrderInfo from "../modalOrderInfo/ModalOrderInfo";
import { useState } from "react";
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
		} catch (error) {
			setAlertOrder({
				message: "Se produjo un error al enviar el pedido, por favor intente nuevamente.",
				title: "Error",
				type: 0
			});
		}
		setIsLoader(false);
	}


	return (
		<section className="container_table_cart">
			{
				listItemCart && listItemCart.length > 0 ?
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
												<div>
												<input className="input_amount_cart" type="number" defaultValue={item?.amount} />

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
