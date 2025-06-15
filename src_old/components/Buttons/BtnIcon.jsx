import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Row, Col, Popover, Overlay } from "react-bootstrap";
import { Button, makeStyles } from "@material-ui/core";

// button css
const useStyles = makeStyles({
	root: {
		padding: "0.375rem",
		minWidth: "auto",
		// maxWidth: "1.75rem",
		width: "1.75rem",
		borderRadius: "0.25rem",
	},
});

const errorBtn = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.error.main,
		color: "#fff",
		"&:hover": {
			backgroundColor: theme.palette.error.dark,
		},
	},
}));

// Icon names and their respective components
const ICONSTYLES = [
	{ name: "edit", icon: <i className="fas fa-pen"></i> },
	{ name: "add", icon: <i className="fas fa-plus"></i> },
	{ name: "delete", icon: <i className="fas fa-trash-alt"></i> },
	{ name: "menu-dot", icon: <i className="fas fa-ellipsis-v"></i> },
	{ name: "share", icon: <i className="fas fa-share"></i> },
	{ name: "link", icon: <i className="fas fa-link"></i> },
	{ name: "help", icon: <i className="fas fa-question"></i> },
	{ name: "heart", icon: <i className="far fa-heart"></i> },
	{ name: "unlike", icon: <i className="far fa-thumbs-down"></i> },
	{ name: "close", icon: <i className="fas fa-times"></i> },
];

// Drop menu component
const DropMenu = ({ menu, menuShow, ...others }) => {
	return (
		<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenu" {...others}>
			{menu.map((item) => {
				return (
					<li key={item.index}>
						<a className="dropdown-item" href={item.action}>
							{item.itemName}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

// Delete pop component
const DeletePop = ({ show, target, containerRef, onClick }) => {
	const classes = errorBtn();

	return (
		<Overlay show={show} target={target} placement="bottom-end" container={containerRef}>
			<Popover id="popover-delete">
				<Popover.Body>
					<p>Are you sure you want to delete?</p>
					<Row className="g-3">
						<Col>
							<Button variant="contained" className={`col-12 ${classes.root}`} disableElevation>
								Yes
							</Button>
						</Col>
						<Col>
							<Button variant="contained" color="primary" className="col-12" onClick={onClick} disableElevation>
								No
							</Button>
						</Col>
					</Row>
				</Popover.Body>
			</Popover>
		</Overlay>
	);
};

const BtnIcon = ({ iconType, className, size, color, ...others }) => {
	// Find and set icon name and component
	const iconIndex = ICONSTYLES.findIndex((ico) => ico.name === iconType);
	const iconComponent = iconIndex >= 0 ? ICONSTYLES[iconIndex].icon : ICONSTYLES[0].icon;

	// Popover
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);
	let content;
	// Dropdown
	let dropdownClass;
	let dropdownOthers;

	const menuProps = [
		{ index: 1, action: "#", itemName: "Menu1" },
		{ index: 2, action: "#", itemName: "Menu1" },
		{ index: 3, action: "#", itemName: "Menu1" },
	];

	const closePop = () => {
		setShow(!show);
	};

	const handleClick =
		iconType === "delete"
			? (event) => {
					setShow(!show);
					setTarget(event.currentTarget);
			  }
			: null;

	// conditional content render
	if (iconType === "delete") {
		dropdownClass = dropdownOthers = null;
		content = <DeletePop show={show} target={target} containerRef={ref.current} onClick={closePop} />;
	} else if (iconType === "menu-dot") {
		dropdownClass = "dropdown-toggle";
		dropdownOthers = { "data-bs-toggle": "dropdown", "aria-expanded": "false" };
		content = <DropMenu menu={menuProps} />;
	} else {
		dropdownClass = dropdownOthers = content = null;
	}

	// button css
	const classes = useStyles();
	const errCls = errorBtn();

	// main button render with content
	return (
		<>
			<Button
				variant="contained"
				color={color}
				size={size}
				className={`${className} ${dropdownClass} ${classes.root} ${iconType === "delete" && errCls.root}`}
				onClick={handleClick}
				{...dropdownOthers}
				{...others}
				disableElevation
			>
				{iconComponent}
			</Button>
			{content}
		</>
	);
};

// prop configs
BtnIcon.defaultProps = {
	className: "",
	iconType: "edit",
	color: "secondary",
};

BtnIcon.propTypes = {
	className: PropTypes.string,
	iconType: PropTypes.string,
};

export default BtnIcon;
