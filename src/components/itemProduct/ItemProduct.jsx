import { useDispatch, useSelector } from "react-redux";
import "./ItemProduct.css";
import { setActiveCart, setCart } from "../../features/cart/cart";
import { addProductFavorite} from "../../features/product/product";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/constants";
import { formatePriceProduct } from "../../utils/utils";

const ItemProduct = ({ product }) => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.data.list);
	const isOpenCart = useSelector((state) => state.cart.data.active);
	const navigate=useNavigate();

	const products = useSelector((state)=>state.product.data.favorites);

	const isProductFavorite = ()=>{
		const is = products.some((idProduct) => idProduct === product._id);
		return is;
	}

	const handlerAddProductToFavorite = (idProduct)=>{

		dispatch(addProductFavorite(idProduct));

	}

	const addProductCart = (e, product) => {
		e.preventDefault();
		e.stopPropagation();
		if(product?.amount!=0){
			if (cart.some((item) => item.product._id === product._id) === false) {
				const list = [...cart];
				const dataProductCart = { amount: 1, product };
				list.unshift(dataProductCart);
				dispatch(setCart(list));
				if (isOpenCart === false && cart.length===0) {
					dispatch(setActiveCart());
				}
			}
		}
	};

	return (
		<>
			{
				product ?
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

				<div  className={`icon_heart ${isProductFavorite() ? 'favorite_true' : '' } `} onClick={(e)=>{
					e.stopPropagation();
					handlerAddProductToFavorite(product._id);
				}}>
					<i className="uil uil-heart"></i>
				</div>
				<div className="conatiner_data_grid_item">
					<h3 className="grid_item_name_product">{product?.name}</h3>
					{product?.percentage > 0 ? (
						<section className="content_promotion">
							<div className="content_price price_real">
								<p>$ {formatePriceProduct(product?.realPrice)}</p>
							</div>
							<div className="content_price price_promotion">
								<p>$ {formatePriceProduct(product?.pricePromotion)}</p>
							</div>
						</section>
					) : (
						<p className="grid_item_price_product">$ {formatePriceProduct(product?.realPrice)}</p>
					)}
				</div>
				<button
					className="btn btn_add_car"
					onClick={(e) => addProductCart(e, product)}
				>
					{cart.some((item) => item.product._id === product._id) === true
						? "En carrito"
						: product?.amount===0 ? "Agotado":"Añadir al carrito"}
					<i
						title="Agregar al carrito"
						className="uil uil-shopping-bag icon_item_grid"
					></i>
				</button>
			</div>
				: ""
			}
		</>
	);
};

export default ItemProduct;
