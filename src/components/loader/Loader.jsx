import "./Loader.css";

const Loader = () => {
	return (
		<div className="conatiner_loader">
			<img className="logo_loader" src={require("./../../assest/logo.jpeg")} alt="" />
			<span class="loader"></span>
		</div>
	)
}

export default Loader;