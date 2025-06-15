import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Chip, LinearProgress } from "@material-ui/core";
import InfoBlock from "components/Alerts/InfoBlock";
import TblRunningProjects from "components/User/Tables/TblRunningProjects";

function LinearProgressWithLabel(props) {
	const { value, ...other } = props;
	// change MIN / MAX value to set the minimum & maximum range of the progress bar
	const MIN = 0;
	const MAX = 1000;
	const normalize = (value) => ((value - MIN) * 100) / (MAX - MIN);

	return (
		<>
			<h6 className="mt-2 text-secondary">{`${value + "/" + MAX} MB`}</h6>
			<LinearProgress variant="determinate" value={normalize(value)} {...other} />
		</>
	);
}

const statistics = [
	{ title: "Total Tasks", value: 0.0, icon: "fas fa-tasks", bgColor: "info" },
	{ title: "Pending Tasks", value: 0.0, icon: "fas fa-tasks", bgColor: "warning" },
	{ title: "Completed Tasks", value: 0.0, icon: "fas fa-tasks", bgColor: "success" },
	{ title: "Total Hours", value: "00:00:00", icon: "fas fa-clock", bgColor: "info" },
	{ title: "Total Earn", value: 0, icon: "fas fa-dollar-sign", bgColor: "info" },
	{ title: "Running Projects", value: 0, icon: "fas fa-project-diagram", bgColor: "primary" },
	{ title: "Completed Projects", value: 0, icon: "fas fa-project-diagram", bgColor: "success" },
	{ title: "Storage Used", value: <LinearProgressWithLabel value={900} />, icon: "fas fa-hdd", bgColor: "warning" },
];

const Dashboard = () => {
	// Rendered content
	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Dashboard</h1>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">User</Link>
						</div>
						<div className="breadcrumb-item">Dashboard</div>
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
			<Row className="mb-3 g-3">
				<Col lg={8} sm={12}>
					<div className="card">
						<div className="card-header">
							<h4>Last 7 days workload</h4>
						</div>
						<div className="card-body">
							<canvas id="myChart" height="158"></canvas>
						</div>
					</div>
				</Col>
				<Col lg={4} sm={12}>
					<div className="card">
						<div className="card-body p-3 pb-0">
							<InfoBlock title="User Plan Type" tagType="h6">
								<InfoBlock.Body>
									<h4 className="text-secondary fw-bold">Free</h4>
									Valid till: <time>Unlimited</time>
								</InfoBlock.Body>
							</InfoBlock>
						</div>

						<div className="card-header min-h-auto p-3">
							<h4>User Limit</h4>
							<Chip label="0/0" className="bg-primary-light text-secondary fw-600 ls-sm" />
						</div>
						<hr className="divider m-0" />
						<div className="card-header min-h-auto p-3">
							<h4>Project Limit</h4>
							<Chip label="0/0" className="bg-primary-light text-secondary fw-600 ls-sm" />
						</div>
						<hr className="divider m-0" />
						<div className="card-header min-h-auto p-3">
							<h4>Group Limit</h4>
							<Chip label="0/0" className="bg-primary-light text-secondary fw-600 ls-sm" />
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<div className="card">
						<div className="card-header px-3 px-lg-4">
							<h4>Running Projects</h4>
						</div>
						<div className="card-body pt-0 d-grid">
							<TblRunningProjects />
						</div>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default Dashboard;
