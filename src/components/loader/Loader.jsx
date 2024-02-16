import "./Loader.css";

const Loader = () => {
	return (
		<div className="conatiner_loader">
			<img className="logo_loader" src={require("./../../assest/logo.jpeg")} alt="" />
			<p className="text_loader">Cargando catálogo 🙂</p>
				<span className="loader"></span>
		</div>
	)
}

export default Loader;