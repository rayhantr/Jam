import React from "react";
import FinalForm from "./components/RegistrationPage/FinalForm";
import Header from "./components/Header/Header";

function MultiStepForm() {
	return (
		<div className="step-form">
			<Header />
			<FinalForm />
		</div>
	);
}

export default MultiStepForm;
