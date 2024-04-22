import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../features/cart/cart";
import { setCategories } from "../../features/category/category";
import { setCollections, setCollectionsReverse } from "../../features/collection/collection";
import { setProducts, setProductsNew } from "../../features/product/product";
import { setQualification } from "../../features/qualification/qualification";
import { setUser } from "../../features/user/user";
import RoutesApp from "../../routes/RoutesApp";
import { getAllCategories } from "../../service/category.service";
import { getAllCollections } from "../../service/collection.service";
import { getAllProducts } from "../../service/product.service";
import { getAllQualification } from "../../service/qualification.service";
import { getNewAccessTokenUser } from "../../service/user.service";
import { getCartLocalStorage, getRefressTokenLocalStorage, saveRefressTokenLocalStorage } from "../../utils/utils";
import Loader from "../loader/Loader";

const Layaut = () => {
	const token = useSelector((state) => state.user.data.user.token);
	const dispatch = useDispatch();
	const [isLoader, setIsLoader] = useState(false);

	const getAllRegistersModules = async () => {
		setIsLoader(true);

		//CART
		dispatch(setCart(getCartLocalStorage()!==null?getCartLocalStorage():[]));
		//REFRESS TOKEN USER
		try {
			const token = getRefressTokenLocalStorage();
			if (token) {
				const responseToken = (await getNewAccessTokenUser(token)).data;
				if (responseToken.status === 200 && responseToken.response) {
					const data = responseToken.data;
					const {user}=data;
					const dataUser={name:user.name,address:user.address,_id:user._id,email:user.email,phone:user.phone,token:data.accessToken,createdAt:user.createdAt,updatedAt:user.updatedAt};
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
			const responseProducts = (await getAllProducts(token));
			if (responseProducts.status === 200 && responseProducts.response) {
				const data = responseProducts.data;
				dispatch(setProducts(data));
				dispatch(setProductsNew(data.filter((pro)=>pro?.isNow===true)));
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