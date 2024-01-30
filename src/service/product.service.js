import axios from "axios";
import { headersWithToken } from "../helpers/helpers";
import { URL_BASE } from "../constants/constants";

export const getAllProducts=async (token)=>{
	return await axios.get(`${URL_BASE}/product`,{
		headers:headersWithToken(token)
	})
}