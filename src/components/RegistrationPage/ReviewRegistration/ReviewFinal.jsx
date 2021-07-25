import React from "react";
import Card from "../../Cards/Card";
import { Card as RCard, Col } from "react-bootstrap";
import "../../Cards/cards.css";

const DivField = ({ comp }) => {
	return <div className="row">{comp}</div>;
};

const StepOneDetails = (props) => {
	const { formValues } = props;
	const { firstName, lastName, email } = formValues;

	return (
		<RCard>
			<RCard.Header as="h4" className="row g-0 justify-content-between">
				Step One
				<Col xs={1} className="text-center">
					<i className="fas fa-pen"></i>
				</Col>
			</RCard.Header>

			<RCard.Body className="bs-dim">
				<RCard.Text>First Name: {`${firstName}`}</RCard.Text>
				<RCard.Text>Last Name: {`${lastName}`}</RCard.Text>
				<RCard.Text>Email: {`${email}`}</RCard.Text>
			</RCard.Body>
		</RCard>
	);
};

const StepTwoDetails = (props) => {
	const { formValues } = props;
	const { catService1, catService2 } = formValues;

	return (
		<div>
			<Card
				title="Step Two"
				content={
					<>
						<DivField comp={`Category 1: ${catService1}`} />
						<DivField comp={`Category 2: ${catService2}`} />
					</>
				}
			/>
		</div>
	);
};

const StepThreeDetails = (props) => {
	const { formValues } = props;
	const { expertise } = formValues;

	return (
		<div>
			<Card
				title="Step Three"
				content={
					<>
						<DivField comp={`Expertise: ${expertise}`} />
					</>
				}
			/>
		</div>
	);
};

const StepFourDetails = (props) => {
	const { formValues } = props;
	const { expertiseLvl } = formValues;

	return (
		<div>
			<Card
				title="Step Four"
				content={
					<>
						<DivField comp={`Expertise Level: ${expertiseLvl}`} />
					</>
				}
			/>
		</div>
	);
};

const StepFiveDetails = (props) => {
	const { formValues } = props;
	const { education } = formValues;

	return (
		<div>
			<Card
				title="Step Five"
				content={
					<>
						<DivField comp={`Education: ${education}`} />
					</>
				}
			/>
		</div>
	);
};

const StepSixDetails = (props) => {
	const { formValues } = props;
	const { education } = formValues;

	return (
		<div>
			<Card
				title="Step Six"
				content={
					<>
						<DivField comp={`Education: ${education}`} />
					</>
				}
			/>
		</div>
	);
};

const StepSevenDetails = (props) => {
	const { formValues } = props;
	const { languageProf, languages } = formValues;

	return (
		<div>
			<Card
				title="Step Seven"
				content={
					<>
						<DivField comp={`English Language Proficiency: ${languageProf}`} />
						<DivField comp={`Other Languages: ${languages}`} />
					</>
				}
			/>
		</div>
	);
};

const StepEightDetails = (props) => {
	const { formValues } = props;
	const { hourlyRate } = formValues;

	return (
		<div>
			<Card
				title="Step Eight"
				content={
					<>
						<DivField comp={`Hourly Rate: ${hourlyRate}`} />
					</>
				}
			/>
		</div>
	);
};

const StepNineDetails = (props) => {
	const { formValues } = props;
	const { title, overview } = formValues;

	return (
		<div>
			<Card
				title="Step Nine"
				content={
					<>
						<DivField comp={`Title: ${title}`} />
						<DivField comp={`Overview: ${overview}`} />
					</>
				}
			/>
		</div>
	);
};

const StepTenDetails = (props) => {
	const { formValues } = props;
	const { education } = formValues;

	return (
		<div>
			<Card
				title="Step Ten"
				content={
					<>
						<DivField comp={`Education: ${education}`} />
					</>
				}
			/>
		</div>
	);
};

const StepElevenDetails = (props) => {
	const { formValues } = props;
	const { address, city, zipCode, country } = formValues;

	return (
		<div>
			<Card
				title="Step Eleven"
				content={
					<>
						<DivField comp={`Address: ${address}`} />
						<DivField comp={`City: ${city}`} />
						<DivField comp={`ZipCode: ${zipCode}`} />
						<DivField comp={`Country: ${country}`} />
					</>
				}
			/>
		</div>
	);
};

const StepTwelveDetails = (props) => {
	const { formValues } = props;
	const { contactNo } = formValues;

	return (
		<div>
			<Card
				title="Step Twelve"
				content={
					<>
						<DivField comp={`Contact No: ${contactNo}`} />
					</>
				}
			/>
		</div>
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
