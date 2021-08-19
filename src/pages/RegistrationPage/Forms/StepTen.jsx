import React from "react";
import { InputField } from "components/FormFields";

const StepTen = (props) => {
	const {
		formField: { education },
	} = props;

	return (
		<div>
			<InputField label={education.label} name={education.name} type="text" placeholder="Step 10" />
		</div>
	);
};

export default StepTen;
