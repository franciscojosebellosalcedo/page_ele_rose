import Footer from "../../components/footer/Footer";
import HeaderSection from "../../components/headerSection/HeaderSection";
import NavBar from "../../components/navBar/NavBar";
import TableCart from "../../components/tableCart/TableCart";
import "./Cart.css";

const Cart = () => {
	return (
		<section className="container_cart">
			<NavBar/>
			<HeaderSection title={"Carrito de compras"} />
			<TableCart/>
			<Footer/>
		</section>
	);
};

export default Cart;
