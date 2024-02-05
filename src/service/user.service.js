import axios from "axios";
import { HEADERS, URL_BASE } from "../constants/constants";

export const createUser=async (data)=>{
	const response=await fetch(`${URL_BASE}/user/user-page`,{
		method:"POST",
		body:JSON.stringify(data),
		headers:HEADERS
	});
	return response.json();
}