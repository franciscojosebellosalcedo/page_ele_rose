import "./CollectionRecent.css";

const CollectionRecent = () => {
	return (
		<section className="container container_collections_recent">
			<h1 className="container_title container_title_products_news"> Colecciones recientes</h1>
			<div className="collections_recent_grid">
				<div className="content_collection">
					<img className="imagen_collection_recent" src={require("../../assest/example-treme-1.webp")} alt="" />
					<h4 className="name_collection_recent">Juegos de perlas</h4>
				</div>
				<div className="content_collection">
					<img className="imagen_collection_recent" src={require("../../assest/example-treme-1.webp")} alt="" />
					<h4 className="name_collection_recent">Letras</h4>
				</div>
				<div className="content_collection">
					<img className="imagen_collection_recent" src={require("../../assest/example-treme-1.webp")} alt="" />
					<h4 className="name_collection_recent">Collar de paises</h4>
				</div>
			</div>
		</section>
	)
}

export default CollectionRecent;