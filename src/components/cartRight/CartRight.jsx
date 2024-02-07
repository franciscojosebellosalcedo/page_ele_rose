import ItemProductCart from "../itemProductCart/ItemProductCart";
import "./CartRight.css";

const CartRight = ({isOpenCart,handlerOpencart}) => {
	return (
		<section className={`container_cart_right ${isOpenCart===true ?"see_cart":""}`}>
			<i className="uil uil-times icon_close" onClick={()=>handlerOpencart()}></i>
			<p className="amout_product">2</p>
			<article className="list_products">
                <ItemProductCart/>
                <ItemProductCart/>
                <ItemProductCart/>
                <ItemProductCart/>
                <ItemProductCart/>
                <ItemProductCart/>
                <ItemProductCart/>
                <ItemProductCart/>
                <ItemProductCart/>
                <ItemProductCart/>
                <ItemProductCart/>
                <ItemProductCart/>
            </article>
			<div className="content_bottom_cart">
                <p className="title_total_price">Total: <span className="price_total">$ 30.000</span></p> 
				<section className="section_button_cart">
					<button className="btn btn_cart">Ver carrito</button>
					<button className="btn btn_cart">Pedir por Whatsapp</button>
				</section>
			</div>
		</section>
	);
};

export default CartRight;
