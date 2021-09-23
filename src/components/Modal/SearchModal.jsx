import { Button, Dialog, DialogActions, DialogContent, Fab, makeStyles, Zoom } from "@material-ui/core";
import { globalCss } from "MaterialTheme";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";

// Fab styles
const useStyles = makeStyles({
	root: {
		borderRadius: "0.5rem",
	},
	sizeSmall: {
		width: "auto",
		height: "auto",
		minWidth: "3rem",
	},
	label: {
		fontSize: globalCss.fontSize,
	},
});

const SearchModal = ({ open, onClose, onClick }) => {
	// material fab css
	const classes = useStyles();

	// transition time
	const duration = 300;

	return (
		<Dialog
			open={open}
			onClose={onClose}
			aria-labelledby="form-dialog-title"
			transitionDuration={duration}
			className="rounded-0 z-index-2100"
			PaperProps={{ className: "m-3 w-100 bg-transparent shadow-none", children: <h1>Hello</h1> }}
		>
			<div className="bg-white shadow rounded-3">
				<DialogContent className="p-3">
					<Form.Group as={Row} className="g-3">
						<Col>
							<Form.Control type="search" placeholder="Search anything" />
						</Col>

						<Col xs="auto">
							<Button variant="contained" color="secondary" className="h-100" disableElevation>
								<i className="fas fa-search"></i>
							</Button>
						</Col>
					</Form.Group>
				</DialogContent>
			</div>

			<DialogActions className="p-3 justify-content-center">
				<Zoom in={true} timeout={duration}>
					<Fab aria-label="close search" size="small" color="secondary" onClick={onClick} classes={{ root: classes.root, sizeSmall: classes.sizeSmall, label: classes.label }}>
						<i className="fas fa-times p-3"></i>
					</Fab>
				</Zoom>
			</DialogActions>
		</Dialog>
	);
};

export default SearchModal;
