import { useDispatch, useSelector } from "react-redux";
import "./ItemProduct.css";
import { setActiveCart, setCart } from "../../features/cart/cart";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/constants";

const ItemProduct = ({ product }) => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.data.list);
	const isOpenCart = useSelector((state) => state.cart.data.active);
	const navigate=useNavigate();

	const addProductCart = (e, product) => {
		if (cart.some((item) => item.product._id === product._id) === false) {
			const list = [...cart];
			const dataProductCart = { amount: 1, product };
			list.unshift(dataProductCart);
			dispatch(setCart(list));
			if (isOpenCart === false && cart.length===0) {
				dispatch(setActiveCart());
			}
		}
	};

	return (
		<div className="grid_item_product" onClick={()=>navigate(ROUTES.PRODUCT+`/${product.name}`)}>
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
			<img className="img_grid_item" src={product?.imagen} alt="" />
			<div className="conatiner_data_grid_item">
				<h3 className="grid_item_name_product">{product?.name}</h3>
				{product?.percentage > 0 ? (
					<section className="content_promotion">
						<div className="content_price price_real">
							<p>$ {product?.realPrice}</p>
						</div>
						<div className="content_price price_promotion">
							<p>$ {product?.pricePromotion}</p>
						</div>
					</section>
				) : (
					<p className="grid_item_price_product">$ {product?.realPrice}</p>
				)}
			</div>
			<button
				className="btn btn_add_car"
				onClick={(e) => addProductCart(e, product)}
			>
				{cart.some((item) => item.product._id === product._id) === true
					? "En carrito"
					: "Agregar al carrito"}
				<i
					title="Agregar al carrito"
					className="uil uil-shopping-bag icon_item_grid"
				></i>
			</button>
		</div>
	);
};

export default ItemProduct;
