import { useEffect } from "react";
import "./HistoryOrderUser.css";

const HistoryOrderUser = ({user}) => {

	useEffect(()=>{
		console.log(user)
	},[]);
	return (
		<section className="container_orders_user">
			<h1 className="container_title title_history_orders">Mis historial de pedidos</h1>
			<article className="container_table_orders">
				<article className="item_orders_user">
					<div className="content_info_order">
						<section className="info_order">
							<div className="item_info">
								<p>Id Pedido: <span>424324324</span></p>
								<p>Nombre: <span>Francisco jose bello salcedo</span></p>
							</div>
							<div className="item_info">
								<p>Fecha: <span>10/12/2024</span></p>
								<p>Dirección: <span>Arjona bolivar calle 1</span></p>
							</div>
							<div className="item_info">
								<p>Cantidad productos: <span>20</span></p>
								<p>Número de pedido: <span>1</span></p>
							</div>
						</section>
						<button className="btn btn_view_details">Ver detalles <i className="uil uil-angle-down"></i></button>
					</div>
				</article>
			</article>
		</section>
	)
}

export default HistoryOrderUser;