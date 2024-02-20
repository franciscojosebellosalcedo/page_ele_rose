import { useDispatch, useSelector } from "react-redux";
import "./UserDetails.css";
import { useEffect, useState } from "react";
import { compareObjects, isEmailValid, isValidObject } from "../../utils/utils";
import { editUser } from "../../service/user.service";
import LoaderButton from "../loaderButton/LoaderButton";
import { setUser } from "../../features/user/user";

const UserDetails = () => {
	const user = useSelector((state) => state.user.data.user);
	const [dataUser,setDataUser]=useState(null);
	const [isEditingUser,setIsEditingUser]=useState(false);
	const [isLoaderEditingInfoUser,setIsLoaderEditingInfoUser]=useState(false);
	const [isLoaderEditingPassword,setIsLoaderEditingPassword]=useState(false);
	const [alertResponseInfo,setAlertResponseInfo]=useState({message:"",type:0,isOpen:false});
	const dispatch=useDispatch();

	const handlerIsEditingUser=(e)=>{
		e.preventDefault();
		if(isEditingUser){
			setAlertResponseInfo({message:"",type:0,isOpen:false});
		}
		setIsEditingUser(!isEditingUser);
	}

	const handlerForm=(target,value)=>{
		setDataUser({...dataUser,[target]:value});
	}

	const editInfoUser=async(e)=>{
		e.preventDefault();
		setIsLoaderEditingInfoUser(true);

		try {
			const object1={name:user?.name,address:user?.address,email:user?.email,phone:user?.phone};
			const object2={name:dataUser?.name,address:dataUser?.address,email:dataUser?.email,phone:dataUser?.phone};
			if(isValidObject(dataUser)){
				if(isEmailValid(dataUser.email)===false){
					setAlertResponseInfo({message:"Correo electrónico no válido",type:0,isOpen:true});
				}else{
					if(!compareObjects(object1,object2)){
						const responseEditUser=await editUser(user?.token,dataUser,user?._id);
						if(responseEditUser.status===200 && responseEditUser.response){
							const data=responseEditUser.data;
							dispatch(setUser({_id:user?._id,name:data?.name,address:data.address,email:data.email,phone:data.phone,token:user.token,createdAt:user.createdAt,updatedAt:user.updatedAt}));
							setAlertResponseInfo({message:responseEditUser.message,type:1,isOpen:true});
						}else{
							setAlertResponseInfo({message:responseEditUser.message,type:0,isOpen:true});
						}
					}else{
						setAlertResponseInfo({message:"No has hecho cambios en tus datos",type:1,isOpen:true});
					}
				}
			}else{
				setAlertResponseInfo({message:"Llene todos los campos de su infomación personal",type:0,isOpen:true});
			}
		} catch (error) {
			setAlertResponseInfo({message:"Error en editar tu cuenta",type:0});
		}
		setIsLoaderEditingInfoUser(false);
	}

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
			<h1 className="container_title title_user_details">Detalles de tu cuenta</h1>
			<section className="box_info">
				<article className="article_user_details article_left">
					<h4 className="title_info_personal">Información personal</h4>
					<form className="form_user_tails" >

						<div className="content_form_user_details">
							<h4 className="h4_form_user_details">Nombre:</h4>
							<input onInput={(e)=>handlerForm("name",e.target.value)} value={dataUser?.name} className={`input_form_details_user ${isEditingUser ? "see_input":""}`} type="text" placeholder="Ingrese su nombre" />
						</div>

						<div className="content_form_user_details">
							<h4 className="h4_form_user_details">Correo electrónico:</h4>
							<input onInput={(e)=>handlerForm("email",e.target.value)} value={dataUser?.email} className={`input_form_details_user ${isEditingUser ? "see_input":""}`} type="email" placeholder="Ingrese su correo electrónico" />
						</div>

						<div className="content_form_user_details">
							<h4 className="h4_form_user_details">Número de teléfono:</h4>
							<input onInput={(e)=>handlerForm("phone",e.target.value)} value={dataUser?.phone} className={`input_form_details_user ${isEditingUser ? "see_input":""}`} type="tel" placeholder="Ingrese su número de teléfono" />
						</div>

						<div className="content_form_user_details">
							<h4 className="h4_form_user_details">Dirección:</h4>
							<input onInput={(e)=>handlerForm("address",e.target.value)} value={dataUser?.address} className={`input_form_details_user ${isEditingUser ? "see_input":""}`} type="text" placeholder="Ingrese su dirección" />
						</div>
						{
							alertResponseInfo.isOpen ? 
						<p className={`alert_form_comment ${alertResponseInfo.type===1 ?"color_green":"color_red"}`}>{alertResponseInfo.message}</p>
						:""
						}
						<div className="container_btn_form_details_user">
							<button onClick={(e)=>handlerIsEditingUser(e)} className="btn btn_form_edit_info_user">{isEditingUser ?"Cancelar" :"Editar"}</button>
							{
								isEditingUser ?
							<button onClick={(e)=>editInfoUser(e)} className="btn btn_form_details_user btn_save_form_details_user">{isLoaderEditingInfoUser ? <LoaderButton/> :"Guardar"}</button>
							:""
							}
						</div>
					</form>
				</article>

				<article className="article_user_details article_border">
					<h4 className="title_info_personal">Cambiar contraseña</h4>
					<form className="form_user_tails" >
						<div className="content_form_user_details">
							<h4 className="h4_form_user_details">Contraseña actual:</h4>
							<input onInput={(e)=>handlerForm("name",e.target.value)} className="input_form_details_user see_input" type="password" placeholder="Escriba su contraseña actual" />
						</div>

						<div className="content_form_user_details">
							<h4 className="h4_form_user_details">Contraseña nueva:</h4>
							<input onInput={(e)=>handlerForm("name",e.target.value)} className="input_form_details_user see_input" type="password" placeholder="Escriba la contraseña nueva" />
						</div>
						<p className="alert_form_comment">Tus datos se editaron correctamente</p>
						
						<button className="btn btn_form_edit_info_user">Guardar</button>
					</form>
				</article>
			</section>

		</section>
	)
}

export default UserDetails;