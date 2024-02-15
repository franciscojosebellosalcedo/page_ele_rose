import { useSelector } from "react-redux";
import HeaderSection from "../../components/headerSection/HeaderSection";
import ListProducts from "../../components/listProducts/ListProducts";
import NavBar from "../../components/navBar/NavBar";
import "./Accesories.css";
import Footer from "../../components/footer/Footer";
import SliderSmallCategories from "../../components/sliderCategoriesSmall/SliderSmallCategories";
import FilterProducts from "../../components/filterProducts/FilterProducts";

const Accesories = () => {
	const products = useSelector((state) => state.product.data.list);
	return (
		<section className="container container_accesories">
			<NavBar />
			<HeaderSection title={"Accesorios"} />
			<SliderSmallCategories/>
			{/* <FilterProducts /> */}
			<ListProducts products={products} />
			<Footer />
		</section>
	);
};

export default Accesories;
