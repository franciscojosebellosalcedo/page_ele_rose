import { useSelector } from "react-redux";
import ItemProductCart from "../itemProductCart/ItemProductCart";
import "./CartRight.css";
import { getTotalPriceCart } from "../../helpers/helpers";

const CartRight = ({ handlerOpencart }) => {
	const listItemCart=useSelector((state)=>state.cart.data.list);
	const isOpenCart=useSelector((state)=>state.cart.data.active);

	return (
		<section className={`container_cart_right ${isOpenCart === true ? "see_cart" : ""}`}>
			<i className="uil uil-times icon_close" onClick={() => handlerOpencart()}></i>
			<p className="amout_product">{listItemCart.length}</p>
			<article className="list_products">
				{
					listItemCart && listItemCart.length >0 ?
						<>
							{
								listItemCart.map((item,index)=>{
									return <ItemProductCart index={index} item={item} />
								})
							}
						</>
					:""
				}
			</article>
			<div className="content_bottom_cart">
				<p className="title_total_price">Total: <span className="price_total">$ {getTotalPriceCart(listItemCart)}</span></p>
				<section className="section_button_cart">
					<button className="btn btn_cart">Ver carrito</button>
					<button className="btn btn_cart">Pedir por Whatsapp</button>
				</section>
			</div>
		</section>
	);
};

export default CartRight;
