import React from "react";
import { InputField } from "components/FormFields";

const StepSeven = (props) => {
	const {
		formField: { languageProf, languages },
	} = props;

	return (
		<div>
			<InputField label={languageProf.label} name={languageProf.name} type="text" placeholder="Language Proficiency" />
			<InputField label={languages.label} name={languages.name} type="text" placeholder="Other languages" />
		</div>
	);
};

export default StepSeven;
