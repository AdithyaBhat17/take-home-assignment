import React, { useState } from "react";
import { UserLoginForm } from "../../interface/common";
import Button from "../Button";
import EmailField from "../EmailField";
import PasswordField from "../PasswordField";

import "./index.scss";

interface ILoginFormProps {
	headerText: string;
	subText: string;
	buttonText: string;
	errorMsg?: string;
	onClickSubText: () => void;
	onSubmit: (fieldValues: UserLoginForm | undefined) => void;
}

function LoginForm(props: ILoginFormProps) {
	const [fieldValues, setFieldValues] = useState<UserLoginForm>();

	return (
		<div className="loginForm">
			<div className="loginForm__header">{props.headerText}</div>
			{props.errorMsg ? <div className="loginForm__header__error">{props.errorMsg}</div> : null}
			<div className="loginForm__email">
				<EmailField
					label={"EMAIL"}
					placeHolder={"user@gmail.com"}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setFieldValues({
							...fieldValues,
							["email"]: event.target.value,
						});
					}}
					value={(fieldValues && fieldValues.email) || ""}
				/>
			</div>
			<div className="loginForm__password">
				<PasswordField
					label={"PASSWORD"}
					placeHolder={"************"}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setFieldValues({
							...fieldValues,
							["password"]: event.target.value,
						});
					}}
					value={(fieldValues && fieldValues.password) || ""}
				/>
			</div>
			<div className="loginForm__button">
				<Button buttonText={props.buttonText} onClick={() => props.onSubmit(fieldValues)} />
			</div>
			<div
				className="loginForm__createAccount"
				onClick={() => {
					setFieldValues({});
					props.onClickSubText();
				}}
			>
				{props.subText}
			</div>
		</div>
	);
}

export default LoginForm;
