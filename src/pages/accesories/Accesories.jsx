import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterProducts from "../../components/filterProducts/FilterProducts";
import Footer from "../../components/footer/Footer";
import HeaderSection from "../../components/headerSection/HeaderSection";
import ListProducts from "../../components/listProducts/ListProducts";
import NavBar from "../../components/navBar/NavBar";
import SliderSmallCategories from "../../components/sliderCategoriesSmall/SliderSmallCategories";
import { setProductsFilter, setProductsFilterSelect } from "../../features/product/product";
import "./Accesories.css";

const Accesories = () => {
	const products = useSelector((state) => state.product.data.list);
	const productsList=useSelector((state)=>state.product.data.filter);
	const productsFilterList=useSelector((state)=>state.product.data.productsFilterSelect);
	const dispatch=useDispatch();


	useEffect(()=>{
		dispatch(setProductsFilterSelect([]));
		if(products.length > productsList.length){
			dispatch(setProductsFilter([...products]));
		}
	},[products]);

	return (
		<section className="container container_accesories">
			<NavBar />
			<HeaderSection title={"Accesorios"} />
			<SliderSmallCategories/>
			<FilterProducts/>
				{
					productsFilterList.length >0 ?
					<ListProducts products={productsFilterList}/>:<ListProducts products={productsList}/>
				}
			<Footer />
		</section>
	);
};

export default Accesories;
