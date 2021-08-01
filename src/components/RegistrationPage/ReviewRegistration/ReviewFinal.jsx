import React from "react";
import { Card, Col } from "react-bootstrap";

const StepOneDetails = (props) => {
	const { formValues } = props;
	const { firstName, lastName, email } = formValues;

	return (
		<Card>
			<Card.Header as="h4" className="row g-0 justify-content-between">
				Step One
				<Col xs={1} className="text-center">
					<i className="fas fa-pen"></i>
				</Col>
			</Card.Header>

			<Card.Body className="bs-dim">
				<Card.Text>First Name: {`${firstName}`}</Card.Text>
				<Card.Text>Last Name: {`${lastName}`}</Card.Text>
				<Card.Text>Email: {`${email}`}</Card.Text>
			</Card.Body>
		</Card>
	);
};

const StepTwoDetails = (props) => {
	const { formValues } = props;
	const { catService1, catService2 } = formValues;

	return (
		<Card>
			<Card.Header as="h4" className="row g-0 justify-content-between">
				Step Two
				<Col xs={1} className="text-center">
					<i className="fas fa-pen"></i>
				</Col>
			</Card.Header>

			<Card.Body className="bs-dim">
				<Card.Text>Category 1: {`${catService1}`}</Card.Text>
				<Card.Text>Category 2: {`${catService2}`}</Card.Text>
			</Card.Body>
		</Card>
	);
};

const StepThreeDetails = (props) => {
	const { formValues } = props;
	const { expertise } = formValues;

	return (
		<Card>
			<Card.Header as="h4" className="row g-0 justify-content-between">
				Step Three
				<Col xs={1} className="text-center">
					<i className="fas fa-pen"></i>
				</Col>
			</Card.Header>

			<Card.Body className="bs-dim">
				<Card.Text>Expertise: {`${expertise}`}</Card.Text>
			</Card.Body>
		</Card>
	);
};

const StepFourDetails = (props) => {
	const { formValues } = props;
	const { expertiseLvl } = formValues;

	return (
		<Card>
			<Card.Header as="h4" className="row g-0 justify-content-between">
				Step Four
				<Col xs={1} className="text-center">
					<i className="fas fa-pen"></i>
				</Col>
			</Card.Header>

			<Card.Body className="bs-dim">
				<Card.Text>Expertise Level: {`${expertiseLvl}`}</Card.Text>
			</Card.Body>
		</Card>
	);
};

const StepFiveDetails = (props) => {
	const { formValues } = props;
	const { education } = formValues;

	return (
		<Card>
			<Card.Header as="h4" className="row g-0 justify-content-between">
				Step Five
				<Col xs={1} className="text-center">
					<i className="fas fa-pen"></i>
				</Col>
			</Card.Header>

			<Card.Body className="bs-dim">
				<Card.Text>Education: {`${education}`}</Card.Text>
			</Card.Body>
		</Card>
	);
};

const StepSixDetails = (props) => {
	const { formValues } = props;
	const { education } = formValues;

	return (
		<Card>
			<Card.Header as="h4" className="row g-0 justify-content-between">
				Step Six
				<Col xs={1} className="text-center">
					<i className="fas fa-pen"></i>
				</Col>
			</Card.Header>

			<Card.Body className="bs-dim">
				<Card.Text>Education: {`${education}`}</Card.Text>
			</Card.Body>
		</Card>
	);
};

const StepSevenDetails = (props) => {
	const { formValues } = props;
	const { languageProf, languages } = formValues;

	return (
		<Card>
			<Card.Header as="h4" className="row g-0 justify-content-between">
				Step Seven
				<Col xs={1} className="text-center">
					<i className="fas fa-pen"></i>
				</Col>
			</Card.Header>

			<Card.Body className="bs-dim">
				<Card.Text>English Language Proficiency: {`${languageProf}`}</Card.Text>
				<Card.Text>Other Languages: {`${languages}`}</Card.Text>
			</Card.Body>
		</Card>
	);
};

const StepEightDetails = (props) => {
	const { formValues } = props;
	const { hourlyRate } = formValues;

	return (
		<Card>
			<Card.Header as="h4" className="row g-0 justify-content-between">
				Step Eight
				<Col xs={1} className="text-center">
					<i className="fas fa-pen"></i>
				</Col>
			</Card.Header>

			<Card.Body className="bs-dim">
				<Card.Text>Hourly Rate: {`${hourlyRate}`}</Card.Text>
			</Card.Body>
		</Card>
	);
};

const StepNineDetails = (props) => {
	const { formValues } = props;
	const { title, overview } = formValues;

	return (
		<Card>
			<Card.Header as="h4" className="row g-0 justify-content-between">
				Step Nine
				<Col xs={1} className="text-center">
					<i className="fas fa-pen"></i>
				</Col>
			</Card.Header>

			<Card.Body className="bs-dim">
				<Card.Text>Title: {`${title}`}</Card.Text>
				<Card.Text>Overview: {`${overview}`}</Card.Text>
			</Card.Body>
		</Card>
	);
};

const StepTenDetails = (props) => {
	const { formValues } = props;
	const { education } = formValues;

	return (
		<Card>
			<Card.Header as="h4" className="row g-0 justify-content-between">
				Step Ten
				<Col xs={1} className="text-center">
					<i className="fas fa-pen"></i>
				</Col>
			</Card.Header>

			<Card.Body className="bs-dim">
				<Card.Text>Education: {`${education}`}</Card.Text>
			</Card.Body>
		</Card>
	);
};

const StepElevenDetails = (props) => {
	const { formValues } = props;
	const { address, city, zipCode, country } = formValues;

	return (
		<Card>
			<Card.Header as="h4" className="row g-0 justify-content-between">
				Step Eleven
				<Col xs={1} className="text-center">
					<i className="fas fa-pen"></i>
				</Col>
			</Card.Header>

			<Card.Body className="bs-dim">
				<Card.Text>Address: {`${address}`}</Card.Text>
				<Card.Text>City: {`${city}`}</Card.Text>
				<Card.Text>ZipCode: {`${zipCode}`}</Card.Text>
				<Card.Text>Country: {`${country}`}</Card.Text>
			</Card.Body>
		</Card>
	);
};

const StepTwelveDetails = (props) => {
	const { formValues } = props;
	const { contactNo } = formValues;

	return (
		<Card>
			<Card.Header as="h4" className="row g-0 justify-content-between">
				Step Twelve
				<Col xs={1} className="text-center">
					<i className="fas fa-pen"></i>
				</Col>
			</Card.Header>

			<Card.Body className="bs-dim">
				<Card.Text>Contact No: {`${contactNo}`}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export {
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
};
