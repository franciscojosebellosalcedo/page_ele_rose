import { HEADERS } from "../constants/constants"

export const headersWithToken=(token)=>{
	HEADERS["access-token"] = `bearer ${token}`;
	return HEADERS;
}

export const  formatPrice=(price) =>{
  return Math.round(price * 100) / 100
	.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
}