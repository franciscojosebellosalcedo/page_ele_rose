import { useNavigate, useParams } from "react-router-dom";
import HeaderSection from "../../components/headerSection/HeaderSection";
import NavBar from "../../components/navBar/NavBar";
import "./OneProduct.css";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ROUTES } from "../../constants/constants";
import ProductDetails from "../../components/productDetails/ProductDetails";
import InfoAditionalProduct from "../../components/infoAditionalProduct/InfoAditionalProduct";

const OneProduct = () => {
	const params = useParams();
	const products=useSelector((state)=>state.product.data.list);
	const navigate=useNavigate();
	const [product,setProduct]=useState(null);

    useEffect(()=>{
		if(products.length>0){
			const productFound=products.find((pro)=>pro.name===params.name.trim());
			if(productFound){
				setProduct(productFound);
			}else{
				navigate(ROUTES.NOT_FOUND);
			}
		}
    },[]);

	return (
		<section>
			<NavBar />
			<HeaderSection title={params.name} />
			<ProductDetails product={product}/>
			<InfoAditionalProduct/>
			<Footer />
		</section>
	);
};

export default OneProduct;
