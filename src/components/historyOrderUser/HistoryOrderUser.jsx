import React, { useEffect, useState } from "react";
import "./HistoryOrderUser.css";
import { getAllOrdersByUser } from "../../service/order.service";
import LoaderButton from "../loaderButton/LoaderButton";
import { formatePriceProduct, formatPrice, getAllAmountPoductsOrder } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/constants";

const HistoryOrderUser = ({ user }) => {
	const [orders, setOrders] = useState([]);
	const [isLoader, setIsLoader] = useState(false);
	const [viewOrder,setViewOrder]=useState([]);
	const navigate=useNavigate();

	const handlerIsOpenDetailsOrdersUser = (i) => {
		const list=viewOrder;
		if(list[i].isOpen){
			list[i].isOpen=false;
		}else{
			for (let index = 0; index < list.length; index++) {
				list[index].isOpen=false;
			}
			list[i].isOpen=true;
		}
		setViewOrder([...list]);
	}

	const getAllOrderByUser = async () => {
		setIsLoader(true);
		try {
			if (user) {
				const responseOrders = (await getAllOrdersByUser(user)).data;
				const data = responseOrders.data;
				const list=[];
				for (let index = 0; index < data.length; index++) {
					list.push({isOpen:false,index});
				}
				setViewOrder(list);
				setOrders(data);
			}
		} catch (error) {
			console.log(error);
		}
		setIsLoader(false);
	}

	const getNameStateOrder = (order)=>{

		if(order){

			switch (order.statusOrder) {

				case "Pending":

					return "Pendiente"

				case "In process":

					return "En Progreso"

				case "Sent":

					return  "Enviado"

				case "Finalized":

				return  "Finalizado"

				case "Canceled":

				return "Cancelado"

			}
		}

		return "";
	}

	useEffect(() => {
		getAllOrderByUser();
	}, []);

	return (
		<>
			{
				isLoader ? <LoaderButton /> :
					<>
						{
							orders && orders.length > 0 ?
								<>
									<section className="container_orders_user">
										<h1 className="container_title title_history_orders">Mi historial de pedidos</h1>
										{
											orders.map((or,index) => {
												return <React.Fragment key={or._id}>
													<article className="container_table_orders">
														<article className="item_orders_user">
															<div className="content_info_order">
																<section className="info_order">
																	<div className="item_info">
																		<p>Id Pedido: <span>{or?._id}</span></p>
																		<p>Nombre: <span>{user?.name}</span></p>
																	</div>
																	<div className="item_info">
																		<p>Fecha: <span>{formatePriceProductProduct(or?.createdAt)}</span></p>
																		<p>Dirección: <span>{user?.address}</span></p>
																	</div>
																	<div className="item_info">
																		<p>Cantidad productos: <span>{getAllAmountPoductsOrder(or?.listProducts)}</span></p>
																		<p>Número de pedido: <span>{or?.num}</span></p>
																	</div>
																	<div className="item_info">
																		<p>Estado: <span>{getNameStateOrder(or)}</span></p>
																		<p>Total: <span>$ {formatePriceProduct(or?.total)}</span></p>
																	</div>
																</section>
																<button onClick={() => handlerIsOpenDetailsOrdersUser(index)} className="btn btn_view_details">Ver detalles <i className={`uil uil-angle-right ${viewOrder[index]?.isOpen ? "rotate_arrow" : ""}`}  ></i></button>

																{
																	viewOrder[index]?.isOpen===true ?

																		<table className="table_details">
																			<thead>
																				<tr>
																					<th scope="col">Producto</th>
																					<th scope="col">Precio</th>
																					<th scope="col">Cantidad</th>
																					<th scope="col">Total</th>
																				</tr>
																			</thead>
																			<tbody>
																				{
																					or?.listProducts && or?.listProducts.length > 0 ?
																						<>
																							{
																								or.listProducts.map((item,index) => {
																									return <tr key={index}>
																										<td>
																											<div onClick={(e)=>navigate(ROUTES.PRODUCT+`/${item.product.name}`)} className="content_product_table">
																												<img className="imagen_product_cart" src={item.product.imagen} alt="" />
																												<p className="name_product_cart">{item.product.name}</p>
																											</div>
																										</td>
																										<td>
																											$ {item.product.pricePromotion >0 ? item.product.pricePromotion:item.product.realPrice}
																										</td>
																										<td>
																											{item.amount}
																										</td>
																										<td>
																											$ {item.product.pricePromotion >0 ? formatePriceProduct(item.product.pricePromotion*item.amount) : formatPrice(item.product.realPrice*item.amount)}
																										</td>
																									</tr>
																								})
																							}
																						</>
																						: ""
																				}

																			</tbody>
																		</table>
																		: ""
																}

															</div>
														</article>
													</article>
												</React.Fragment>
											})
										}
									</section>
								</> : ""
						}
					</>
			}
		</>
	)
}

export default HistoryOrderUser;