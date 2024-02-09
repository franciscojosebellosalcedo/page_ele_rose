import axios from "axios";
import { headersWithToken } from "../utils/utils";
import { URL_BASE } from "../constants/constants";

export const getAllQualification=async (token) => {
	return await  axios.get(`${URL_BASE}/qualification`,{
		headers:headersWithToken(token)
	});
}