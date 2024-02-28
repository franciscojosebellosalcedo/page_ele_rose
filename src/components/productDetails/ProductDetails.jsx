import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCart, setCart } from "../../features/cart/cart";
import "./ProductDetails.css";

const ProductDetails = ({ product }) => {
	const [amount, setAmount] = useState(1);
	const [isValidAmount, setIsValidAmount] = useState(true);
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.data.list);
	const isOpenCart = useSelector((state) => state.cart.data.active);


	const addProductCart = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (product.amount !== 0) {
			if (cart.some((item) => item.product._id === product._id) === false) {
				if (isValidAmount) {
					const list = [...cart];
					const dataProductCart = { amount: parseInt(amount), product };
					list.unshift(dataProductCart);
					dispatch(setCart(list));
					if (isOpenCart === false && cart.length === 0) {
						dispatch(setActiveCart());
					}
					setAmount(1);
				}
			}
		}
	};


	const incrementAmount = (n) => {
		let newAmount = amount + n;
		if (amount === "") {
			newAmount = 1;
		}
		if (newAmount <= product?.amount) {
			setAmount(newAmount);
			setIsValidAmount(true);
		}
	}

	const handlerAmountInput = (value) => {
		if (value > product?.amount || value < 1) {
			setIsValidAmount(false);
		} else {
			setIsValidAmount(true);
		}
		setAmount(value);
	}

	const decrementAmount = (n) => {
		let newAmount = amount - n;
		if (!newAmount < 1) {
			setAmount(newAmount);
		}
	}

	return (
		<section className="container_product_details">
			<section className="box_flex_details_product">

				<div className="content_img">
					{product?.isNow === true ? (
						<div className="stick_product_new">
							<span className="stick_text">Nuevo</span>
						</div>
					) : (
						""
					)}
					{product?.percentage > 0 ? (
						<div className="stick_product_promotion">
							<span className="stick_number_promotion">{product?.percentage}%</span>
						</div>
					) : (
						""
					)}
					<img className="image_product_details" src={product?.imagen} alt="" />
				</div>

				<div className="info_product_details">
					<div>
						<h3 className="name_product_details">{product?.name}</h3>
						{
							product?.pricePromotion > 0 ?
								<article className="info_price_product">
									<p>Precio descuento de {product.percentage}% :</p>
									<div>
										<p>${product?.realPrice}</p>
										<p>${product?.pricePromotion}</p>
									</div>
								</article>
								:
								<p className="price_product">Precio: <span>$ {product?.realPrice}</span></p>
						}
						<p className="amount_product_details" >Disponibles: <span >{product?.amount}</span></p>
						<div className="box_btn_add_cart">
							<button onClick={(e) => addProductCart(e)} className="btn btn_add_cart_product_details">
								{cart.some((item) => item?.product?._id === product?._id) === true
									? "Producto en carrito"
									: product?.amount === 0 ? "Agotado" : "Añadir al carrito"}
							</button>
							{
								product?.amount !== 0 ?
									<>
										<input onInput={(e) => handlerAmountInput(e.target.value)} value={amount} className="input_amount_product_details" type="number" />
										<i onClick={() => incrementAmount(1)} className="uil uil-arrow-up icon_arrow_product details icon_controller_details1"></i>
										<i onClick={() => decrementAmount(1)} className="uil uil-arrow-down icon_arrow_product details icon_controller_details2"></i>
									</>
									:
									""
							}
						</div>
						{
							isValidAmount === false ?
								<p className="error_amount">Cantidad ingresada incorrecta</p>
								: ""
						}
					</div>
				</div>

			</section>
		</section>
	)
}

export default ProductDetails;