import { useSelector } from "react-redux";
import "./CollectionRecent.css";
import { ROUTES } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

const CollectionRecent = () => {
	const collectionsReverse = useSelector((state) => state.collection.data.reverse);
	const navigate=useNavigate();

	return (
		<section className="container container_collections_recent">
			<h1 className="container_title container_title_products_news"> Colecciones recientes</h1>
			<div className="collections_recent_grid">
				{
					collectionsReverse && collectionsReverse.length > 0 ?
						<>
							{
								collectionsReverse.map((col, index) => {
									return index < 3 ?
										<div onClick={()=>navigate(ROUTES.ONE_COLLECTION+`/${col?.name}`)} key={index} className="content_collection">
											<img className="imagen_collection_recent" src={col?.imagen} alt="" />
											<h4 className="name_collection_recent">{col?.name}</h4>
										</div>
										: ""
								})
							}
						</>
						: ""
				}

			</div>
		</section>
	)
}

export default CollectionRecent;