import axios from "axios";
import { headersWithToken } from "../helpers/helpers";
import { URL_BASE } from "../constants/constants";

export const getAllQualification=async (token) => {
	return await  axios.get(`${URL_BASE}/qualification`,{
		headers:headersWithToken(token)
	});
}