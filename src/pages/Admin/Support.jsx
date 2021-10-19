import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Support = () => {
	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Support Tickets</h1>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">Support</div>
					</div>
				</div>
			</section>
			<Row>
				<Col xs={12}>
					<div className="card">
						<div className="card-header">
							<h4>No support ticket found!</h4>
						</div>
						{/* <div className="card-body pt-0 d-grid"></div> */}
					</div>
				</Col>
			</Row>
		</>
	);
};

export default Support;
