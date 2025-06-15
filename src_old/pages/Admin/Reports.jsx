import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import TableReports from "components/Admin/Tables/TableReports";

const statistics = [
	{ title: "Total Earning", value: 0.0, icon: "fas fa-dollar-sign", bgColor: "primary" },
	{ title: "This Week Earning", value: 0.0, icon: "fas fa-dollar-sign", bgColor: "secondary" },
	{ title: "This Month Earning", value: 0.0, icon: "fas fa-dollar-sign", bgColor: "info" },
	{ title: "This Year Earning", value: 0.0, icon: "fas fa-dollar-sign", bgColor: "info" },
	{ title: "Total Sales", value: 0, icon: "fas fa-chart-line", bgColor: "primary" },
	{ title: "Active Orders", value: 0, icon: "fas fa-circle", bgColor: "success" },
	{ title: "Expired Orders", value: 0, icon: "fas fa-circle", bgColor: "danger" },
	{ title: "Canceled Orders", value: 0, icon: "fas fa-circle", bgColor: "danger" },
	{ title: "Total Users", value: 3, icon: "fas fa-users", bgColor: "info" },
	{ title: "Total Tax", value: 0.0, icon: "fas fa-funnel-dollar", bgColor: "warning" },
];

const Reports = () => {
	// Rendered content
	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Report</h1>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">Report</div>
					</div>
				</div>
			</section>
			<Row className="mb-3 g-3">
				{statistics.map((stats) => {
					const { title, value, icon, bgColor } = stats;
					return (
						<Col xs={12} sm={6} lg={3} key={title}>
							<div className="card card-statistic-1">
								<div className={`card-icon bg-${bgColor}`}>
									<i className={icon}></i>
								</div>
								<div className="card-wrap">
									<div className="card-header">
										<h4>{title}</h4>
									</div>
									<div className="card-body">{value}</div>
								</div>
							</div>
						</Col>
					);
				})}
			</Row>
			<Row>
				<Col xs={12}>
					<div className="card">
						<div className="card-header">
							<h4>All Reports</h4>
						</div>
						<div className="card-body pt-0 d-grid">
							<TableReports />
						</div>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default Reports;
