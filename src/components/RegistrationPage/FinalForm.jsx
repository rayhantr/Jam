import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import "./style.scss";

import { StepOne, StepTwo, StepThree, StepFour, StepFive, StepSix, StepSeven, StepEight, StepNine, StepTen, StepEleven, StepTwelve } from "./Forms";

import ReviewDetails from "./ReviewRegistration/ReviewDetails";
import RegistrationSuccess from "./RegistrationSuccess";

import validationSchema from "./FormModel/validationSchema";
import registrationFormModel from "./FormModel/registrationFormModel";
import formInitialValues from "./FormModel/formInitialValues";

const { formId, formField } = registrationFormModel;

function _renderStepContent(step) {
	switch (step) {
		case 0:
			return <StepOne formField={formField} />;
		case 1:
			return <StepTwo formField={formField} />;
		case 2:
			return <StepThree formField={formField} />;
		case 3:
			return <StepFour formField={formField} />;
		case 4:
			return <StepFive formField={formField} />;
		case 5:
			return <StepSix formField={formField} />;
		case 6:
			return <StepSeven formField={formField} />;
		case 7:
			return <StepEight formField={formField} />;
		case 8:
			return <StepNine formField={formField} />;
		case 9:
			return <StepTen formField={formField} />;
		case 10:
			return <StepEleven formField={formField} />;
		case 11:
			return <StepTwelve formField={formField} />;
		case 12:
			return <ReviewDetails />;
		default:
			return <div>Not Found</div>;
	}
}

const FinalForm = () => {
	const [steps, setSteps] = useState([
		{ key: 1, label: "Getting Started", isDone: true, icon: <i className="fas fa-stream"></i> },
		{ key: 2, label: "Category", isDone: false, icon: <i className="fas fa-th-list"></i> },
		{ key: 3, label: "Expertise", isDone: false, icon: <i className="fas fa-cogs"></i> },
		{ key: 4, label: "Expertise Level", isDone: false, icon: <i className="fas fa-chart-bar"></i> },
		{ key: 5, label: "Education", isDone: false, icon: <i className="fas fa-graduation-cap"></i> },
		{ key: 6, label: "Employment", isDone: false, icon: <i className="fas fa-briefcase"></i> },
		{ key: 7, label: "Languages", isDone: false, icon: <i className="fas fa-language"></i> },
		{ key: 8, label: "Hourly Rate", isDone: false, icon: <i className="fas fa-dollar-sign"></i> },
		{ key: 9, label: "Title & Overview", isDone: false, icon: <i className="far fa-id-card"></i> },
		{ key: 10, label: "Profile Photo", isDone: false, icon: <i className="fas fa-camera-retro"></i> },
		{ key: 11, label: "Location", isDone: false, icon: <i className="fas fa-map-marker-alt"></i> },
		{ key: 12, label: "Phone", isDone: false, icon: <i className="fas fa-phone"></i> },
		{ key: 13, label: "Review Details", isDone: false, icon: <i className="fas fa-history"></i> },
	]);

	const [activeStep, setActiveStep] = useState(0);
	const currentValidationSchema = validationSchema[activeStep];
	const isLastStep = activeStep === steps.length - 1;
	const reviewStep = activeStep === steps.length - 2;

	function _sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function _submitForm(values, actions) {
		await _sleep(1000);
		alert(JSON.stringify(values, null, 2));
		actions.setSubmitting(false);

		setActiveStep(activeStep + 1);
	}

	function _handleSubmit(values, actions) {
		if (isLastStep) {
			_submitForm(values, actions);
		} else {
			setSteps((prevStep) =>
				prevStep.map((x) => {
					if (x.key === activeStep + 1) x.isDone = true;
					return x;
				})
			);
			setActiveStep(activeStep + 1);
			actions.setTouched({});
			actions.setSubmitting(false);
		}
	}

	function _handleBack() {
		setSteps((prevStep) =>
			prevStep.map((x) => {
				if (x.key === activeStep + 1) x.isDone = false;
				return x;
			})
		);
		setActiveStep(activeStep - 1);
	}

	return (
		<Container className="ms-form">
			{activeStep === steps.length ? (
				<RegistrationSuccess />
			) : (
				<Row>
					{/* Step navigation */}
					<Col as="ul" xs={4} className={`nav-steps list-unstyled d-none  ${isLastStep ? "d-none" : "d-md-block"}`}>
						{steps.map((step, i) => {
							return (
								<li key={i} className={`${activeStep + 1 === step.key ? "active" : ""} ${step.isDone ? "done" : ""} ${i === 12 ? "d-none" : "d-block"} text-gray-light`}>
									<Row className="nav-step-title gx-2">
										<Col xs="auto">
											<div className="step-icon p-2 text-center">{step.icon}</div>
										</Col>
										<Col>
											<div className="step-label p-2">{step.label}</div>
										</Col>
									</Row>
								</li>
							);
						})}
					</Col>

					{/* Step components */}
					<Col md={`${isLastStep ? 12 : 8}`}>
						<Formik initialValues={formInitialValues} validationSchema={currentValidationSchema} onSubmit={_handleSubmit}>
							{({ isSubmitting, isValid, dirty }) => (
								<Form id={formId}>
									<Row className="step-components ms-md-1 g-0">
										{/* Step Heading */}
										<Col xs={12} className="step-info p-3">
											<h1 className="text-gray-dark">
												{steps[activeStep].label}
												{steps[activeStep].icon}
											</h1>
											{/* Step counter */}
											<h5>
												<Badge bg="color-two">
													Step {activeStep + 1} of {steps.length - 1}
												</Badge>
											</h5>
										</Col>
										{/* Components Render */}
										<Col xs={12} className="my-3">
											{_renderStepContent(activeStep)}
										</Col>
										{/* Back & Next Button */}
										<Col xs={12} className="my-4">
											<div className={`nav-buttons row ${activeStep === 0 ? "justify-content-end" : "justify-content-between"}`}>
												{activeStep !== 0 && (
													<Col xs={6} lg={3}>
														<Button type="button" variant="back" className="btn-form col-12" onClick={_handleBack}>
															<span>
																Back
																<i className="fas fa-arrow-left"></i>
															</span>
														</Button>
													</Col>
												)}
												<Col xs={6} lg={3}>
													<Button type="submit" variant={`${!(isValid && dirty) ? "next" : "next-go"}`} className="btn-form col-12" disabled={!(isValid && dirty) || isSubmitting}>
														<span>
															{isLastStep ? "Submit" : reviewStep ? "Review" : "Next"}
															<i className="fas fa-arrow-right"></i>
														</span>
													</Button>
												</Col>
											</div>
										</Col>
									</Row>
								</Form>
							)}
						</Formik>
					</Col>
				</Row>
			)}
		</Container>
	);
};

export default FinalForm;
