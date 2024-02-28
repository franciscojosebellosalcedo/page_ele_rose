import { useDispatch, useSelector } from "react-redux";
import HeaderSection from "../../components/headerSection/HeaderSection";
import ListProducts from "../../components/listProducts/ListProducts";
import NavBar from "../../components/navBar/NavBar";
import "./Accesories.css";
import Footer from "../../components/footer/Footer";
import SliderSmallCategories from "../../components/sliderCategoriesSmall/SliderSmallCategories";
import FilterProducts from "../../components/filterProducts/FilterProducts";
import { useEffect } from "react";
import { setProductsFilter } from "../../features/product/product";

const Accesories = () => {
	const products = useSelector((state) => state.product.data.list);
	const productsList=useSelector((state)=>state.product.data.filter);
	const productsFilter=useSelector((state)=>state.product.data.productsFilterSelect);
	const dispatch=useDispatch();

	useEffect(()=>{
		if(products.lenght>0){
			dispatch(setProductsFilter(products));
		}
	},[]);
	return (
		<section className="container container_accesories">
			<NavBar />
			<HeaderSection title={"Accesorios"} />
			<SliderSmallCategories/>
			<FilterProducts/>
				{
					productsFilter.length >0 ?
					<ListProducts products={productsFilter}/>:<ListProducts products={productsList}/>
				}
			<Footer />
		</section>
	);
};

export default Accesories;
