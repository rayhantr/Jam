import React, { useState, useRef } from "react";
import { Row, Col, Button, Popover, Overlay } from "react-bootstrap";
import "./button.scss";

// Icon names and their respective components
const ICONSTYLES = [
	{ name: "edit", icon: <i className="fas fa-pen"></i> },
	{ name: "add", icon: <i className="fas fa-plus"></i> },
	{ name: "delete", icon: <i className="fas fa-trash-alt"></i> },
];

const BtnIcon = ({ iconType, className, ...rest }) => {
	// Find and set icon name and component
	const iconIndex = ICONSTYLES.findIndex((ico) => ico.name === iconType);
	const iconStyle = iconIndex >= 1 ? ICONSTYLES[iconIndex].name : ICONSTYLES[0].name;
	const iconComponent = iconIndex >= 1 ? ICONSTYLES[iconIndex].icon : ICONSTYLES[0].icon;

	// Popover
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);

	const handleClick =
		iconStyle === "delete"
			? (event) => {
					setShow(!show);
					setTarget(event.currentTarget);
			  }
			: null;

	const closePop = () => {
		setShow(!show);
	};

	const DeletePop = (
		<Overlay show={show} target={target} placement="bottom-end" container={ref.current}>
			<Popover id="popover-delete">
				<Popover.Body>
					<p>Are you sure you want to delete?</p>
					<Row>
						<Col>
							<Button variant="danger" className="col-12">
								Yes
							</Button>
						</Col>
						<Col>
							<Button variant="primary" className="col-12" onClick={closePop}>
								No
							</Button>
						</Col>
					</Row>
				</Popover.Body>
			</Popover>
		</Overlay>
	);

	return (
		<>
			<Button variant={`icon-${iconStyle}`} className={`btn-icon ${className}`} onClick={handleClick} {...rest}>
				{iconComponent}
			</Button>
			{DeletePop}
		</>
	);
};

export default BtnIcon;
