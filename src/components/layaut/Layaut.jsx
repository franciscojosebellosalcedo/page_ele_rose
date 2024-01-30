import { useEffect, useState } from "react";
import RoutesApp from "../../routes/RoutesApp";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../service/category.service";
import { setCategories } from "../../features/category/category";
import Loader from "../loader/Loader";
import { getAllCollections } from "../../service/collection.service";
import { setCollections } from "../../features/collection/collection";
import { getAllProducts } from "../../service/product.service";
import { setProducts } from "../../features/product/product";

const Layaut = () => {
	const token=useSelector((state)=>state.token.data.token);
	const dispatch=useDispatch();
	const [isLoader,setIsLoader]=useState(false);

	const getProducts= async () => {
		try {
			const responseProducts=(await getAllProducts(token)).data;
			if(responseProducts.status===200 && responseProducts.response){
				const data=responseProducts.data;
				dispatch(setProducts(data));
			}
		} catch (error) {
			console.log(error)
		}
	}
	const getCollections = async () => {
		try {
			const responseCollections=(await getAllCollections(token)).data;
			if(responseCollections.status===200 && responseCollections.response){
				const data=responseCollections.data;
				dispatch(setCollections(data));
			}
		} catch (error) {
			console.log(error)
		}
	}

	const getCategories = async () => {
		try {
			const responseCategory=(await getAllCategories(token)).data;
			if(responseCategory.status===200 && responseCategory.response){
				const data=responseCategory.data;
				dispatch(setCategories(data));
			}
		} catch (error) {
			console.log(error)
		}
	}

	const getAllRegistersModules=async ()=>{
		setIsLoader(true);
		getCategories();
		getCollections();
		getProducts();
		setIsLoader(false);
	}

	useEffect(()=>{
		getAllRegistersModules();
	});

	return (
		<>
			{
				isLoader=== true ? <Loader/> :<RoutesApp />
			}
		</>
	)
}

export default Layaut;