import axios from "axios";
import { headersWithToken } from "../utils/utils";
import { URL_BASE } from "../constants/constants";

export const getAllCategories = async (token) => {
	return await axios.get(`${URL_BASE}/category`, {
		headers:headersWithToken(token),
	});
};
