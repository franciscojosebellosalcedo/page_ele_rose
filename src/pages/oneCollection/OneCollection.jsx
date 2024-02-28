import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import HeaderSection from "../../components/headerSection/HeaderSection";
import NavBar from "../../components/navBar/NavBar";
import "./OneCollection.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ListProducts from "../../components/listProducts/ListProducts";
import { ROUTES } from "../../constants/constants";
import FilterProducts from "../../components/filterProducts/FilterProducts";
import SliderSmallCollections from "../../components/sliderCollectionsSmall/SliderSmallCategories";
import { setProductsFilter, setProductsFilterSelect } from "../../features/product/product";

function OneCollection() {
	const params = useParams();
	const collection = useSelector((state) => state.collection.data.list);
	const navigate = useNavigate();
	const allProducts = useSelector((state) => state.product.data.list);
	const products = useSelector((state) => state.product.data.filter);
	const productsFilter = useSelector((state) => state.product.data.productsFilterSelect);
	const dispatch = useDispatch();

	useEffect(() => {
		if (collection.length > 0) {
			const nameCollection = params.name;
			const collFound = collection.find((coll) => coll.name === nameCollection);
			if (collFound) {
				const list = allProducts.filter((pro) => pro.collection?._id === collFound._id);
				dispatch(setProductsFilterSelect([]));
				dispatch(setProductsFilter([...list]));
			} else {
				navigate(ROUTES.NOT_FOUND);
			}
		}
	}, [params]);

	return (
		<section>
			<NavBar />
			<HeaderSection title={params?.name} />
			<SliderSmallCollections />
			<FilterProducts />
			{
				productsFilter.length > 0 ?
					<ListProducts products={productsFilter} /> : <ListProducts products={products} />
			}
			<Footer />
		</section>
	)
}

export default OneCollection;