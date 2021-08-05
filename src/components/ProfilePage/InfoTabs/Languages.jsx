import React, { useState } from "react";
import { Col, Card } from "react-bootstrap";
import BtnIcon from "../../Buttons/BtnIcon";
import ModalEdit from "../../Modal/ModalEdit";

const Languages = ({ languages, publicView }) => {
	// Modal handling
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Card body className="bs-dim">
				<Card.Title className="row g-0 justify-content-between align-items-center">
					Languages
					{publicView ? null : (
						<Col xs="auto">
							<BtnIcon iconType="add" onClick={handleShow} />
							<BtnIcon iconType="edit" className="ms-2" />
						</Col>
					)}
				</Card.Title>
				{/* Show languages info */}
				{languages.map((language) => {
					return (
						<Card.Text key={language.languageName}>
							<strong>{language.languageName}:</strong> {language.proficiency}
						</Card.Text>
					);
				})}
			</Card>
			{/* Modal */}
			<ModalEdit title="Languages" show={show} onHide={handleClose} />
		</>
	);
};

export default Languages;
