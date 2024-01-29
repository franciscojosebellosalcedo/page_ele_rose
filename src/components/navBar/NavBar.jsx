import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import { ROUTES } from "../../constants/constants";

const NavBar = () => {
	const [isOpenAccessories, setIsOpenAccessories] = useState(false);
	const [isOpenCollections, setIsOpenCollections] = useState(false);
	const [isOpenMenu, setIsOpenMenu] = useState(false);

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
				<img className="nav_logo" src={require("../../assest/logo.jpeg")} alt="" />

				<section className="nav_container">

					<ul className={`nav_list ${isOpenMenu ? "see_menu" : ""}`}>
						<h1 className="title_menu">Menú</h1>

						<div className="container_items_list">

							<div className="nav_ul_li">
								<li className="list_item">
									<NavLink className={({ isActive }) => isActive === true ? "item " : "item"} to={ROUTES.INIT} >Inicio</NavLink>
								</li>
							</div>


							<div className="nav_ul_li" >
								<li  className="list_item">
									<NavLink className={({ isActive }) => isActive === true ? "item " : "item"} >Accesorios</NavLink>
									<i className={`uil uil-angle-right icon_arrow ${isOpenAccessories ? "rotate_arrow" : ""}`} onClick={(e) => handlerOpenAccessories(e)}></i>
								</li>
								<ul className={`sub_list sub_list_accessories ${isOpenAccessories ? "see_sub_list" : ""}`}>
									<li className="sub_list_item">Collares</li>
									<li className="sub_list_item">Aretes</li>
									<li className="sub_list_item">Earcuff</li>
								</ul>
							</div>

							<div className="nav_ul_li">
								<li  className="list_item">
									<NavLink className={({ isActive }) => isActive === true ? "item " : "item"} >Colecciones</NavLink>
									<i className={`uil uil-angle-right icon_arrow ${isOpenCollections ? "rotate_arrow" : ""}`}  onClick={(e) => handlerOpenCollections(e)}></i>
								</li>
								<ul className={`sub_list sub_list_accessories ${isOpenCollections ? "see_sub_list" : ""}`}>
									<li className="sub_list_item">Collares</li>
									<li className="sub_list_item">Aretes</li>
									<li className="sub_list_item">Earcuff</li>
									<li className="sub_list_item">Earcuff</li>
									<li className="sub_list_item">Earcuff</li>
									<li className="sub_list_item">Earcuff</li>
									<li className="sub_list_item">Earcuff</li>
									<li className="sub_list_item">Earcuff</li>
									<li className="sub_list_item">Earcuff</li>
									<li className="sub_list_item">Earcuff</li>
									<li className="sub_list_item">Earcuff</li>
									<li className="sub_list_item">Earcuff</li>
									<li className="sub_list_item">Earcuff</li>
									<li className="sub_list_item">Earcuff</li>
									<li className="sub_list_item">Earcuff</li>
									<li className="sub_list_item">Earcuff</li>
									<li className="sub_list_item">Earcuff</li>
									<li className="sub_list_item">Earcuff</li>
								</ul>
							</div>

							<div className="nav_ul_li">
								<li className="list_item">
									<NavLink className={({ isActive }) => isActive === true ? "item " : "item"} >Nosotros</NavLink>
								</li>
							</div>

							<div className="nav_ul_li">
								<li className="list_item">
									<NavLink className={({ isActive }) => isActive === true ? "item " : "item"} >Contanto</NavLink>
								</li>
							</div>

						</div>
						<button className="btn btn_close_menu" onClick={(e) => handlerOpenMenu(e)}>Cerrar menú</button>
					</ul>

					<div className="nav_container_icons">
						<i className="uil uil-search icon_nav icon_menu"></i>
						<i className="uil uil-user icon_nav icon_menu"></i>
						<i className="uil uil-shopping-cart icon_nav icon_menu"></i>
					</div>

				</section>

			</nav>
		</header>
	)
}

export default NavBar;