import React, { useState } from "react";
import { Row, Col, Card, Form, Ratio } from "react-bootstrap";
import { Pagination } from "@material-ui/lab";
import BtnIcon from "../../Buttons/BtnIcon";
import EmptyAdd from "../EmptyAdd";
import ModalForm from "../../Modal/ModalForm";

const FormFields = () => {
	return (
		<Row className="align-items-end">
			<Col xs={12} className="mb-3">
				<Form.Group controlId="portfolioImg">
					<Form.Label>Add Image</Form.Label>
					<Form.Control type="text" name="portfolioImg" />
				</Form.Group>
			</Col>
			<Col xs={12}>
				<Form.Group controlId="title">
					<Form.Label>Add Title</Form.Label>
					<Form.Control type="text" name="title" />
				</Form.Group>
			</Col>
		</Row>
	);
};

const Portfolio = ({ portfolioList, publicView }) => {
	// Items to show per page
	const itemsPerPage = 3;
	const [page, setPage] = useState(1);
	const [nooOfPages] = useState(Math.ceil(portfolioList.length / itemsPerPage));

	// Pagination on click handle change
	const handleChange = (event, value) => {
		setPage(value);
	};

	// Modal Control
	const [modalProps, setModalProps] = useState({ open: false, action: "" });

	const handleClose = () => setModalProps({ open: false });
	const addHandleShow = () => {
		setModalProps({ open: true, action: "Add" });
	};
	// const editHandleShow = () => {
	// 	setModalProps({ open: true, action: "Edit" });
	// };

	const PortfolioCard = () => {
		return (
			<>
				{portfolioList.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((portfolio) => {
					return (
						<Col xs={12} sm={6} md={6} lg={4} key={portfolio.id} className="portfolio-card mb-3 mb-lg-0">
							<Card>
								<Ratio aspectRatio="4x3">
									<Card.Img variant="top" src="https://www.kimbino.ng/images/no-img.jpg" />
								</Ratio>
								<Card.Body>
									<Card.Title className="colored">{portfolio.title}</Card.Title>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</>
		);
	};

	return (
		<>
			<Card body className="bs-dim">
				<Card.Title className="row g-0 justify-content-between align-items-center">
					Portfolio ({portfolioList.length}){publicView ? null : <BtnIcon iconType="add" onClick={addHandleShow} />}
				</Card.Title>
				<Row className="mt-3">
					{/* For empty portfolio show empty sign else show the portfolios available */}
					{!portfolioList.length ? (
						<Col>
							<EmptyAdd description="Showcase your work to win more projects" btnName="Add items to impress clients" onClick={addHandleShow} />
						</Col>
					) : (
						<>
							<PortfolioCard />
							<Pagination count={nooOfPages} page={page} onChange={handleChange} defaultPage={1} shape="rounded" color="secondary" className="d-flex justify-content-center mt-lg-3" />
						</>
					)}
				</Row>
			</Card>
			{/* Modal */}
			<ModalForm show={modalProps.open} onHide={handleClose} action={modalProps.action} title="Portfolio">
				<FormFields />
			</ModalForm>
		</>
	);
};

export default Portfolio;
