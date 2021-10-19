import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ThemeSettings = () => {
	const [inputList, setInputList] = useState([]);

	// handle input change
	const handleInputChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...inputList];
		list[index][name] = value;
		setInputList(list);
	};

	// handle click event of the Remove button
	const handleRemoveClick = (index) => {
		const list = [...inputList];
		list.splice(index, 1);
		setInputList(list);
	};

	// handle click event of the Add button
	const handleAddClick = () => {
		setInputList([...inputList, { icon: "", link: "" }]);
	};

	const socialLinks = (
		<>
			<Row>
				<Col md={3} className="text-md-end py-2">
					Social Link
				</Col>
				<Col md={8}>
					<Row className="d-none d-sm-flex mb-3 g-sm-3">
						{inputList.length !== 0 && (
							<>
								<Col sm={5} className="py-2 text-gray-light">
									Iconify Icon
								</Col>
								<Col sm={5} className="py-2 text-gray-light">
									Link
								</Col>
							</>
						)}
						<Col sm={2}>
							{/* Add button */}
							<Button onClick={handleAddClick} variant="contained" className="px-2 w-100 h-100 bg-primary-light text-secondary" disableElevation>
								Add<i className="fas fa-plus ms-2"></i>
							</Button>
						</Col>
					</Row>
					{inputList.map((item, index) => {
						const { icon, link } = item;
						return (
							<Row className="g-sm-3 mb-3" key={index}>
								<Col xs={12} sm={5}>
									<Form.Group as={Row} className="mb-3 mb-sm-0">
										<Form.Label column xs={4} className="text-md-end py-2 text-gray-light d-sm-none">
											Iconify Icon
										</Form.Label>
										<Col xs={8} sm={12}>
											<Form.Control type="text" placeholder="Icon" name="icon" value={icon} onChange={(e) => handleInputChange(e, index)} className="py-2 px-3" />
										</Col>
									</Form.Group>
								</Col>
								<Col xs={12} sm={5}>
									<Form.Group as={Row} className="mb-3 mb-sm-0">
										<Form.Label column xs={4} className="text-md-end py-2 text-gray-light d-sm-none">
											Link
										</Form.Label>
										<Col xs={8} sm={12}>
											<Form.Control type="text" placeholder="Link" name="link" value={link} onChange={(e) => handleInputChange(e, index)} className="py-2 px-3" />
										</Col>
									</Form.Group>
								</Col>
								<Col sm={2}>
									{/* Remove button */}
									<Button onClick={() => handleRemoveClick(index)} variant="contained" className="h-100 w-100 text-danger btn-danger-light" disableElevation>
										<span className="invisible">-</span>
										<i className="fas fa-minus fa-fr"></i>
										<span className="invisible">-</span>
									</Button>
								</Col>
							</Row>
						);
					})}
				</Col>
			</Row>
			<Row className="mb-3 d-block d-sm-none">
				<Col xs={12}>
					{/* Add button */}
					<Button onClick={handleAddClick} variant="contained" className="px-2 w-100 h-100 bg-primary-light text-secondary" disableElevation>
						Add<i className="fas fa-plus ms-2"></i>
					</Button>
				</Col>
			</Row>
		</>
	);

	// modal field forms
	const renderFormFields = (
		<Form>
			<Form.Group as={Row} className="mb-3" controlId="logo">
				<Form.Label column md={3} className="text-md-end">
					Logo
				</Form.Label>
				<Col md={8}>
					<Form.Control type="file" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="favicon">
				<Form.Label column md={3} className="text-md-end">
					Favicon
				</Form.Label>
				<Col md={8}>
					<Form.Control type="file" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="menuTopLeftButtonText">
				<Form.Label column md={3} className="text-md-end">
					Menu Top Left Button Text
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Menu Top Left Button Text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="menuTopLeftButtonLink">
				<Form.Label column md={3} className="text-md-end">
					Menu Top Left Button Link
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="/example" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="menuTopRightButtonText">
				<Form.Label column md={3} className="text-md-end">
					Menu Top Right Button Text
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Menu Top Right Button Text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="menuTopLeftButtonLink">
				<Form.Label column md={3} className="text-md-end">
					Menu Top Right Button Link
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="/example" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="footerDescription">
				<Form.Label column md={3} className="text-md-end">
					Footer Description
				</Form.Label>
				<Col md={8}>
					<Form.Control as="textarea" rows={5} placeholder="Footer Description" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="address">
				<Form.Label column md={3} className="text-md-end">
					Address
				</Form.Label>
				<Col md={8}>
					<Form.Control as="textarea" rows={3} placeholder="Address" className="py-2 px-3" />
				</Col>
			</Form.Group>
			{socialLinks}
			{/* update button */}
			<Row>
				<Col xs={12} md={{ span: 9, offset: 3 }}>
					<Button variant="contained" color="primary" disableElevation>
						Update
					</Button>
				</Col>
			</Row>
		</Form>
	);

	// Rendered content
	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Theme Settings</h1>

					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">Theme</div>
					</div>
				</div>
			</section>
			<Row>
				<Col xs={12}>
					<div className="card">
						<div className="card-header">
							<h4>Site Settings</h4>
						</div>
						<div className="card-body pt-0">{renderFormFields}</div>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default ThemeSettings;
