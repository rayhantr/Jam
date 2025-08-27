import React from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import TableExpOrder from "components/Admin/Tables/TableExpOrder";

const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Dashboard = () => {
	return (
		<>
			<Row className="g-4">
				<Col lg={4} md={4} sm={12}>
					<div className="card card-statistic-2">
						<div className="card-stats mt-2">
							<div className="card-stats-title">
								Order Statistics -
								<Dropdown className="d-inline ms-2">
									<Dropdown.Toggle as={Link} to="#" className="font-weight-600" id="orders-month">
										August
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Header>Select Month</Dropdown.Header>
										{Months.map((month) => (
											<Dropdown.Item as={Link} to="#" key={month} className="text-gray-light">
												{month}
											</Dropdown.Item>
										))}
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<div className="card-stats-items">
								<div className="card-stats-item">
									<div className="card-stats-item-count text-secondary">24</div>
									<div className="card-stats-item-label">Pending</div>
								</div>
								<div className="card-stats-item">
									<div className="card-stats-item-count text-secondary">12</div>
									<div className="card-stats-item-label">Shipping</div>
								</div>
								<div className="card-stats-item">
									<div className="card-stats-item-count text-secondary">23</div>
									<div className="card-stats-item-label">Completed</div>
								</div>
							</div>
						</div>
						<div className="card-icon shadow-primary bg-primary">
							<i className="fas fa-archive"></i>
						</div>
						<div className="card-wrap">
							<div className="card-header">
								<h4>Total Orders</h4>
							</div>
							<div className="card-body text-secondary">59</div>
						</div>
					</div>
				</Col>

				<Col lg={4} md={4} sm={12}>
					<div className="card card-statistic-2">
						<div className="card-chart">{/* <canvas id="balance-chart" height="80"></canvas> */}</div>
						<div className="card-icon shadow-primary bg-primary">
							<i className="fas fa-dollar-sign"></i>
						</div>
						<div className="card-wrap">
							<div className="card-header">
								<h4>Balance - 2021</h4>
							</div>
							<div className="card-body text-secondary">$187,13</div>
						</div>
					</div>
				</Col>

				<Col lg={4} md={4} sm={12}>
					<div className="card card-statistic-2">
						<div className="card-chart">{/* <canvas id="sales-chart" height="80"></canvas> */}</div>
						<div className="card-icon shadow-primary bg-primary">
							<i className="fas fa-shopping-bag"></i>
						</div>
						<div className="card-wrap">
							<div className="card-header">
								<h4>Sales - 2021</h4>
							</div>
							<div className="card-body text-secondary">4,732</div>
						</div>
					</div>
				</Col>
				<Col lg={8} sm={12}>
					<div className="card">
						<div className="card-header">
							<h4>Earnings Performance</h4>
						</div>
						<div className="card-body">
							<canvas id="myChart" height="158"></canvas>
						</div>
					</div>
				</Col>
				<Col lg={4} sm={12}>
					<div className="card">
						<div className="card-header">
							<h4>Recent Orders</h4>
						</div>
						<div className="card-body" id="top-5-scroll"></div>
					</div>
				</Col>
				<Col xs={12}>
					<div className="card">
						<div className="card-header">
							<h4>Expired Orders</h4>
						</div>
						<div className="card-body pt-0 d-grid">
							<TableExpOrder />
						</div>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default Dashboard;
