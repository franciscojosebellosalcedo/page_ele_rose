import "./FilterProducts.css";

const FilterProducts = () => {
	return (
		<div className="container_filter">
			<i className="uil uil-filter icon_filter"></i> Filtrar
			<select className="select_filter" name="select_filter" id="select_filter">
				<option value={1} selected>Todos</option>
				<option value="1">Alfabeticamente A-Z</option>
				<option value="1">Alfabeticamente Z-A</option>
				<option value="1">Precio Menor a Mayor</option>
				<option value="1">Precio Mayor a Menor</option>
				<option value="1">Más Nuevos</option>
				<option value="1">Más Antiguos</option>
			</select>
		</div>
	)
}

export default FilterProducts;