import { useDispatch, useSelector } from "react-redux";
import { setIsActiveModalInfoOrder } from "../../features/cart/cart";
import "./ModalInfoOrder.css";

const ModalOrderInfo = ({ alertOrder}) => {
	const dispatch=useDispatch();
	const isActiveModalInfoOrder=useSelector((state)=>state.cart.data.isActiveModalInfoOrder);
	const handlerOpenModalInfoOrder=()=>{
		dispatch(setIsActiveModalInfoOrder(false));
	}
	return (
		<div className={`container_modal_order_info ${isActiveModalInfoOrder===true ?"see_modal_info_order" :""}`}>
			<section className="modal_order_info">
				<img className="logo_modal img_modal_info_order" src={require("../../assest/logo.jpeg")} alt="" />
				<i className="uil uil-times icon_close_modal" onClick={()=>handlerOpenModalInfoOrder()}></i>
				<h2 className={`title_modal ${alertOrder.type===0?"color_red":""}`}>{alertOrder.title}</h2>
				<p className={`modal_text`}>{alertOrder.message}</p>
				<div>
					<button onClick={()=>{
						console.log(alertOrder)
					}}>test</button>
					<button className="btn btn_modal_info_order" onClick={()=>handlerOpenModalInfoOrder()}>Aceptar</button>
				</div>
			</section>
		</div>
	)
}

export default ModalOrderInfo;