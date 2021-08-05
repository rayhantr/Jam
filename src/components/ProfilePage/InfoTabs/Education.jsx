import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import BtnIcon from "../../Buttons/BtnIcon";

const Education = ({ education, publicView }) => {
	return (
		<Card body className="bs-dim">
			<Card.Title className="row g-0 justify-content-between align-items-center">
				Education
				{publicView ? null : <BtnIcon iconType="add" />}
			</Card.Title>
			<Row className="g-0 justify-content-between">
				{/* Show education info */}
				{education.map((institute) => {
					return (
						<Col xs={12} key={institute.instituteName} className="mb-3">
							<Row>
								<Col>
									<h6>
										<strong>{institute.instituteName}</strong>
									</h6>
									<span>{institute.degree}</span> <br />
									<span>{institute.department}</span> <br />
									<span>
										<em>
											{institute.startDate}-{institute.endDate}
										</em>
									</span>
								</Col>
								{publicView ? null : (
									<Col xs="auto">
										<BtnIcon iconType="edit" />
										<BtnIcon iconType="delete" className="ms-2" />
									</Col>
								)}
							</Row>
						</Col>
					);
				})}
			</Row>
		</Card>
	);
};

export default Education;
