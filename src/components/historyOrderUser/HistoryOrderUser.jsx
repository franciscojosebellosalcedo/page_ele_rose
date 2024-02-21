import "./HistoryOrderUser.css";

const HistoryOrderUser = () => {
	return (
		<section className="container_orders_user">
			<h1 className="container_title title_history_orders">Mis historial de pedidos</h1>
			<article className="container_table_orders">
				<table className="resp_order">
					<thead>
						<tr>
							<th scope="col">Productos</th>
							<th scope="col">Total</th>
							<th scope="col">Fecha</th>
							<th scope="col">Estado</th>
							<th scope="col">Dirección</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>
								<section className="list_products_order">
									<div className="item_order">
										<img className="item_order_img" src={require("../../assest/example-treme-1.webp")} alt="" />
										<div className="info_item_order_user">
											<p>Collar de perlas</p>
											<p>Precio: <span>$ 15.000</span></p>
											<p>Qty: <span>1</span></p>
										</div>
									</div>
									<div className="item_order">
										<img className="item_order_img" src={require("../../assest/example-treme-1.webp")} alt="" />
										<div className="info_item_order_user">
											<p>Collar de perlas</p>
											<p>Precio: <span>$ 15.000</span></p>
											<p>Qty: <span>1</span></p>
										</div>
									</div>
								</section>
							</td>
							<td>
								$ 30.000
							</td>
							<td>
								10/12/2024
							</td>
							<td>
								<p>Pendiente</p>
							</td>
							<td>
								Arjona bolivar calle buenos aires
							</td>
						</tr>
						<tr>
							<td>
								<section className="list_products_order">
									<div className="item_order">
										<img className="item_order_img" src={require("../../assest/example-treme-1.webp")} alt="" />
										<div className="info_item_order_user">
											<p>Collar de perlas</p>
											<p>Precio: <span>$ 15.000</span></p>
											<p>Qty: <span>1</span></p>
										</div>
									</div>
									<div className="item_order">
										<img className="item_order_img" src={require("../../assest/example-treme-1.webp")} alt="" />
										<div className="info_item_order_user">
											<p>Collar de perlas</p>
											<p>Precio: <span>$ 15.000</span></p>
											<p>Qty: <span>1</span></p>
										</div>
									</div>
								</section>
							</td>
							<td>
								$ 30.000
							</td>
							<td>
								10/12/2024
							</td>
							<td>
								<p>Pendiente</p>
							</td>
							<td>
								Arjona bolivar calle buenos aires
							</td>
						</tr>
						<tr>
							<td>
								<section className="list_products_order">
									<div className="item_order">
										<img className="item_order_img" src={require("../../assest/example-treme-1.webp")} alt="" />
										<div className="info_item_order_user">
											<p>Collar de perlas</p>
											<p>Precio: <span>$ 15.000</span></p>
											<p>Qty: <span>1</span></p>
										</div>
									</div>
									<div className="item_order">
										<img className="item_order_img" src={require("../../assest/example-treme-1.webp")} alt="" />
										<div className="info_item_order_user">
											<p>Collar de perlas</p>
											<p>Precio: <span>$ 15.000</span></p>
											<p>Qty: <span>1</span></p>
										</div>
									</div>
								</section>
							</td>
							<td>
								$ 30.000
							</td>
							<td>
								10/12/2024
							</td>
							<td>
								<p>Pendiente</p>
							</td>
							<td>
								Arjona bolivar calle buenos aires
							</td>
						</tr>
					</tbody>
				</table>
			</article>
		</section>
	)
}

export default HistoryOrderUser;