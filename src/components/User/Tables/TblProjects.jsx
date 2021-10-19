import React, { useState } from "react";
import { Button, Chip, makeStyles, TableBody, TableContainer, TableHead, TablePagination } from "@material-ui/core";
import { Table, StripedTableRow, BorderlessTableCell } from "components/Table";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";

function createData(sl, name, progress, description, details, status, members) {
	return { sl, name, progress, description, details, status, members };
}

// rows
const rows = [
	createData(1, "Name1", "20%", "Description", "Details", "pending", "Members"),
	createData(2, "Name2", "50%", "Description", "Details", "completed", "Members"),
	createData(3, "Name3", "50%", "Description", "Details", "pending", "Members"),
	createData(4, "Name4", "50%", "Description", "Details", "pending", "Members"),
	createData(5, "Name5", "50%", "Description", "Details", "pending", "Members"),
	createData(6, "Name6", "50%", "Description", "Details", "pending", "Members"),
	createData(7, "Name7", "50%", "Description", "Details", "pending", "Members"),
	createData(8, "Name8", "50%", "Description", "Details", "pending", "Members"),
	createData(9, "Name9", "50%", "Description", "Details", "pending", "Members"),
	createData(10, "Name10", "60%", "Description", "Details", "completed", "Members"),
	createData(11, "Name11", "60%", "Description", "Details", "completed", "Members"),
	createData(12, "Name12", "60%", "Description", "Details", "pending", "Members"),
	createData(13, "Name13", "60%", "Description", "Details", "completed", "Members"),
];

// header cells
const headCells = [
	{ id: "sl", label: "SL." },
	{ id: "name", label: "Name" },
	{ id: "progress", label: "Progress" },
	{ id: "description", label: "Description" },
	{ id: "details", label: "Details" },
	{ id: "status", label: "Status" },
	{ id: "members", label: "Members" },
	{ id: "action", label: "Action" },
];

// styling
const useStyles = makeStyles({
	toolbar: {
		minHeight: "auto",
		padding: 0,
	},
	actions: {
		marginLeft: "1em",
	},
});

// main table
export default function TblProjects(props) {
	const classes = useStyles();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<>
			{/* show toggle button */}
			<div className="card mb-3 p-3">
				<div className="card-body p-0">
					<Row className="g-3 justify-content-end">
						<Col md={6} xl={5} xxl={4}>
							<InputGroup>
								<FormControl type="text" placeholder="Search" className="px-3" aria-label="Search" aria-describedby="search-orders" />
								<Form.Select aria-label="Search Filter Option" className="p-input px-3">
									<option value="name">Search By Name</option>
								</Form.Select>
								<Button variant="contained" color="primary" className="px-3" aria-label="search" disableElevation>
									<i className="fas fa-search fa-fr"></i>
								</Button>
							</InputGroup>
						</Col>
					</Row>
				</div>
			</div>
			{/* show main table */}
			<div className="card">
				<div className="card-body d-grid">
					<TableContainer>
						<Table aria-labelledby="tableTitle" aria-label="enhanced table">
							{/* show table header */}
							<TableHead>
								<StripedTableRow className="bg-primary-light">
									{headCells.map((headCell) => (
										<BorderlessTableCell key={headCell.id} className="fw-bold text-secondary">
											{headCell.label}
										</BorderlessTableCell>
									))}
								</StripedTableRow>
							</TableHead>
							{/* show table body */}
							<TableBody>
								{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
									const { sl, name, progress, description, details, status, members } = row;

									return (
										<StripedTableRow key={sl}>
											<BorderlessTableCell component="th" scope="row">
												{sl}
											</BorderlessTableCell>
											<BorderlessTableCell>{name}</BorderlessTableCell>
											<BorderlessTableCell>{progress}</BorderlessTableCell>
											<BorderlessTableCell>{description}</BorderlessTableCell>
											<BorderlessTableCell>{details}</BorderlessTableCell>
											<BorderlessTableCell>
												<Chip label={status} className="rounded-pill p-1 ls-1 text-capitalize" size="small" color="primary" />
											</BorderlessTableCell>
											<BorderlessTableCell>{members}</BorderlessTableCell>
											<BorderlessTableCell>
												{/* edit button */}
												<Button variant="contained" className="p-2 me-2 text-secondary btn-primary-light" aria-label="edit" disableElevation>
													<i className="fas fa-pen fa-fr"></i>
												</Button>
												{/* delete button */}
												<Button variant="contained" className="p-2 text-danger btn-danger-light" aria-label="delete" disableElevation>
													<i className="fas fa-trash-alt fa-fr"></i>
												</Button>
											</BorderlessTableCell>
										</StripedTableRow>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>
					{/* show table pagination */}
					{rows.length > 5 && (
						<TablePagination
							rowsPerPageOptions={[5, 10, 25]}
							component="div"
							count={rows.length}
							rowsPerPage={rowsPerPage}
							page={page}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
							labelRowsPerPage="Rows"
							backIconButtonProps={{ className: "bg-primary-light p-2 me-2" }}
							nextIconButtonProps={{ className: "bg-primary-light p-2" }}
							SelectProps={{ className: "bg-gray-200 rounded-4 ms-2 me-5", IconComponent: KeyboardArrowDownIcon }}
							className="mt-3"
							classes={{ toolbar: classes.toolbar, actions: classes.actions }}
						/>
					)}
				</div>
			</div>
		</>
	);
}
