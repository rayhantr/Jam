import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import InfoBlock from "components/Alerts/InfoBlock";

const NotificationS = () => {
	return (
		<>
			{/* Title */}
			<h3 className="title-primary d-none d-md-block">Notification Settings</h3>

			{/* Messages */}
			<Card body className="mb-3">
				<Card.Title className="row g-0 justify-content-between align-items-center">Messages</Card.Title>
				<hr />

				{/* Desktop */}
				<InfoBlock title="Desktop" tagType="h6" className="mb-3">
					<InfoBlock.Body>
						<Row className="g-3">
							<Form.Group as={Col} xs={12} md={6}>
								<Form.Label>Show notifications for:</Form.Label>
								<Form.Select aria-label="Notification Select">
									<option>All Activity</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Form.Group>
							<Form.Group as={Col} xs={12} md={6}>
								<Form.Label>Increment message counter for:</Form.Label>
								<Form.Select aria-label="Notification Select">
									<option>All Activity</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Form.Group>
							<Form.Group as={Col}>
								<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="Also play a sound" />
							</Form.Group>
						</Row>
					</InfoBlock.Body>
				</InfoBlock>

				{/* Mobile */}
				<InfoBlock title="Mobile" tagType="h6" className="mb-3">
					<InfoBlock.Body>
						{/* Select */}
						<Row className="g-3">
							<Form.Group as={Col} xs={12} md={6}>
								<Form.Label>Show notifications for:</Form.Label>
								<Form.Select aria-label="Notification Select">
									<option>All Activity</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Form.Group>
							<Form.Group as={Col} xs={12} md={6}>
								<Form.Label>Increment message counter for:</Form.Label>
								<Form.Select aria-label="Notification Select">
									<option>All Activity</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Form.Group>
							<Form.Group as={Col}>
								<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="Also play a sound" />
							</Form.Group>
						</Row>
					</InfoBlock.Body>
				</InfoBlock>

				{/* Email */}
				<InfoBlock title="Email" tagType="h6">
					<InfoBlock.Body>
						{/* Select */}
						<Row className="g-3">
							<Form.Group as={Col} xs={12} md={6}>
								<Form.Label>Send an email with unread activity for:</Form.Label>
								<Form.Select aria-label="Notification Select">
									<option>All Activity</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Form.Group>
							<Form.Group as={Col} xs={12} md={6}>
								<Form.Label>Send frequency:</Form.Label>
								<Form.Select aria-label="Notification Select">
									<option>Every 15 minutes</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Form.Group>
							<Form.Group as={Col}>
								<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="Only send when offline or idle" />
							</Form.Group>
						</Row>
					</InfoBlock.Body>
				</InfoBlock>
			</Card>

			{/* Email updates */}
			<Card body>
				<Card.Title className="row g-0 justify-content-between align-items-center">Email Updates</Card.Title>
				<hr />

				{/* Recruiting */}
				<InfoBlock title="Recruiting" tagType="h6" className="mb-3">
					<InfoBlock.Body>
						{/* Checkboxes */}
						<FormGroup>
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="A job is posted or modified" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="A proposal is received" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="An interview is accepted or offer terms are modified" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="An interview or offer is declined or withdrawn" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="An offer is accepted" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="A job posting will expire soon" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="A job posting expired" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="No interviews have been initiated" />
						</FormGroup>
					</InfoBlock.Body>
				</InfoBlock>

				<InfoBlock title="Freelancer and Agency Proposals" tagType="h6" className="mb-3">
					<InfoBlock.Body>
						{/* Checkboxes */}
						<FormGroup>
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="An interview is initiated" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="An offer or interview is received" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="An offer or interview invitation is withdrawn" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="A proposal is rejected" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="A job I applied to has been cancelled or closed" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="A proposal is withdrawn" />
						</FormGroup>
					</InfoBlock.Body>
				</InfoBlock>

				{/* Contracts */}
				<InfoBlock title="Contracts" tagType="h6" className="mb-3">
					<InfoBlock.Body>
						{/* Checkboxes */}
						<FormGroup>
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="A hire is made or a contract begins" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="Tome logging begins" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="Contract terms are modified" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="A contract ends" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="A timelog is ready for review" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="Feedback changes are made" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="Daily snapshot of time recorded by your freelancers" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="Weekly billing digest" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="OTher contract related messages" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="Payment receipts and other financial related emails" />
						</FormGroup>
					</InfoBlock.Body>
				</InfoBlock>

				{/* Group & Invitations */}
				<InfoBlock title="Group & Invitations" tagType="h6" className="mb-3">
					<InfoBlock.Body>
						{/* Checkboxes */}
						<FormGroup>
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="Group membership events occur" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="Someone forwards me a freelancer's profile" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="Someone sends me an invitation" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="Team access is revoked" />
						</FormGroup>
					</InfoBlock.Body>
				</InfoBlock>

				{/* Membership */}
				<InfoBlock title="Membership" tagType="h6" className="mb-3">
					<InfoBlock.Body>
						{/* Checkboxes */}
						<FormGroup>
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="Subscription related event occur" />
						</FormGroup>
					</InfoBlock.Body>
				</InfoBlock>

				{/* Miscellaneous */}
				<InfoBlock title="Miscellaneous" tagType="h6" className="mb-3">
					<InfoBlock.Body>
						{/* Checkboxes */}
						<FormGroup>
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="JamTalent has a tip to help me start" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="Notify me of JamTalent events happening in my local area" />
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="Notify me of who viewed my job post" />
						</FormGroup>
					</InfoBlock.Body>
				</InfoBlock>

				{/* Project Recommendation For Our Top Talent */}
				<InfoBlock title="Project Recommendation For Our Top Talent" tagType="h6" className="mb-3">
					<InfoBlock.Body>
						{/* Checkboxes */}
						<FormGroup>
							<FormControlLabel control={<Checkbox color="primary" name="checkedA" defaultChecked />} label="Send recommendations if I qualify as top JamTalent talent" />
						</FormGroup>
					</InfoBlock.Body>
				</InfoBlock>

				{/* Communications from JamTalent */}
				<InfoBlock title="Communications from JamTalent" tagType="h6">
					<InfoBlock.Body>
						{/* Checkboxes */}
						<FormGroup>
							<FormControlLabel
								control={<Checkbox color="primary" name="checkedA" defaultChecked />}
								label="Send me genuinely useful emails every now and then to help me get the most out of JamTalent"
							/>
						</FormGroup>
					</InfoBlock.Body>
				</InfoBlock>
			</Card>
		</>
	);
};

export default NotificationS;
