import axios from "axios";
import { headersWithToken } from "../utils/utils";
import { URL_BASE } from "../constants/constants";

export const getAllProducts=async (token)=>{
	const response= await fetch(`${URL_BASE}/product`,{
		method:"GET",
		headers:headersWithToken(token)
	});
	return await response.json();
}