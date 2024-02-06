import { useEffect, useState } from "react";
import RoutesApp from "../../routes/RoutesApp";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../service/category.service";
import { setCategories } from "../../features/category/category";
import Loader from "../loader/Loader";
import { getAllCollections } from "../../service/collection.service";
import { setCollections, setCollectionsReverse } from "../../features/collection/collection";
import { getAllProducts } from "../../service/product.service";
import { setProducts, setProductsFilter } from "../../features/product/product";
import { getAllQualification } from "../../service/qualification.service";
import { setQualification } from "../../features/qualification/qualification";
import { getNewAccessTokenUser } from "../../service/user.service";
import { getRefressTokenLocalStorage, saveRefressTokenLocalStorage } from "../../helpers/helpers";
import { setUser } from "../../features/user/user";

const Layaut = () => {
	const token = useSelector((state) => state.user.data.user.token);
	const dispatch = useDispatch();
	const [isLoader, setIsLoader] = useState(false);

	const getAllRegistersModules = async () => {
		setIsLoader(true);
		//REFRESS TOKEN USER
		try {
			const token = getRefressTokenLocalStorage();
			if (token) {
				const responseToken = (await getNewAccessTokenUser(token)).data;
				if (responseToken.status === 200 && responseToken.response) {
					const data = responseToken.data;
					const {user}=data;
					const dataUser={name:user.name,address:user.address,_id:user._id,email:user.email,phone:user.phone,token:data.accessToken};
					saveRefressTokenLocalStorage(data.refressToken);
					dispatch(setUser({...dataUser}));
				}
			}
		} catch (error) {
			console.log(error)
		}

		// QUALIFICATIONES
		try {
			const responseProducts = (await getAllQualification(token)).data;
			if (responseProducts.status === 200 && responseProducts.response) {
				const data = responseProducts.data;
				dispatch(setQualification(data));
			}
		} catch (error) {
			console.log(error)
		}

		// PRODUCTS

		try {
			const responseProducts = (await getAllProducts(token)).data;
			if (responseProducts.status === 200 && responseProducts.response) {
				const data = responseProducts.data;
				dispatch(setProducts(data));
				dispatch(setProductsFilter(data));
			}
		} catch (error) {
			console.log(error)
		}

		//COLLECTIONS
		try {
			const responseCollections = (await getAllCollections(token)).data;
			if (responseCollections.status === 200 && responseCollections.response) {
				const data = responseCollections.data;
				dispatch(setCollections(data));
				const list = [];
				for (let index = 0; index < data.length; index++) {
					const collection = data[index];
					list.unshift(collection);
				}
				dispatch(setCollectionsReverse(list));
			}
		} catch (error) {
			console.log(error)
		}

		//CATEGORIES

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

		// setIsLoader(true);
		// getNewAccessTokenUserPage();
		// getCategories();
		// getCollections();
		// getProducts();
		// getQualifications();
		// setIsLoader(false);
	}

	useEffect(() => {
		getAllRegistersModules();
	},[]);

	return (
		<>
			{
				isLoader === true ? <Loader /> : <RoutesApp />
			}
		</>
	)
}

export default Layaut;