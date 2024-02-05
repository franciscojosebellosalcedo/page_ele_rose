import "./ModalSearch.css";

const ModalSearch = ({isOpenModalSearch, handlerOpenModalSearch }) => {
	return (
		<section className={`modal_search ${isOpenModalSearch== true ? "see_modal_search":""}`}>
			<i className="uil uil-times icon_close_modal_search" onClick={(e)=>handlerOpenModalSearch(e)}></i>
			<h2 className="modal_search_title">Encuentra lo que estás buscando en nuestro catálogo</h2>
			<form className="form_search">
				<div className="input content_search">
					<input className="input_search" type="text" placeholder="Qué producto buscas?" />
					<i className="uil uil-search icon_search"></i>
				</div>
			</form>
		</section>
	)
}

export default ModalSearch;