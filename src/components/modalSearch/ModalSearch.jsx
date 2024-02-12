import { useSelector } from "react-redux";
import "./ModalSearch.css";
import { useState } from "react";

const ModalSearch = ({ isOpenModalSearch, handlerOpenModalSearch }) => {
	const products = useSelector((state) => state.product.data.list);
	const [productsFound, setProductsFound] = useState([]);
	const [value,setValue]=useState(null);

	const handlerSearch=(value)=>{

	}

	return (
		<section className={`modal_search ${isOpenModalSearch == true ? "see_modal_search" : ""}`}>
			<i className="uil uil-times icon_close_modal_search" onClick={(e) => handlerOpenModalSearch(e)}></i>
			<h2 className="modal_search_title">Encuentra lo que estás buscando en nuestro catálogo</h2>
			<form className="form_search">
				<div className="input content_search">
					<input className="input_search" type="text" placeholder="Qué producto buscas?" />
					<i className="uil uil-search icon_search"></i>
				</div>
			</form>
			<section className="list_product_found">

				{
					productsFound && productsFound.length > 0 ?
						<>
							{
								productsFound.map((pro) => {
									return <div className="item_list_product">
										<img className="img_product_item_list" src={pro?.imagen} alt="" />
										<article className="info_item_product">
											<p>{pro?.name}</p>
											<p>$ {pro?.pricePromotion >0 ? pro?.pricePromotion:pro?.realPrice}</p>
										</article>
									</div>
								})
							}
						</>
						: "No encontramos productos"

				}

			</section>
		</section>
	)
}

export default ModalSearch;