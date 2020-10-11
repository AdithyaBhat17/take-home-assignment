import React, { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import User from "../../Classes/User";

import LoginForm from "../../components/LoginForm";

import { UserLoginForm } from "../../interface/common";
import { ILoginResponse } from "../../interface/response";
import { callPostApi } from "../../util/callApi";

function UserLoginContainer(props: RouteComponentProps) {
	const [isSignIn, setIsSignIn] = useState(true);
	const [errors, setErrors] = useState<any>();

	const onSubmit = (fieldValues: UserLoginForm | undefined) => {
		if (!fieldValues) {
			setErrors("All fields must be entered");
			return;
		}
		const user = new User(fieldValues);

		if (!user.isValid()) {
			setErrors(user.getErrorMsg());
			return;
		}

		if (!isSignIn) {
			callPostApi<ILoginResponse, UserLoginForm>("/api/register", fieldValues).then((res) => {
				if (res && res.success) {
					setIsSignIn(true);
					setErrors(null);
				} else {
					setErrors(res && res.message);
				}
			});
		} else {
			callPostApi<ILoginResponse, UserLoginForm>("/api/login", fieldValues).then((res) => {
				if (res && res.success) {
					props.history.push("/instance");
				} else {
					setErrors(res && res.message);
				}
			});
		}
	};

	return (
		<div>
			<LoginForm
				headerText={isSignIn ? "Sign in" : "Sign Up"}
				subText={isSignIn ? "Create an account" : "Have an account already? Login here"}
				onClickSubText={() => {
					setErrors(null);
					setIsSignIn(!isSignIn);
				}}
				onSubmit={(fieldValues: UserLoginForm | undefined) => {
					onSubmit(fieldValues);
				}}
				errorMsg={errors}
				buttonText={isSignIn ? "Login" : "Create an account"}
			/>
		</div>
	);
}

export default withRouter(UserLoginContainer);
