import { HEADERS, URL_BASE } from "../constants/constants";

export const saveInfoContact=async(data)=>{
	const response=await fetch(`${URL_BASE}/infoContact`,{
		method:"POST",
		body:JSON.stringify(data),
		headers:HEADERS
	});
	return await response.json();
}