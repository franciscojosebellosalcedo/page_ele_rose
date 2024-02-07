import axios from "axios";
import { HEADERS, URL_BASE } from "../constants/constants";
import { headersWithToken } from "../helpers/helpers";

export const createUser=async (data)=>{
	const response=await fetch(`${URL_BASE}/user/user-page`,{
		method:"POST",
		body:JSON.stringify(data),
		headers:HEADERS
	});
	return response.json();
}

export const login=async (data)=>{
	return await axios.post(`${URL_BASE}/user/login-user-page`,{...data});
}
export const getNewAccessTokenUser=async (token)=>{
	return await axios.get(`${URL_BASE}/user/refress-token`,{
		headers:headersWithToken(token)
	})
}