import axios from "axios";
import { headersWithToken } from "../utils/utils";
import { URL_BASE } from "../constants/constants";

export const sendOrder=async (token,data)=>{
	return await axios.post(`${URL_BASE}/order`,{...data},{
		headers:headersWithToken(token)
	});
}
export const getAllOrdersByUser=async (user)=>{
	return await axios.get(`${URL_BASE}/order/allOrders/${user?._id}`,{
		headers:headersWithToken(user.token)
	});
}