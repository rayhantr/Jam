import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PricingCard from "components/PricingCard";
import TblTransactionHis from "components/User/Tables/TblTransactionHis";

const pricingTable = [
	{
		category: "Basic",
		price: "4.99",
		days: "15",
		benefits: [
			{ name: "100 MB Storage Limit", access: true },
			{ name: "10 Users Limit", access: true },
			{ name: "5 Project Limit", access: true },
			{ name: "10 Group Limit", access: true },
			{ name: "GPS Tracking", access: true },
			{ name: "Screenshot Capture", access: true },
			{ name: "Multi Admin Accessible Project", access: false },
			{ name: "Mail Activity", access: false },
		],
	},
	{
		category: "Standard",
		price: "9.99",
		days: "15",
		benefits: [
			{ name: "200 MB Storage Limit", access: true },
			{ name: "15 Users Limit", access: true },
			{ name: "10 Project Limit", access: true },
			{ name: "15 Group Limit", access: true },
			{ name: "GPS Tracking", access: true },
			{ name: "Screenshot Capture", access: true },
			{ name: "Multi Admin Accessible Project", access: false },
			{ name: "Mail Activity", access: false },
		],
	},
	{
		category: "Pro",
		price: "14.99",
		days: "15",
		benefits: [
			{ name: "300 MB Storage Limit", access: true },
			{ name: "20 Users Limit", access: true },
			{ name: "15 Project Limit", access: true },
			{ name: "20 Group Limit", access: true },
			{ name: "GPS Tracking", access: true },
			{ name: "Screenshot Capture", access: true },
			{ name: "Multi Admin Accessible Project", access: true },
			{ name: "Mail Activity", access: false },
		],
	},
	{
		category: "Enterprise",
		price: "19.99",
		days: "15",
		benefits: [
			{ name: "500 MB Storage Limit", access: true },
			{ name: "30 Users Limit", access: true },
			{ name: "30 Project Limit", access: true },
			{ name: "30 Group Limit", access: true },
			{ name: "GPS Tracking", access: true },
			{ name: "Screenshot Capture", access: true },
			{ name: "Multi Admin Accessible Project", access: true },
			{ name: "Mail Activity", access: true },
		],
	},
];

const Plans = () => {
	// Rendered content
	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Plans</h1>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">Plan</div>
					</div>
				</div>
			</section>
			<Row className="mb-5 g-4">
				{pricingTable.map((items, index) => {
					const { category, price, days, benefits } = items;
					return (
						<Col md={6} xl={3} key={index}>
							<PricingCard category={category} price={price} days={days} benefits={benefits} />
						</Col>
					);
				})}
			</Row>
			<Row>
				<Col xs={12}>
					<div className="card">
						<div className="card-header">
							<h4>Transaction History</h4>
						</div>
						<div className="card-body pt-0 d-grid">
							<TblTransactionHis />
						</div>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default Plans;
