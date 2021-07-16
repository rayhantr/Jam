import React from "react";
import { useFormikContext } from "formik";
import {
	StepOneDetails,
	StepTwoDetails,
	StepThreeDetails,
	StepFourDetails,
	StepFiveDetails,
	StepSixDetails,
	StepSevenDetails,
	StepEightDetails,
	StepNineDetails,
	StepTenDetails,
	StepElevenDetails,
	StepTwelveDetails,
} from "./ReviewFinal";

const ReviewDetails = () => {
	const { values: formValues } = useFormikContext();

	return (
		<>
			<StepOneDetails formValues={formValues} />
			<StepTwoDetails formValues={formValues} />
			<StepThreeDetails formValues={formValues} />
			<StepFourDetails formValues={formValues} />
			<StepFiveDetails formValues={formValues} />
			<StepSixDetails formValues={formValues} />
			<StepSevenDetails formValues={formValues} />
			<StepEightDetails formValues={formValues} />
			<StepNineDetails formValues={formValues} />
			<StepTenDetails formValues={formValues} />
			<StepElevenDetails formValues={formValues} />
			<StepTwelveDetails formValues={formValues} />
		</>
	);
};

export default ReviewDetails;
