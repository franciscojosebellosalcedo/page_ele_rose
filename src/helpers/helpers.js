import { HEADERS } from "../constants/constants"

export const headersWithToken=(token)=>{
	HEADERS["access-token"] = `bearer ${token}`;
	return HEADERS;
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