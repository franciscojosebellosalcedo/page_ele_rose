import { useSelector } from "react-redux";
import "./UserDetails.css";
import { useEffect, useState } from "react";

const UserDetails = () => {
	const user = useSelector((state) => state.user.data.user);
	const [dataUser,setDataUser]=useState(null);

	useEffect(()=>{
		setDataUser(user);
	},[]);

	return (
		<section className="container_user_details">
			<div className="section_btn_logout">
			<button className="btn btn_logout">Cerrar sesión</button>
			</div>
			<p className="text_user_details">
				Te damos las gracias de corazón por elegir Ele Rose Accesorios como tu destino de compras para accesorios extraordinarios.
				En cada compra, colaboras en darle vida a Ele Rose, transformándola en un rincón especial, impregnado de estilo y elegancia. 😊
			</p>
			<h1 onClick={()=>console.log(dataUser)} className="container_title title_user_details">Detalles de tu cuenta</h1>
			<section className="box_info">
				<article className="article_user_details article_left">
					<h4 className="title_info_personal">Información personal</h4>
					<form className="form_user_tails" >

						<div className="content_form_user_details">
							<h4 className="h4_form_user_details">Nombre:</h4>
							<input value={user?.name} className="input_form_details_user" type="text" placeholder="Ingrese su nombre" />
						</div>

						<div className="content_form_user_details">
							<h4 className="h4_form_user_details">Correo electrónico:</h4>
							<input value={user?.email} className="input_form_details_user" type="email" placeholder="Ingrese su correo electrónico" />
						</div>

						<div className="content_form_user_details">
							<h4 className="h4_form_user_details">Número de teléfono:</h4>
							<input value={user?.phone} className="input_form_details_user" type="tel" placeholder="Ingrese su número de teléfono" />
						</div>

						<div className="content_form_user_details">
							<h4 className="h4_form_user_details">Dirección:</h4>
							<input value={user?.address} className="input_form_details_user" type="text" placeholder="Ingrese su dirección" />
						</div>

						<div className="container_btn_form_details_user">
							<button className="btn btn_form_edit_info_user">Editar</button>
							<button className="btn btn_form_details_user btn_save_form_details_user">Guardar</button>
						</div>
					</form>
				</article>

				<article className="article_user_details article_border">
					<h4 className="title_info_personal">Cambiar contraseña</h4>
					<form className="form_user_tails" >
						<div className="content_form_user_details">
							<h4 className="h4_form_user_details">Contraseña actual:</h4>
							<input className="input_form_details_user" type="password" placeholder="Escriba su contraseña actual" />
						</div>

						<div className="content_form_user_details">
							<h4 className="h4_form_user_details">Contraseña nueva:</h4>
							<input className="input_form_details_user" type="password" placeholder="Escriba la contraseña nueva" />
						</div>

						<button className="btn btn_form_edit_info_user">Guardar</button>
					</form>
				</article>
			</section>

		</section>
	)
}

export default UserDetails;