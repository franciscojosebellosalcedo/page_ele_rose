import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import { ROUTES } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import ModalRegisterUser from "../modalRegisterUser/ModalRegisterUser";
import ModalSearch from "../modalSearch/ModalSearch";
import { getAllAmountPoductsOrder, isValidObject } from "../../utils/utils";
import CartRight from "../cartRight/CartRight";
import { setActiveCart } from "../../features/cart/cart";
import { setIsOpenModal } from "../../features/user/user";

const NavBar = () => {
	const [isOpenAccessories, setIsOpenAccessories] = useState(false);
	const [isOpenCollections, setIsOpenCollections] = useState(false);
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const categories = useSelector((state) => state.category.data.list);
	const collections = useSelector((state) => state.collection.data.list);
	const nav = useNavigate();
	const isOpenModal=useSelector((state)=>state.user.data.isOpenModal)
	const [isOpenModalSearch, setIsOpenModalSearch] = useState(false);
	const userPage = useSelector((state) => state.user.data.user);
	const listItemsCart = useSelector((state) => state.cart.data.list);
	const dispatch=useDispatch();

	const handlerOpenModalSearch = (e) => {
		e.preventDefault();
		setIsOpenModalSearch(!isOpenModalSearch);
	}

	const handlerOpencart=()=>{
		dispatch(setActiveCart());
	}

	const handlerOpenModal = (e) => {
		e.preventDefault();
		if (isValidObject(userPage) === true) {
			nav(ROUTES.ACCOUNT);
		} else {
			dispatch(setIsOpenModal());
		}
	}

	const navigate = (e, cat) => {
		handlerOpenMenu(e);
		nav(ROUTES.ONE_CATEGORY + `/${cat?.name}`);
	}

	const handlerOpenMenu = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsOpenMenu(!isOpenMenu);
	}

	const handlerOpenAccessories = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsOpenAccessories(!isOpenAccessories);
	}

	const handlerOpenCollections = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsOpenCollections(!isOpenCollections);
	}

	return (
		<header className="header">
			<nav className="nav">
				<i className="uil uil-bars icon_menu_hamburg" onClick={(e) => handlerOpenMenu(e)}></i>
				<img className="nav_logo" onClick={() => nav(ROUTES.INIT)} src={require("../../assest/logo.jpeg")} alt="" />

				<section className="nav_container">

					<ul className={`nav_list ${isOpenMenu ? "see_menu" : ""}`}>
						<h1 className="title_menu">Menú</h1>

						<div className="container_items_list">

							<div className="nav_ul_li">
								<li className="list_item">
									<NavLink className={({ isActive }) => isActive === true ? "item " : "item"} to={ROUTES.INIT} >Inicio</NavLink>
								</li>
							</div>

							<div className="nav_ul_li">
								<li className="list_item">
									<NavLink to={ROUTES.ACCESORIES} className={({ isActive }) => isActive === true ? "item " : "item"} >Accesorios</NavLink>
									<i className={`uil uil-angle-right icon_arrow ${isOpenAccessories ? "rotate_arrow" : ""}`} onClick={(e) => handlerOpenAccessories(e)}></i>
								</li>
								<ul className={`sub_list sub_list_accessories ${isOpenAccessories ? "see_sub_list" : ""}`}>
									{
										categories && categories.length > 0 ?
											<>
												{
													categories.map((cat, index) => {
														return <li onClick={(e) => navigate(e, cat)} key={index} className="sub_list_item">{cat?.name}</li>
													})
												}
											</>
											: ""
									}
								</ul>
							</div>

							<div className="nav_ul_li">
								<li  className="list_item">
									<NavLink to={ROUTES.COLLECTIONS} className={({ isActive }) => isActive === true ? "item " : "item"} >Colecciones</NavLink>
									<i className={`uil uil-angle-right icon_arrow ${isOpenCollections ? "rotate_arrow" : ""}`}  onClick={(e) => handlerOpenCollections(e)}></i>
								</li>
								<ul className={`sub_list sub_list_accessories ${isOpenCollections ? "see_sub_list" : ""}`}>
									{
										collections && collections.length >0 ?
											<>
												{
													collections.map((coll,index)=>{
														return <li key={index} className="sub_list_item">{coll?.name}</li>
													})
												}
											</>
										:""
									}
								</ul>
							</div>

							<div className="nav_ul_li">
								<li className="list_item">
									<NavLink  to={ROUTES.ABOUT} className={({ isActive }) => isActive === true ? "item " : "item"} >Nosotros</NavLink>
								</li>
							</div>

							<div className="nav_ul_li">
								<li className="list_item">
									<NavLink to={ROUTES.CONTACT} className={({ isActive }) => isActive === true ? "item " : "item"} >Contacto</NavLink>
								</li>
							</div>

						</div>
						<button className="btn btn_close_menu" onClick={(e) => handlerOpenMenu(e)}>Cerrar menú</button>
					</ul>

					<div className="nav_container_icons">
						<i className="uil uil-search icon_nav icon_menu" onClick={(e) => handlerOpenModalSearch(e)}></i>
						<i className="uil uil-user icon_nav icon_menu" onClick={(e) => handlerOpenModal(e)}></i>
						<i className="uil uil-shopping-cart icon_nav icon_menu" onClick={()=>handlerOpencart()}><span className="amount_cart_products">{getAllAmountPoductsOrder(listItemsCart)}</span></i>
					</div>

				</section>

			</nav>
			<ModalRegisterUser isOpenModal={isOpenModal} handlerOpenModal={handlerOpenModal} />
			<ModalSearch isOpenModalSearch={isOpenModalSearch} handlerOpenModalSearch={handlerOpenModalSearch} />
			<CartRight handlerOpencart={handlerOpencart}/>
		</header>
	)
}

export default NavBar;