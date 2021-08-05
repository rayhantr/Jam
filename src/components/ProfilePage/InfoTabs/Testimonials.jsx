import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import BtnIcon from "../../Buttons/BtnIcon";
import EmptyAdd from "../EmptyAdd";

const Testimonials = ({ testimonialList, publicView }) => {
	return (
		<Col xs={12} className="mt-3">
			<Card body className="bs-dim">
				<Card.Title className="row g-0 justify-content-between align-items-center">
					Testimonials
					{publicView ? null : <BtnIcon iconType="add" />}
				</Card.Title>
				<Row className="mt-3">
					{!testimonialList.length ? (
						<Col>
							<EmptyAdd description="Showcase your skill with non-Jam client testimonials" btnName="Request a testimonial" />
						</Col>
					) : (
						<>
							{testimonialList.map((testimonial) => {
								return (
									<Col key={testimonial.id} xs={12} className="mb-4">
										{testimonial.title}
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

export default Testimonials;
