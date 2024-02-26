import Footer from "../../components/footer/Footer";
import HeaderSection from "../../components/headerSection/HeaderSection";
import ListCollections from "../../components/listCollections/ListCollections";
import NavBar from "../../components/navBar/NavBar";

const Collections = () => {
	return (
		<section className="container_collections">
			<NavBar/>
			<HeaderSection title={"Colecciones"}/>
			<ListCollections/>
			<Footer/>
		</section>
	)
}

export default Collections;