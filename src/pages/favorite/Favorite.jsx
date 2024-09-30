import React, { useEffect, useState } from 'react'
import NavBar from '../../components/navBar/NavBar';
import HeaderSection from '../../components/headerSection/HeaderSection';
import Footer from '../../components/footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { nameKeyProductsFavorites } from '../../constants/constants';
import ListProducts from '../../components/listProducts/ListProducts';
import { addProductFavorite } from '../../features/product/product';

const Favorite = () => {

	const products = useSelector((state)=>state.product.data.list);

	const productsFavorites = useSelector((state)=>state.product.data.favorites);

	const dispatch = useDispatch();

	const getProductsFavorites = ()=>{
		const listAux = [];

		const listLocalStorage = JSON.parse(localStorage.getItem(nameKeyProductsFavorites));

		if(listLocalStorage && Array.isArray(listLocalStorage)){

			for (let index = 0; index < listLocalStorage.length; index++) {
				const pro = listLocalStorage[index];

				const productFound = products.find((product)=> product._id === pro._id);

				if(productFound){

					listAux.unshift(productFound);

				}

			}

		}

		dispatch(addProductFavorite([...listAux]));

	}

	useEffect(()=>{

		getProductsFavorites();

	},[productsFavorites]);

	return (
		<section className='container_favite'>
			<NavBar/>
			<HeaderSection title={"Tu productos favoritos"} />
			<br />
			<ListProducts products={productsFavorites} isPageFavorite={true} />
			<Footer/>
		</section>
	)
}

export default Favorite;