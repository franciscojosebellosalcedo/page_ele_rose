import { useSelector } from "react-redux";
import ItemCollection from "../itemCollection/ItemCollection";
import "./ListCollections.css";

const ListCollections = () => {
	const collections=useSelector((state)=>state.collection.data.list);
	return (
		<section className="container_list_collections">
			{
				collections && collections.length> 0 ?
				<>
					{
						collections.map((col,index)=>{
							return <ItemCollection key={index} collection={col}/>
						})
					}
				</>:<p>No hay colecciones</p>
			}
		</section>
	)
}

export default ListCollections;