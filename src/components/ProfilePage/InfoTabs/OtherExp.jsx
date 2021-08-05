import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import BtnIcon from "../../Buttons/BtnIcon";
import EmptyAdd from "../EmptyAdd";

const Experiences = ({ otherExpList }) => {
	return (
		<>
			{!otherExpList.length ? (
				<Col>
					<EmptyAdd description="Add any other experiences that help you stand out" btnName="Add other experiences" />
				</Col>
			) : (
				<>
					{otherExpList.map((otherExp) => {
						return (
							<Col key={otherExp.id} xs={12}>
								<div className="exp-history">
									<div className="exp-details ps-3">
										<h6 className="exp-role">{otherExp.role}</h6>
										<p className="exp-about mt-3">{otherExp.about}</p>
									</div>
								</div>
							</Col>
						);
					})}
				</>
			)}
		</>
	);
};

const OtherExp = ({ otherExpList, publicView }) => {
	return (
		<Col xs={12} className="mt-3">
			<Card body className="bs-dim">
				<Card.Title className="row g-0 justify-content-between align-items-center">
					Other Experiences
					{publicView ? null : <BtnIcon iconType="add" />}
				</Card.Title>
				<Row className="mt-3">
					<Experiences otherExpList={otherExpList} />
				</Row>
			</Card>
		</Col>
	);
};

export default OtherExp;
