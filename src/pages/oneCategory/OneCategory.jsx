import { useEffect, useState } from "react";
import "./OneCategory.css";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import HeaderSection from "../../components/headerSection/HeaderSection";
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../constants/constants";
import ListProducts from "../../components/listProducts/ListProducts";
import SliderSmallCategories from "../../components/sliderCategoriesSmall/SliderSmallCategories";
import FilterProducts from "../../components/filterProducts/FilterProducts";
import { setProductsFilter, setProductsFilterSelect } from "../../features/product/product";

const OneCategory = () => {
	const params = useParams();
	const navigate = useNavigate();
	const categories = useSelector((state) => state.category.data.list);
	const allProducts = useSelector((state) => state.product.data.list);
	const products = useSelector((state) => state.product.data.filter);
	const productsFilter = useSelector((state) => state.product.data.productsFilterSelect);
	const dispatch = useDispatch();

	useEffect(() => {
		if (categories.length > 0) {
			const nameCategory = params.name;
			const catFound = categories.find((cat) => cat.name === nameCategory);
			if (catFound) {
				const list = allProducts.filter((pro) => pro.category?._id === catFound._id);
				dispatch(setProductsFilter([...list]));
				dispatch(setProductsFilterSelect([]));
			} else {
				navigate(ROUTES.NOT_FOUND);
			}
		}

	}, [params]);

	return (
		<div className="container_one_collection">
			<NavBar />
			<HeaderSection title={params?.name} />
			<SliderSmallCategories />
			{/* <FilterProducts /> */}
			{
				productsFilter.length > 0 ?
					<ListProducts products={productsFilter} /> : <ListProducts products={products} />
			}
			<Footer />
		</div>
	)
}

export default OneCategory;