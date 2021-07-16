import React from "react";
import { InputField } from "../../FormFields";

const StepThree = (props) => {
	const {
		formField: { expertise },
	} = props;

	return (
		<div>
			<InputField label={expertise.label} name={expertise.name} type="text" placeholder="Start typing to search for skills" />
		</div>
	);
};

export default StepThree;
