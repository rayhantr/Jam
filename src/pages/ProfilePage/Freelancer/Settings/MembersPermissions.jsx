import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Notify } from "components/Alerts/Alert";
import { Button, Checkbox, Collapse, FormControlLabel, Tab, Tabs, useTheme } from "@material-ui/core";
import EmptyAdd from "components/EmptyAdd/EmptyAdd";
import SwipeableViews from "react-swipeable-views";
import TabPanel from "components/Tabs/TabPanel";
import TuneIcon from "@material-ui/icons/Tune";

const MembersPermissions = () => {
	// Tab Control
	const theme = useTheme();
	const [value, setValue] = useState(0);
	const tabChange = (event, newValue) => {
		setValue(newValue);
	};
	const handleChangeIndex = (index) => {
		setValue(index);
	};

	// Collapse control
	const [expanded, setExpanded] = React.useState(false);

	const handleExpand = () => {
		setExpanded(!expanded);
	};

	const closeExpand = () => {
		setExpanded(false);
	};

	return (
		<>
			{/* Title */}
			<h3 className="title-primary d-none d-md-block">Members & Permissions</h3>

			{/* Owner */}
			<Card body className="mb-3">
				<Notify icon={<i className="fas fa-user-tie"></i>}>
					<Notify.Body>
						<h6>
							<strong>Owner</strong>
						</h6>
						<p className="text-primary mb-0">User Name (ME)</p>
					</Notify.Body>
					<Notify.Action>
						<Button variant="contained" color="primary" disableElevation>
							Invite New User
						</Button>
					</Notify.Action>
				</Notify>
			</Card>

			{/* Payment Details */}
			<Card className="mb-3">
				{/* Tab View */}
				<Tabs value={value} onChange={tabChange} indicatorColor="primary" textColor="primary" aria-label="Work History Tabs">
					<Tab label="Active Members" />
					<Tab label="Invitations" />
				</Tabs>
			</Card>

			{/* Tab contents */}
			<Card body>
				{/* Swipe Animation */}
				<SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={handleChangeIndex} slideStyle={{ overflow: "visible" }}>
					<TabPanel value={value} index={0} dir={theme.direction}>
						<Row className="g-3">
							<Col>
								<Form.Group controlId="search">
									<Form.Control type="text" placeholder="Search by name" />
								</Form.Group>
							</Col>
							<Col xs="auto">
								<Button startIcon={<TuneIcon />} onClick={handleExpand} variant="contained" color="primary" disableElevation>
									Filter
								</Button>
							</Col>
						</Row>
						<hr />
						{/* Filter collapse */}
						<Collapse in={expanded} timeout="auto" unmountOnExit>
							<Row className="g-3">
								<Form.Group as={Col} xs={12} md={4}>
									<Form.Label>Show notifications for:</Form.Label>
									<Form.Select aria-label="Notification Select">
										<option>Teams</option>
										<option value="1">One</option>
									</Form.Select>
								</Form.Group>
								<Form.Group as={Col} xs={12} md={4}>
									<Form.Label>Sort By</Form.Label>
									<Form.Select aria-label="Notification Select">
										<option>All Activity</option>
										<option value="1">One</option>
									</Form.Select>
								</Form.Group>
								<Form.Group as={Col} xs={12} md={4}>
									<Form.Label>Contact Person</Form.Label>
									<Form.Select aria-label="Notification Select" disabled>
										<option>All Activity</option>
										<option value="1">One</option>
									</Form.Select>
								</Form.Group>
							</Row>
							<Row className="g-3 mt-4">
								<Form.Group as={Col} xs={6} md={3} className="d-flex flex-column">
									<h6>Admin</h6>
									<FormControlLabel control={<Checkbox color="primary" name="checkedA" />} label="None" />
									<FormControlLabel control={<Checkbox color="primary" name="checkedA" />} label="Financial Only" />
									<FormControlLabel control={<Checkbox color="primary" name="checkedA" />} label="Full" />
								</Form.Group>
								<Form.Group as={Col} xs={6} md={3} className="d-flex flex-column">
									<h6>Hiring</h6>
									<FormControlLabel control={<Checkbox color="primary" name="checkedA" />} label="None" />
									<FormControlLabel control={<Checkbox color="primary" name="checkedA" />} label="Source Talent Only" />
									<FormControlLabel control={<Checkbox color="primary" name="checkedA" />} label="Manager" />
								</Form.Group>
								<Form.Group as={Col} xs={6} md={3} className="d-flex flex-column">
									<h6>Work Diaries</h6>
									<FormControlLabel control={<Checkbox color="primary" name="checkedA" />} label="Individual" />
									<FormControlLabel control={<Checkbox color="primary" name="checkedA" />} label="Team" />
								</Form.Group>
								<Form.Group as={Col} xs={6} md={3} className="d-flex flex-column">
									<h6>Chat</h6>
									<FormControlLabel control={<Checkbox color="primary" name="checkedA" />} label="No One" />
									<FormControlLabel control={<Checkbox color="primary" name="checkedA" />} label="Team" />
									<FormControlLabel control={<Checkbox color="primary" name="checkedA" />} label="Company" />
								</Form.Group>
							</Row>
							{/* Buttons */}
							<Row className="g-3 mt-2 justify-content-center">
								<Col xs="auto">
									<Button variant="contained" color="primary" disableElevation>
										Apply Filters
									</Button>
								</Col>
								<Col xs="auto">
									<Button variant="outlined" color="primary" disableElevation>
										Clear
									</Button>
								</Col>
								<Col xs="auto">
									<Button onClick={closeExpand} variant="contained" color="secondary" disableElevation>
										Close
									</Button>
								</Col>
							</Row>
							<hr />
						</Collapse>
						{/* Empty view */}
						<EmptyAdd
							description={
								<>
									<p>
										<strong>You have no team members yet</strong>
									</p>
									<small>Get started by inviting someone to join you.</small>
								</>
							}
							btnName="Invite a User"
						/>
					</TabPanel>

					<TabPanel value={value} index={1} dir={theme.direction}>
						You have no invitations.
					</TabPanel>
				</SwipeableViews>
			</Card>
		</>
	);
};

export default MembersPermissions;
