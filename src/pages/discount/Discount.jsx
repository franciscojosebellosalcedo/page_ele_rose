import React, { useEffect } from 'react'
import NavBar from '../../components/navBar/NavBar';
import HeaderSection from '../../components/headerSection/HeaderSection';
import ListProducts from '../../components/listProducts/ListProducts';
import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';

const Discount = () => {

	const products=useSelector((state)=>state.product.data.list.filter((pro) => pro.pricePromotion  > 0));

	useEffect(()=>{

	},[]);

	return (
		<section className='container_discount'>
			<NavBar/>
			<HeaderSection title={"Descuentos"} />
			<br />
			<ListProducts products={products} isPageDiscount={true}/>
			<Footer/>

		</section>
	)
}

export default Discount;