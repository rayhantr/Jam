import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";
import TabPanel from "components/Tabs/TabPanel";
import TblTeamMembers from "components/User/Tables/TblTeamMembers";
import TblTeamGroups from "components/User/Tables/TblTeamGroups";
import TblTeamCollab from "components/User/Tables/TblTeamCollab";

const Team = () => {
	const [value, setValue] = useState(0);

	const tabChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Team</h1>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">Team</div>
					</div>
				</div>
			</section>
			<Row as="section" className="g-3">
				<Col xs={12}>
					<Card>
						<Card.Body className="p-0">
							<Tabs value={value} onChange={tabChange} indicatorColor="primary" textColor="primary" variant="scrollable" scrollButtons="auto" aria-label="Team Tabs">
								<Tab label="Members" />
								<Tab label="Groups" />
								<Tab label="Collaboration" />
							</Tabs>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12}>
					<TabPanel value={value} index={0}>
						<TblTeamMembers />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<TblTeamGroups />
					</TabPanel>
					<TabPanel value={value} index={2}>
						<TblTeamCollab />
					</TabPanel>
				</Col>
			</Row>
		</>
	);
};

export default Team;
