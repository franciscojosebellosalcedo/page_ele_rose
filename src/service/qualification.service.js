import axios from "axios";
import { headersWithToken } from "../utils/utils";
import { URL_BASE } from "../constants/constants";

export const getAllQualificationByIdProduct=async (token,product) => {
	return await  axios.get(`${URL_BASE}/qualification/${product?._id}`,{
		headers:headersWithToken(token)
	});
}

export const getAllQualification=async (token) => {
	return await  axios.get(`${URL_BASE}/qualification`,{
		headers:headersWithToken(token)
	});
}

export const createQualification=async(token,data)=>{
	return await  axios.post(`${URL_BASE}/qualification/create`,{...data},{
		headers:headersWithToken(token)
	});
}