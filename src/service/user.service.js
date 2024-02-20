import axios from "axios";
import { HEADERS, URL_BASE } from "../constants/constants";
import { headersWithToken } from "../utils/utils";

export const createUser=async (data)=>{
	const response=await fetch(`${URL_BASE}/user/user-page`,{
		method:"POST",
		body:JSON.stringify(data),
		headers:HEADERS
	});
	return response.json();
}

export const editUser=async(token,data,id)=>{
	const response=await fetch(`${URL_BASE}/user/${id}`,{
		method:"PUT",
		body:JSON.stringify(data),
		headers:headersWithToken(token)
	});
	return response.json();
}

export const resetPassword=async (data)=>{
	return await axios.post(`${URL_BASE}/user/reset-password`,{...data});
}

export const setNewPassword=async (token,data)=>{
	return await axios.put(`${URL_BASE}/user/reset-password/${token}`,{...data});
}

export const login=async (data)=>{
	return await axios.post(`${URL_BASE}/user/login-user-page`,{...data});
}

export const getNewAccessTokenUser=async (token)=>{
	return await axios.get(`${URL_BASE}/user/refress-token`,{
		headers:headersWithToken(token)
	})
}