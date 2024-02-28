import { useEffect, useState } from "react";
import "./FilterProducts.css";
import { useDispatch, useSelector } from "react-redux";
import { setProductsFilterSelect } from "../../features/product/product";
import { sortProductsAlphabeticallyAZ, sortProductsAlphabeticallyZA, sortProductsByIsNow, sortProductsByPriceAscending, sortProductsByPriceDescending } from "../../utils/utils";

const FilterProducts = () => {
	const [numberFilter,setNumberFilter]=useState(0);
	const dispatch=useDispatch();
	const products=useSelector((state)=>state.product.data.filter);

	const filterProducts=(value)=>{
		if(!Number.isInteger(parseInt(value))){
			dispatch(setProductsFilterSelect([...products]));
		}else{
			switch (value) {
				case 0:
					dispatch(setProductsFilterSelect([...products]));
					break;
				case 1:
					dispatch(setProductsFilterSelect(sortProductsAlphabeticallyAZ([...products])));
					break;
				case 2:
					dispatch(setProductsFilterSelect(sortProductsAlphabeticallyZA([...products])));
					break;
				case 3:
					dispatch(setProductsFilterSelect([...sortProductsByPriceAscending([...products])]));
					break;
				case 4:
					dispatch(setProductsFilterSelect([...sortProductsByPriceDescending([...products])]));
					break;
				case 5:
					dispatch(setProductsFilterSelect([...sortProductsByIsNow([...products],true)]));
					break;
				case 6:
					dispatch(setProductsFilterSelect(sortProductsByIsNow([...products],false)));
					break;
			}
		}
	}

	const handlerFilter=(numStr)=>{
		setNumberFilter(parseInt(numStr));
	}

	useEffect(()=>{
		filterProducts(numberFilter);
	},[numberFilter]);

	return (
		<div className="container_filter">
			<i className="uil uil-filter icon_filter"></i> Filtrar
			<select onInput={(e)=>{handlerFilter(e.target.value)}} className="select_filter" name="select_filter" id="select_filter">
				<option value={0} selected>Todos</option>
				<option value={1}>Alfabeticamente A-Z</option>
				<option value={2}>Alfabeticamente Z-A</option>
				<option value={3}>Precio Menor a Mayor</option>
				<option value={4}>Precio Mayor a Menor</option>
				<option value={5}>Nuevos</option>
				<option value={6}>Antiguos</option>
			</select>
		</div>
	)
}

export default FilterProducts;