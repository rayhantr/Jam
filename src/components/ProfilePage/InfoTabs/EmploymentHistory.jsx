import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import BtnIcon from "../../Buttons/BtnIcon";
import EmptyAdd from "../EmptyAdd";

const Employment = ({ empHistory }) => {
	return (
		<Col xs={12}>
			<div className="employment-history">
				<div className="employment-details ps-3">
					<h6>
						<span className="emp-designation">{empHistory.designation}</span> | <span className="emp-place">{empHistory.institute}</span>
					</h6>
					<small className="emp-duration">
						{empHistory.startDate} - {empHistory.endDate}
					</small>
					<p className="emp-details mt-3">{empHistory.details}</p>
				</div>
			</div>
		</Col>
	);
};

const EmploymentHistory = ({ employmentHistory, publicView }) => {
	return (
		<Col xs={12} className="mt-3">
			<Card body className="bs-dim">
				<Card.Title className="row g-0 justify-content-between align-items-center">
					Employment History
					{publicView ? null : <BtnIcon iconType="add" />}
				</Card.Title>
				<Row className="mt-3">
					{!employmentHistory.length ? (
						<Col>
							<EmptyAdd description="Add employment history to showcase your past work to clients" btnName="Add employment" />
						</Col>
					) : (
						<>
							{employmentHistory.map((empHistory) => {
								return <Employment key={empHistory.id} empHistory={empHistory} />;
							})}
						</>
					)}
				</Row>
			</Card>
		</Col>
	);
};

export default EmploymentHistory;
