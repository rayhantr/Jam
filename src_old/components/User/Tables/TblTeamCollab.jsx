import React, { useState } from "react";
import { Button, Chip, makeStyles, TableBody, TableContainer, TableHead, TablePagination } from "@material-ui/core";
import { Table, StripedTableRow, BorderlessTableCell } from "components/Table";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";

function createData(id, name, email, hourlyRate, status) {
	return { id, email, name, hourlyRate, status };
}

// rows
const rows = [
	createData(1, "Name1", "useremail@gmail.com", "20", "status"),
	createData(2, "Name2", "useremail@gmail.com", "50", "status"),
	createData(3, "Name3", "useremail@gmail.com", "50", "status"),
	createData(4, "Name4", "useremail@gmail.com", "50", "status"),
	createData(5, "Name5", "useremail@gmail.com", "50", "status"),
	createData(6, "Name6", "useremail@gmail.com", "50", "status"),
	createData(7, "Name7", "useremail@gmail.com", "50", "status"),
];

// header cells
const headCells = [
	{ id: "id", label: "ID" },
	{ id: "name", label: "Creator Name" },
	{ id: "email", label: "Creator Email" },
	{ id: "hourlyRate", label: "Hourly Rate" },
	{ id: "status", label: "Status" },
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
export default function TblTeamCollab(props) {
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
			<div className="card">
				<div className="card-body d-grid">
					{/* show search and add button */}
					<Row className="g-3 mb-3 justify-content-between">
						<Col sm={8} md={6} xl={5} xxl={4}>
							<InputGroup>
								<FormControl type="text" placeholder="Search" className="px-3" aria-label="Search" aria-describedby="search-orders" />
								<Form.Select aria-label="Search Filter Option" className="p-input px-3">
									<option value="name">Search By Name</option>
									<option value="email">Search By Email</option>
								</Form.Select>
								<Button variant="contained" color="primary" className="px-3" aria-label="search" disableElevation>
									<i className="fas fa-search fa-fr"></i>
								</Button>
							</InputGroup>
						</Col>
						<Col sm={4} md={3} xl={2} className="text-end">
							<Button variant="outlined" color="primary" className="p-input bg-primary text-white w-100" disableElevation>
								Add Members
							</Button>
						</Col>
					</Row>
					{/* show main table */}
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
									const { id, email, name, hourlyRate, status } = row;

									return (
										<StripedTableRow key={id}>
											<BorderlessTableCell component="th" scope="row">
												{id}
											</BorderlessTableCell>

											<BorderlessTableCell>{name}</BorderlessTableCell>
											<BorderlessTableCell>{email}</BorderlessTableCell>
											<BorderlessTableCell>$ {hourlyRate}</BorderlessTableCell>
											<BorderlessTableCell>
												<Chip label={status} className="rounded-pill p-1 text-capitalize" size="small" color="primary" />
											</BorderlessTableCell>
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
