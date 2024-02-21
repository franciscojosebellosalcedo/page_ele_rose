import { useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import HeaderSection from "../../components/headerSection/HeaderSection";
import NavBar from "../../components/navBar/NavBar";
import "./User.css";
import UserDetails from "../../components/userDetails/UserDetails";
import HistoryOrderUser from "../../components/historyOrderUser/HistoryOrderUser";

const User = () => {
	const user=useSelector((state)=>state.user.data.user);
	return (
		<section className="container_user">
			<NavBar/>
			<HeaderSection title={`Hola ${user?.name}`}/>
			<UserDetails/>
			{
				user ? <HistoryOrderUser user={user}/>:""
			}
			<Footer/>
		</section>
	)
}

export default User;