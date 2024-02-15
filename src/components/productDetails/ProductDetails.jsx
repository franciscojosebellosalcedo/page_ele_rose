import { useDispatch, useSelector } from "react-redux";
import "./ProductDetails.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/constants";
import { useState } from "react";
import { setActiveCart, setCart } from "../../features/cart/cart";

const ProductDetails = ({ product }) => {
	const [amount, setAmount] = useState(1);
	const [isValidAmount, setIsValidAmount] = useState(true);
	const categories = useSelector((state) => state.category.data.list);
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.data.list);
	const isOpenCart = useSelector((state) => state.cart.data.active);


	const addProductCart = (e) => {
		e.preventDefault();
		e.stopPropagation();
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
						<i onClick={() => incrementAmount(1)} className="uil uil-arrow-up icon_arrow_product details icon_controller_details1"></i>
						<i onClick={() => decrementAmount(1)} className="uil uil-arrow-down icon_arrow_product details icon_controller_details2"></i>
						<button onClick={(e) => addProductCart(e)} className="btn btn_add_cart_product_details">
							{cart.some((item) => item?.product?._id === product?._id) === true
								? "Producto en carrito"
								: "Agregar al carrito"}
						</button>
						<input onInput={(e) => handlerAmountInput(e.target.value)} value={amount} className="input_amount_product_details" type="number" />
					</div>
					{
						isValidAmount === false ?
							<p className="error_amount">Cantidad ingresada incorrecta</p>
							: ""
					}
					<div className="container_categories">
						<span className="list_categories">
							<label>Categorías:</label>
							{
								categories && categories.length > 0 ?
									<>
										{
											categories.map((cat, index) => {
												return index === categories.length - 1 ? <Link key={cat.name} to={ROUTES.ONE_CATEGORY + `/${cat?.name}`}>{cat?.name}</Link> : <Link key={cat.name} to={ROUTES.ONE_CATEGORY + `/${cat?.name}`}>{cat?.name},</Link>
											})
										}
									</>
									: ""
							}
						</span>
					</div>
				</div>

			</section>
		</section>
	)
}

export default ProductDetails;