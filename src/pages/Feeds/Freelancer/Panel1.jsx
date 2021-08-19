/* eslint-disable jsx-a11y/anchor-is-valid */
import { Avatar, Chip, LinearProgress } from "@material-ui/core";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import BtnIcon from "components/Buttons/BtnIcon";
import { Link } from "react-router-dom";
import ChipGroup from "components/Chip/ChipGroup";

function LinearProgressWithLabel(props) {
	return (
		<Row className="align-items-center g-3">
			<Col>
				<LinearProgress variant="determinate" {...props} />
			</Col>
			<Col xs="auto">
				<Chip size="small" color="primary" label={`${Math.round(props.value)}%`} />
			</Col>
		</Row>
	);
}

const Panel1 = () => {
	const categories = ["Web Development", "Android Development", "UI/UX Design", "WordPress"];

	const chipDelete = () => {
		console.info("Clicked");
	};

	return (
		<>
			<Card className="mb-3">
				<Card.Body>
					<Row className="justify-content-center">
						<Col xs="auto">
							<div className="user-active p-1">
								<Link to="/profile" className="text-center text-primary my-3">
									<Avatar variant="rounded" alt="User Name" src="" className="large"></Avatar>
								</Link>
							</div>
						</Col>
						<Link to="/profile" className="text-center text-primary my-3">
							User name
						</Link>
					</Row>
					<Row className="align-items-center mb-3">
						<Col>
							<h6>Visibility</h6>
							<i className="fas fa-globe-asia"></i>
							<span className="ms-2">Public</span>
						</Col>
						<Col xs="auto">
							<BtnIcon iconType="edit" />
						</Col>
					</Row>
					<Row className="align-items-center mb-3">
						<Col>
							<h6>Hours</h6>
							<i className="far fa-clock"></i>
							<span className="ms-2">More than 30hrs/week</span>
						</Col>
						<Col xs="auto">
							<BtnIcon iconType="edit" />
						</Col>
					</Row>
					<div className="mb-3">
						<h6>Profile Completion</h6>
						<LinearProgressWithLabel value={50} />
						<a className="text-primary" href="#">
							<i className="fas fa-plus-square"></i>
							<span className="ms-2">Add Testimonial +30%</span>
						</a>
					</div>
					<h6>Proposals</h6>
					<a className="text-primary" href="#">
						50 available connects
					</a>
				</Card.Body>
			</Card>
			<Card className="sticky-top-2">
				<Card.Body>
					<Row className="align-items-center">
						<Col as="h5" className="mb-0">
							Category
						</Col>
						<Col xs="auto">
							<BtnIcon iconType="edit" />
						</Col>
					</Row>
					<div className="mt-3">
						<ChipGroup itemList={categories} size="small" onDelete={chipDelete} />
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

export default Panel1;
