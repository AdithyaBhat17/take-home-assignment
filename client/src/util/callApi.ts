import axios from "axios";
import setTokenData from "./setToken";

const IP = "http://localhost";
const PORT = "8080";

export const callPostApi = async <T, U>(url: string, body: U) => {
	try {
		setTokenData();
		const res = await axios.post<T>(`${IP}:${PORT}${url}`, body);
		if (res.statusText !== "OK") {
			return false;
		}
		if (url === "/api/login") {
			localStorage.setItem("token", res.headers.authorization);
		}
		return res.data;
	} catch (e) {
		console.error(
			`callPostApi::Exception occuured: url: ${url} body : ${body}`
		);
		throw e;
	}
};

export const callGetApi = async <T>(url: string) => {
	try {
		setTokenData();
		const res = await axios.get<T>(`${IP}:${PORT}${url}`);
		if (res.statusText !== "OK") {
			return false;
		}
		return res.data;
	} catch (e) {
		console.error(`callGetApi::Exception occuured: url: ${url}`);
		throw e;
	}
};

export const callPutApi = async <T, U>(url: string, body: U) => {
	try {
		const res = await axios.put<T>(`${IP}:${PORT}${url}`, body);
		if (res.statusText !== "OK") {
			return false;
		}
		return res.data;
	} catch (e) {
		console.error(
			`callPutApi::Exception occuured: url: ${url} body : ${body}`
		);
		throw e;
	}
};
