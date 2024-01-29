import "./ItemProduct.css";

const ItemProduct = () => {
	return (
		<div className="grid_item_product">
			<div className="stick_product_new">
				<span className="stick_text">Nuevo</span>
			</div>
			<div className="stick_product_promotion">
				<span className="stick_number_promotion">%50</span>
			</div>
			<img className="img_grid_item" src={require("../../assest/img-p-1.jpeg")} alt="" />
			<div className="conatiner_data_grid_item">
				<h3 className="grid_item_name_product">Collar invisible de perlas</h3>
				<p className="grid_item_price_product">$ 20.000</p>
				{/* <section className="content_promotion">
							<div className="content_price price_real">
								<p>$ 20.000</p>
							</div>
							<div className="content_price price_promotion">
								<p>$ 18.000</p>
							</div>
						</section> */}
			</div>
			<button className="btn btn_add_car">
				Agregar al carrito
				<i title="Agregar al carrito" class="uil uil-shopping-bag icon_item_grid"></i>
			</button>
		</div>
	)
}

export default ItemProduct;