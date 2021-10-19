import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import TblReports from "components/User/Tables/TblReports";

const Reports = () => {
	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Reports</h1>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">Reports</div>
					</div>
				</div>
			</section>
			<Row>
				<Col xs={12}>
					<TblReports />
				</Col>
			</Row>
		</>
	);
};

export default Reports;
