import { useSelector } from "react-redux";
import CollectionRecent from "../../components/colleactionRecent/CollectionRecent";
import Footer from "../../components/footer/Footer";
import HappyClients from "../../components/happyClients/HappyClients";
import InfoEleRose from "../../components/infoEleRose/InfoEleRose";
import MainCategories from "../../components/mainCategories/MainCategories";
import NavBar from "../../components/navBar/NavBar";
import ProductsNews from "../../components/productsNews/ProductsNews";
import SliderMain from "../../components/sliderMain/SliderMain";
import "./IndexPage.css";

const IndexPage = () => {
	const qualifications=useSelector((state)=>state.qualification.data.list);
	const collectionsRecent=useSelector((state)=>state.collection.data.list);

  return (
    <div className="index_page">
      <NavBar/>
			<SliderMain/>
			<MainCategories/>
			<ProductsNews/>
			{collectionsRecent && collectionsRecent.length >0 ?<CollectionRecent/>:""}
			<InfoEleRose/>
			{qualifications && qualifications.length >0 ? <HappyClients/> :""}
			<Footer/>
    </div>
  )
}

export default IndexPage;