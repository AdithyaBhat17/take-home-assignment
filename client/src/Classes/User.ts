import validator from "validator";
import { UserLoginForm } from "../interface/common";

interface IUserLoginData {
	email: string;
	password: string;
	isValid: () => boolean;
}

class User implements IUserLoginData {
	email: string;
	password: string;
	errMsg = "";

	constructor(loginDetails: UserLoginForm) {
		this.email = loginDetails.email!;
		this.password = loginDetails.email!;
	}

	getErrorMsg() {
		return this.errMsg;
	}

	isValid() {
		const isEmail = validator.isEmail(this.email);
		if (!isEmail) {
			this.errMsg = "invalid email address";
			return false;
		}
		if (!this.password.trim()) {
			this.errMsg = "password is required";
			return false;
		}
		return true;
	}
}

export default User;
