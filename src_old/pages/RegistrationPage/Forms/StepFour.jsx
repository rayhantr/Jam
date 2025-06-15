import React from "react";
import { InputField } from "components/FormFields";

const StepFour = (props) => {
	const {
		formField: { expertiseLvl },
	} = props;

	return (
		<div>
			<InputField label={expertiseLvl.label} name={expertiseLvl.name} type="text" placeholder="Expertise level" />
		</div>
	);
};

export default StepFour;
