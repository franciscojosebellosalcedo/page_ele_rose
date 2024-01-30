import "./ItemProduct.css";

const ItemProduct = ({ product }) => {
	return (
		<div className="grid_item_product">
			{
				product?.isNow === true ?
					<div className="stick_product_new">
						<span className="stick_text">Nuevo</span>
					</div>
					: ""
			}
			{
				product?.percentage > 0 ?
					<div className="stick_product_promotion">
						<span className="stick_number_promotion">{product?.percentage}%</span>
					</div>
					: ""
			}
			<img className="img_grid_item" src={product?.imagen} alt="" />
			<div className="conatiner_data_grid_item">
				<h3 className="grid_item_name_product">{product?.name}</h3>
				{
					product?.percentage > 0 ?
						<section className="content_promotion">
							<div className="content_price price_real">
								<p>$ {product?.realPrice}</p>
							</div>
							<div className="content_price price_promotion">
								<p>$ {product?.pricePromotion}</p>
							</div>
						</section>
						:
						<p className="grid_item_price_product">$ {product?.realPrice}</p>

				}

			</div>
			<button className="btn btn_add_car">
				Agregar al carrito
				<i title="Agregar al carrito" className="uil uil-shopping-bag icon_item_grid"></i>
			</button>
		</div>
	)
}

export default ItemProduct;