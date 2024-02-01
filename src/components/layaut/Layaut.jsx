import { useEffect, useState } from "react";
import RoutesApp from "../../routes/RoutesApp";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../service/category.service";
import { setCategories } from "../../features/category/category";
import Loader from "../loader/Loader";
import { getAllCollections } from "../../service/collection.service";
import { setCollections, setCollectionsReverse } from "../../features/collection/collection";
import { getAllProducts } from "../../service/product.service";
import { setProducts } from "../../features/product/product";
import { getAllQualification } from "../../service/qualification.service";
import { setQualification } from "../../features/qualification/qualification";

const Layaut = () => {
	const token = useSelector((state) => state.token.data.token);
	const dispatch = useDispatch();
	const [isLoader, setIsLoader] = useState(false);

	const getQualifications = async () => {
		setIsLoader(true);
		try {
			const responseProducts = (await getAllQualification(token)).data;
			if (responseProducts.status === 200 && responseProducts.response) {
				const data = responseProducts.data;
				dispatch(setQualification(data));
			}
		} catch (error) {
			console.log(error)
		}
		setIsLoader(false);

	}
	const getProducts = async () => {
		setIsLoader(true);
		try {
			const responseProducts = (await getAllProducts(token)).data;
			if (responseProducts.status === 200 && responseProducts.response) {
				const data = responseProducts.data;
				dispatch(setProducts(data));
			}
		} catch (error) {
			console.log(error)
		}
		setIsLoader(false);

	}
	const getCollections = async () => {
		setIsLoader(true);

		try {
			const responseCollections = (await getAllCollections(token)).data;
			if (responseCollections.status === 200 && responseCollections.response) {
				const data = responseCollections.data;
				dispatch(setCollections(data));
				const list=[];
				for (let index = 0; index < data.length; index++) {
					const collection = data[index];
					list.unshift(collection);
				}
				dispatch(setCollectionsReverse(list));
			}
		} catch (error) {
			console.log(error)
		}
		setIsLoader(false);

	}

	const getCategories = async () => {
		setIsLoader(true);

		try {
			const responseCategory = (await getAllCategories(token)).data;
			if (responseCategory.status === 200 && responseCategory.response) {
				const data = responseCategory.data;
				dispatch(setCategories(data));
			}
		} catch (error) {
			console.log(error)
		}
		setIsLoader(false);

	}

	const getAllRegistersModules = async () => {
		getCategories();
		getCollections();
		getProducts();
		getQualifications();
	}

	useEffect(() => {
		getAllRegistersModules();
	});

	return (
		<>
			{
				isLoader === true ? <Loader /> : <RoutesApp />
			}
		</>
	)
}

export default Layaut;