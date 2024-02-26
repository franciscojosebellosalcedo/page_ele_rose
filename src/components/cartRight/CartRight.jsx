import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/constants";
import {
	setActiveCart,
	setActiveSendOrder,
	setCart
} from "../../features/cart/cart";
import { setIsOpenModal } from "../../features/user/user";
import {
	getAllAmountPoductsOrder,
	getTotalPriceCart,
	isValidCart,
	isValidObject,
	sendOrderUser,
} from "../../utils/utils";
import ItemProductCart from "../itemProductCart/ItemProductCart";
import LoaderButton from "../loaderButton/LoaderButton";
import ModalOrderInfo from "../modalOrderInfo/ModalOrderInfo";
import "./CartRight.css";

const CartRight = ({ handlerOpencart }) => {
	const listItemCart = useSelector((state) => state.cart.data.list);
	const isOpenCart = useSelector((state) => state.cart.data.active);
	const user = useSelector((state) => state.user.data.user);
	const dispatch = useDispatch();
	const [alertOrder, setAlertOrder] = useState({
		message: "",
		type: 0,
		title: "",
	});
	const [isLoader, setIsLoader] = useState(false);
	const [isActiveModalInfoOrder, setIsActiveModalInfoOrder] = useState(false);
	const navigate = useNavigate();

	const goTo = (e) => {
		e.preventDefault();
		if (isOpenCart) {
			handlerOpencart();
		}
		navigate(`${ROUTES.CART}`);
	};

	const handlerOpenModalInfoOrder = () => {
		setIsActiveModalInfoOrder(!isActiveModalInfoOrder);
	};

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
							const responseOrder = await sendOrderUser(
								listItemCart,
								user,
								user.token
							);
							if (responseOrder.status === 201 && responseOrder.response) {
								dispatch(setActiveCart());
								dispatch(setCart([]));
								setAlertOrder({
									message:
										"Hemos recibido tu pedido y nos pondremos en contacto contigo en breve para confirmar todos los detalles y coordinar la entrega.",
									title: responseOrder.message,
									type: 1,
								});
							} else {
								setAlertOrder({
									message:
										"Se produjo un error al enviar el pedido, por favor intente nuevamente.",
									title: responseOrder.message,
									type: 0,
								});
							}
							handlerOpenModalInfoOrder();
						}
					}
				}
		} catch (error) {
			setAlertOrder({
				message:
					"Se produjo un error al enviar el pedido, por favor intente nuevamente.",
				title: "Error",
				type: 0,
			});
		}
		setIsLoader(false);
	};

	return (
		<section
			className={`container_cart_right ${
				isOpenCart === true ? "see_cart" : ""
			}`}
		>
			<i
				className="uil uil-times icon_close"
				onClick={() => handlerOpencart()}
			></i>
			<p className="amout_product">{getAllAmountPoductsOrder(listItemCart)}</p>
			{listItemCart && listItemCart.length > 0 ? (
				<>
					<article className="list_products">
						{listItemCart.map((item, index) => {
							return <ItemProductCart key={index} index={index} item={item} />;
						})}
					</article>
				</>
			) : (
				<section className="text_cart_empty">
					<h3>Carrito de compras vacio</h3>
					<button
						className="btn"
						onClick={() => {
							navigate(ROUTES.ACCESORIES);
							handlerOpencart();
						}}
					>
						Ver productos
					</button>
				</section>
			)}
			<div className="content_bottom_cart">
				<p className="title_total_price">
					Total:{" "}
					<span className="price_total">
						$ {getTotalPriceCart(listItemCart)}
					</span>
				</p>
				<section className="section_button_cart">
					<button className="btn btn_cart" onClick={(e) => goTo(e)}>
						Ver carrito
					</button>
					<button
						className="btn btn_cart btn_cart_send"
						onClick={(e) => sendOrder(e)}
					>
						{isLoader === true ? <LoaderButton /> : "Pedir por Whatsapp"}
					</button>
				</section>
			</div>
			<ModalOrderInfo
				alertOrder={alertOrder}
				isActiveModalInfoOrder={isActiveModalInfoOrder}
				handlerOpenModalInfoOrder={handlerOpenModalInfoOrder}
			/>
		</section>
	);
};

export default CartRight;
