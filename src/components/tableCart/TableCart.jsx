import "./TableCart.css";

const TableCart = () => {
	return (
		<section className="container_table_cart">
			<table class="resp">
				<thead>
					<tr>
						<th scope="col">Titulo</th>
						<th scope="col">Año</th>
						<th scope="col">Formato</th>
						<th scope="col">Autor</th>
						<th scope="col">Tamaño</th>
						<th scope="col">Precio</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Intocable</td>
						<td>2012</td>
						<td>DVD</td>
						<td>Françoise Cluzet</td>
						<td>120 minutos</td>
						<td>12,86€</td>
					</tr>
					<tr>
						<td>El gen egoista</td>
						<td>2010</td>
						<td>Kindle</td>
						<td>Richard Dawkins</td>
						<td>424 páginas</td>
						<td>11,50€</td>
					</tr>
					<tr>
						<td>Mis Tardes Con Margueritte </td>
						<td>2011</td>
						<td>DVD</td>
						<td>Gerard Depardieu</td>
						<td>82 minutos</td>
						<td>6,24€</td>
					</tr>
					<tr>
						<td>Nicostratos</td>
						<td>2011</td>
						<td>Kindle</td>
						<td>Eric Boisset</td>
						<td>208 páginas</td>
						<td>4,94€</td>
					</tr>
					<tr>
						<td>Juegos en que participamos </td>
						<td>2007</td>
						<td>Libro</td>
						<td>Eric Berne</td>
						<td>232 páginas</td>
						<td>1.076,28€</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
};

export default TableCart;
