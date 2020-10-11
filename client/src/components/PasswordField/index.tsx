import React from "react";
import { StringLiteral } from "typescript";

import "./index.scss";

interface IPasswordFieldProps {
	placeHolder?: string;
	label: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function PasswordField(props: IPasswordFieldProps) {
	return (
		<div className="field">
			<div className="field__label">{props.label}</div>
			<div className="field--password">
				<input
					type={"password"}
					placeholder={props.placeHolder}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event)}
					value={props.value}
				/>
			</div>
		</div>
	);
}

export default PasswordField;
