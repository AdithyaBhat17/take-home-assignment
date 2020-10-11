import axios from "axios";

const setTokenData = () => {
	axios.defaults.headers.common[
		"authorization"
	] = `Bearer ${localStorage.getItem("token")}`;
};

export default setTokenData;
