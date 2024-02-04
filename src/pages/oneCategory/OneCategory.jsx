import { useEffect, useState } from "react";
import "./OneCategory.css";
import {useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import HeaderSection from "../../components/headerSection/HeaderSection";
import Footer from "../../components/footer/Footer";
import { useSelector } from "react-redux";
import { ROUTES } from "../../constants/constants";
import ListProducts from "../../components/listProducts/ListProducts";

const OneCategory = () => {
	const params=useParams();
	const navigate=useNavigate();
	const categories=useSelector((state)=>state.category.data.list);
	const products=useSelector((state)=>state.product.data.filter);
	const [listProducts,setListProducts]=useState([]);

	useEffect(()=>{
		if(categories.length >0){
			const catFound=categories.find((cat)=>cat.name===params.name);
			if(!catFound){
				navigate(ROUTES.NOT_FOUND);
			}else{
				const list=products.filter((pro)=>pro.category?._id===catFound._id);
				console.log(list)
				setListProducts(list);
			}
		}
	});

	return (
		<div className="container_one_collection">
			<NavBar/>
			<HeaderSection title={params?.name}/>
			<ListProducts products={listProducts}/>
			<Footer/>
		</div>
	)
}

export default OneCategory;