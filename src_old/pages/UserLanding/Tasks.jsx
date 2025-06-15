import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";
import TabPanel from "components/Tabs/TabPanel";

const Tasks = () => {
	const [value, setValue] = useState(0);

	const tabChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Assigned Tasks</h1>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">Tasks</div>
					</div>
				</div>
			</section>
			<Row as="section" className="g-3">
				<Col xs={12}>
					<Card>
						<Card.Body className="p-0">
							<Tabs value={value} onChange={tabChange} indicatorColor="primary" textColor="primary" variant="scrollable" scrollButtons="auto" aria-label="Work History Tabs">
								<Tab label="Inbox" />
								<Tab label="Today" />
								<Tab label="Upcoming" />
								<Tab label="Overdue" />
								<Tab label="No Overdue" />
								<Tab label="Completed" />
							</Tabs>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12}>
					<Card body>
						<TabPanel value={value} index={0}>
							Tasks
						</TabPanel>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default Tasks;
