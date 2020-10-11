import React from "react";

import "./index.scss";

interface IButtonProps {
	buttonText: string;
	onClick: () => void;
}

function Button(props: IButtonProps) {
	return (
		<div className="button" onClick={props.onClick}>
			{props.buttonText}
		</div>
	);
}

export default Button;
