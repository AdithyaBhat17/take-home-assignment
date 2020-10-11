import React from "react";

import "./index.scss";

interface IEmailFieldProps {
	placeHolder?: string;
	label: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function EmailField(props: IEmailFieldProps) {
	return (
		<div className="field">
			<div className="field__label">{props.label}</div>
			<div className="field--email">
				<input
					placeholder={props.placeHolder}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event)}
					value={props.value}
				/>
			</div>
		</div>
	);
}

export default EmailField;
