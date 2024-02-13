import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ModalSearch.css";

const ModalSearch = ({ isOpenModalSearch, handlerOpenModalSearch }) => {
	const products = useSelector((state) => state.product.data.list);
	const [productsFound, setProductsFound] = useState([]);
	const [value, setValue] = useState("");

	const handlerSearch = (value) => {
		setValue(value);
	}

	const getProductsFound = () => {
		let list = [];
		if (value === "") {
			list = [];
		} else {
			list = products.filter((pro) => pro.name.toLowerCase().trim().includes(value.toLowerCase().trim()));
		}
		setProductsFound(list);
	}

	useEffect(() => {
		getProductsFound();
	}, [value]);

	return (
		<section className={`modal_search ${isOpenModalSearch == true ? "see_modal_search" : ""}`}>
			<i className="uil uil-times icon_close_modal_search" onClick={(e) => handlerOpenModalSearch(e)}></i>
			<h2 className="modal_search_title">Encuentra lo que estás buscando en nuestro catálogo</h2>
			<form className="form_search">
				<div className="input content_search">
					<input className="input_search" type="text" placeholder="Qué producto buscas?" onInput={(e) => handlerSearch(e.target.value)} />
					<i className="uil uil-search icon_search"></i>
				</div>
			</form>

			{
				productsFound && productsFound.length > 0 ?
					<>
						<section className="list_product_found">
							{
								productsFound.map((pro) => {
									return <div className="item_list_product">
										<img className="img_product_item_list" src={pro?.imagen} alt="" />
										<article className="info_item_product">
											<p>{pro?.name}</p>
											<p>$ {pro?.pricePromotion > 0 ? pro?.pricePromotion : pro?.realPrice}</p>
										</article>
									</div>
								})
							}
						</section>
					</>
					: value !== "" && productsFound.length === 0 ?
						<div className="not_found_products">
							<h3>
								No encontramos productos
							</h3>
							<img src={require("../../assest/icon-not-found.png")} alt="" />
						</div>
						: ""

			}

		</section>
	)
}

export default ModalSearch;