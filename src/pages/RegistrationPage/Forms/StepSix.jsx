import React from "react";
import { InputField } from "components/FormFields";

const StepSix = (props) => {
	const {
		formField: { education },
	} = props;

	return (
		<div>
			<InputField label={education.label} name={education.name} type="text" placeholder="Education" />
		</div>
	);
};

export default StepSix;
