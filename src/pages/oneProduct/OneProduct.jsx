import { useParams } from "react-router-dom";
import HeaderSection from "../../components/headerSection/HeaderSection";
import NavBar from "../../components/navBar/NavBar";
import "./OneProduct.css";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";

const OneProduct = () => {
	const params = useParams();

    useEffect(()=>{

    },[]);

	return (
		<section>
			<NavBar />
			<HeaderSection title={params.name} />

			<Footer />
		</section>
	);
};

export default OneProduct;
