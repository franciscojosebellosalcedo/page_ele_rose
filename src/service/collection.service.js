import axios from "axios";
import { headersWithToken } from "../helpers/helpers";
import { URL_BASE } from "../constants/constants";

export const getAllCollections=async (token)=>{
	return await axios.get(`${URL_BASE}/collection`, {
		headers:headersWithToken(token),
	});
}