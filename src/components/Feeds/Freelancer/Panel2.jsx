import React, { useEffect, useState } from "react";
import { Card, Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { Button, Chip, Tab, Tabs } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import BtnIcon from "../../Buttons/BtnIcon";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import SettingsIcon from "@material-ui/icons/Settings";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { Rating } from "@material-ui/lab";

const FeedCard = () => {
	return (
		<div className="mt-3">
			<Row className="g-0 justify-content-between">
				<Col className="mb-2">
					{/* Title */}
					<h6 className="mb-1">Build responsive Website</h6>
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
			<Chip className="my-1 ms-0 me-2" color="primary" size="small" label="WordPress"></Chip>
			<Chip className="my-1 ms-0 me-2" color="primary" size="small" label="Landing Page"></Chip>
			<Chip className="my-1 ms-0 me-2" color="primary" size="small" label="WordPress Website"></Chip>
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
		</div>
	);
};

const Panel2 = () => {
	// Tab control
	const [value, setValue] = useState(0);
	const tabChange = (event, newValue) => {
		setValue(newValue);
	};

	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		window.onscroll = function () {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
	}, []);

	return (
		<>
			{/* Search option */}
			<Card body className="mb-3">
				<Form>
					<InputGroup>
						<FormControl placeholder="Search for Jobs" aria-label="Search for Jobs" aria-describedby="Search for Jobs" />
						<Button className="" variant="contained" color="secondary" disableElevation>
							<SearchIcon />
						</Button>
					</InputGroup>
				</Form>
			</Card>
			{/* Tab buttons */}
			<Card className={scrolled ? "sticky-top bs-dim" : "sticky-top"}>
				<Card.Body className="p-0">
					<Tabs value={value} onChange={tabChange} indicatorColor="primary" textColor="primary" aria-label="Feed Tabs">
						<Tab label="My Feed" />
						<Tab label="Best Matches" />
						<Tab label="Recommended" />
					</Tabs>
				</Card.Body>
			</Card>
			<div className="shadow"></div>
			{/* Tab panels */}
			<Card className="mt-3">
				<Card.Body className="side-indicator-root">
					<Card.Title className="side-indicator">My Feed</Card.Title>
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
