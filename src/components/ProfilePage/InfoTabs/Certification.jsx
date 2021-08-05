import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import BtnIcon from "../../Buttons/BtnIcon";
import EmptyAdd from "../EmptyAdd";

const Certificate = ({ certificates }) => {
	return (
		<Row>
			<Col xs={3} sm={3} lg={2} className="text-center">
				<div className="certificate-icon px-0 px-sm-1 px-md-3">
					<img src="https://image.flaticon.com/icons/png/512/4650/4650045.png" alt="certificate" />
				</div>
			</Col>
			<Col>
				<h6 className="certificate-title">{certificates.title}</h6>
				<small className="certificate-from">{certificates.from}</small>
				<br />
				<small className="certificate-date">Issued - {certificates.issueDate}</small>
				<p className="certificate-details pt-3">{certificates.details}</p>
			</Col>
		</Row>
	);
};

const Certification = ({ certificationList, publicView }) => {
	return (
		<Col xs={12} className="mt-3">
			<Card body className="bs-dim">
				<Card.Title className="row g-0 justify-content-between align-items-center">
					Certification
					{publicView ? null : <BtnIcon iconType="add" />}
				</Card.Title>
				<Row className="mt-3">
					{!certificationList.length ? (
						<Col>
							<EmptyAdd description="Add certificate to highlight your best skills" btnName="Add certification" />
						</Col>
					) : (
						<>
							{certificationList.map((certificates) => {
								return (
									<Col key={certificates.id} xs={12} className="mb-4">
										<Certificate certificates={certificates} />
									</Col>
								);
							})}
						</>
					)}
				</Row>
			</Card>
		</Col>
	);
};

export default Certification;
