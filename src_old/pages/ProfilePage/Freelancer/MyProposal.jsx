import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Chip, Tabs, Tab, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import TabPanel from "components/Tabs/TabPanel";
import BtnIcon from "components/Buttons/BtnIcon";

const TabActive = () => {
	return (
		<Row>
			<Col xs={12} className="mb-3">
				<Card body className="bs-dim">
					<Card.Title>
						Offers
						<Chip className="ms-2" size="small" label={0} />
						<BtnIcon iconType="help" size="small" className="ms-3" />
					</Card.Title>
				</Card>
			</Col>

			<Col xs={12} className="mb-3">
				<Card body className="bs-dim">
					<Card.Title>
						Invitations to Interview
						<Chip className="ms-2" size="small" label={0} />
						<BtnIcon iconType="help" size="small" className="ms-3" />
					</Card.Title>
				</Card>
			</Col>

			<Col xs={12} className="mb-3">
				<Card body className="bs-dim">
					<Card.Title>
						Active Proposals
						<Chip className="ms-2" size="small" label={0} />
						<BtnIcon iconType="help" size="small" className="ms-3" />
					</Card.Title>
				</Card>
			</Col>

			<Col xs={12} className="mb-3">
				<Card body className="bs-dim">
					<Card.Title>
						Submitted Proposals
						<Chip className="ms-2" size="small" label={0} />
						<BtnIcon iconType="help" size="small" className="ms-3" />
					</Card.Title>
				</Card>
			</Col>
		</Row>
	);
};

const TabReferrals = () => {
	return (
		<Row>
			<Col xs={12} className="mb-3">
				<Card body className="bs-dim">
					<Card.Title>
						Referrals
						<Chip className="ms-2" size="small" label={0} />
						<BtnIcon iconType="help" size="small" className="ms-3" />
					</Card.Title>
				</Card>
			</Col>
		</Row>
	);
};

const TabArchived = () => {
	return (
		<Row>
			<Col xs={12} className="mb-3">
				<Card body className="bs-dim">
					<Card.Title>
						Archived Proposals
						<Chip className="ms-2" size="small" label={0} />
						<BtnIcon iconType="help" size="small" className="ms-3" />
					</Card.Title>
				</Card>
			</Col>

			<Col xs={12} className="mb-3">
				<Card body className="bs-dim">
					<Card.Title>
						Archived Interviews
						<Chip className="ms-2" size="small" label={0} />
						<BtnIcon iconType="help" size="small" className="ms-3" />
					</Card.Title>
				</Card>
			</Col>
		</Row>
	);
};

const MyProposal = () => {
	// Tab Function
	const theme = useTheme();
	const [value, setValue] = useState(0);

	const tabChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};
	return (
		// <Container className="my-2 my-md-5">
		<>
			<h5 className="mb-3 title-primary">My Proposals</h5>
			{/* Tab View */}
			<Tabs className="mb-3" value={value} onChange={tabChange} indicatorColor="primary" textColor="primary" aria-label="Work History Tabs">
				<Tab label="Active" />
				<Tab label="Referrals" />
				<Tab label="Archived" />
			</Tabs>
			{/* Swipe Animation */}
			<SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={handleChangeIndex} slideStyle={{ overflow: "visible" }}>
				<TabPanel value={value} index={0} dir={theme.direction}>
					<TabActive />
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					<TabReferrals />
				</TabPanel>
				<TabPanel value={value} index={2} dir={theme.direction}>
					<TabArchived />
				</TabPanel>
			</SwipeableViews>

			<Row className="justify-content-center">
				<Col xs="auto">
					<Button variant="contained" color="secondary" disableElevation>
						Search For Jobs
					</Button>
				</Col>
				<Col xs="auto">
					<Button variant="contained" color="secondary" disableElevation>
						Manage Your Profile
					</Button>
				</Col>
			</Row>
		</>
		// </Container>
	);
};

export default MyProposal;
