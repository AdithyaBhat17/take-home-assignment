import React, { useState } from "react";

import "./index.scss";

interface ISwitchProps {
	onChangeCurrency: (checked: boolean) => void;
}

function Switch(props: ISwitchProps) {
	const [checked, setChecked] = useState<boolean>(true);
	return (
		<div
			className="switch"
			onClick={() => {
				setChecked(!checked);
				props.onChangeCurrency(checked);
			}}
		>
			<input type="checkbox" checked={checked} />
			<div className="slider round"></div>
		</div>
	);
}

export default Switch;
