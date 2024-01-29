import MainCategories from "../../components/mainCategories/MainCategories";
import NavBar from "../../components/navBar/NavBar";
import ProductsNews from "../../components/productsNews/ProductsNews";
import SliderMain from "../../components/sliderMain/SliderMain";
import "./IndexPage.css";

const IndexPage = () => {
  return (
    <div className="index_page">
      <NavBar/>
			<SliderMain/>
			<MainCategories/>
			<ProductsNews/>
    </div>
  )
}

export default IndexPage;