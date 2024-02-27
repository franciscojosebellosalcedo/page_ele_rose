import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import HeaderSection from "../../components/headerSection/HeaderSection";
import NavBar from "../../components/navBar/NavBar";
import "./OneCollection.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ListProducts from "../../components/listProducts/ListProducts";
import { ROUTES } from "../../constants/constants";
import FilterProducts from "../../components/filterProducts/FilterProducts";

function OneCollection() {
  const params=useParams();
	const products=useSelector((state)=>state.product.data.filter);
  const collection=useSelector((state)=>state.collection.data.list);
	const [listProducts,setListProducts]=useState([]);
  const navigate=useNavigate();

  useEffect(()=>{
		if(collection.length >0){
			const nameCollection=params.name;
			const collFound=collection.find((coll)=>coll.name===nameCollection);
			if(collFound){
				const list=products.filter((pro)=>pro.collection?._id===collFound._id);
				setListProducts(list);
			}else{
				navigate(ROUTES.NOT_FOUND);
			}
		}
	},[params]);

  return (
    <section>
        <NavBar/>
        <HeaderSection title={params?.name}/>
        <FilterProducts/>
        <ListProducts products={listProducts}/>
        <Footer/>
    </section>
  )
}

export default OneCollection;