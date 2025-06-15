import React, { useState } from "react";
import { Card, Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { Button, Chip, Tab, Tabs } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import SearchIcon from "@material-ui/icons/Search";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import SettingsIcon from "@material-ui/icons/Settings";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Sticky from "react-stickynode";
import BtnIcon from "components/Buttons/BtnIcon";
import ChipGroup from "components/Chip/ChipGroup";

const FeedCard = () => {
	const tags = ["WordPress", "Landing Page", "WordPress Website"];
	return (
		<>
			<Row className="g-0 justify-content-between">
				<Col className="mb-2">
					{/* Title */}
					<h5 className="mb-1">Build responsive Website</h5>
					{/* Posted Time */}
					<small className="text-gray-light">
						<i className="fas fa-clock"></i>
						<time className="ms-1">2 minutes ago</time>
					</small>
					<small className="text-gray-light ms-3">
						<i className="fas fa-map-marker-alt"></i>
						<span className="ms-1">Bangladesh</span>
					</small>
				</Col>
				<Col xs="auto">
					<BtnIcon iconType="heart" />
					<BtnIcon iconType="unlike" className="ms-2" />
				</Col>
			</Row>
			{/* Offer details */}
			<Chip className="my-1 ms-0 me-2" icon={<LocalOfferIcon />} size="small" label="Fixed Price"></Chip>
			<Chip className="my-1 ms-0 me-2" icon={<SettingsIcon />} size="small" label="Intermediate"></Chip>
			<Chip className="my-1 ms-0 me-2" icon={<AttachMoneyIcon />} size="small" label="Est. Budget: $400"></Chip>
			{/* Description of the work */}
			<p className="my-3">Hello I am looking for a web developer. Please see the attachment below for requirement. We can agree on to the proposal as soon as I determine your skills.</p>
			{/* Tags */}
			<ChipGroup itemList={tags} color="primary" size="small" />
			{/* Proposals submitted */}
			<div className="my-2">
				Proposals: <strong>Less than 5</strong>
			</div>
			<Row className="align-items-center">
				<Col xs="auto">
					<i className="fas fa-check-circle text-primary"></i>
					<span className="ms-1">Payment Verified</span>
				</Col>
				<Rating className="col-auto ps-0" name="payment-rating" size="small" defaultValue={5} precision={0.1} readOnly />
				<Col as="span" xs="auto">
					<strong>$1k Spent</strong>
				</Col>
			</Row>
		</>
	);
};

const Panel2 = () => {
	// Tab control
	const [value, setValue] = useState(0);
	const tabChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			{/* Search option */}
			<Card body className="mb-3">
				<Form>
					<InputGroup>
						<FormControl placeholder="Search for Jobs" aria-label="Search for Jobs" aria-describedby="Search for Jobs" />
						<Button variant="contained" color="secondary" disableElevation>
							<SearchIcon />
						</Button>
					</InputGroup>
				</Form>
			</Card>
			{/* Tab buttons */}
			<Sticky top="#topNav" innerActiveClass="sticky-active" enabled={true} innerZ={1200} bottomBoundary="#main-content">
				<Card>
					<Card.Body className="p-0">
						<Tabs value={value} onChange={tabChange} indicatorColor="primary" textColor="primary" aria-label="Feed Tabs">
							<Tab label="My Feed" />
							<Tab label="Best Matches" />
							<Tab label="Recommended" />
						</Tabs>
					</Card.Body>
				</Card>
			</Sticky>
			{/* Tab panels */}
			<Card className="mt-3">
				<Card.Body className="side-indicator-root">
					<FeedCard />
					<hr />
					<FeedCard />
					<hr />
					<FeedCard />
					<hr />
					<FeedCard />
					<hr />
					<FeedCard />
					<hr />
					<FeedCard />
				</Card.Body>
			</Card>
		</>
	);
};

export default Panel2;
