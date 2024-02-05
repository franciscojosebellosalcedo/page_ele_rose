import { HEADERS } from "../constants/constants"

export const headersWithToken=(token)=>{
	HEADERS["access-token"] = `bearer ${token}`;
	return HEADERS;
}

export const getRefressTokenLocalStorage=()=>{
	return sessionStorage.getItem("refressTokenEleRose");
}

export const saveRefressTokenLocalStorage=(token)=>{
	sessionStorage.setItem("refressTokenEleRose",token);
}

export const isValidObject=(object)=>{
	const listValues=[null,""," ",undefined,0];
	const keys=Object.keys(object);
	for (let index = 0; index < keys.length; index++) {
		const key = keys[index];
		if(listValues.includes(object[`${key}`])===true){
			return false;
		}
	}
	return true;
}

export const  formatPrice=(price) =>{
  return Math.round(price * 100) / 100
	.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
}

export const formatDate=(fechaString)=> {
  const fecha = new Date(fechaString);

  const dia = fecha.getDate().toString().padStart(2, '0');
  const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
  const año = fecha.getFullYear();

  return `${dia}/${mes}/${año}`;
}