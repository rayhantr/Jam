import React, { useState } from "react";
import { Button, makeStyles, TableBody, TableContainer, TableHead, TablePagination } from "@material-ui/core";
import { Table, StripedTableRow, BorderlessTableCell } from "components/Table";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";

function createData(sl, name, members) {
	return { sl, name, members };
}

// rows
const rows = [
	createData(1, "Name1", "Members"),
	createData(2, "Name2", "Members"),
	createData(3, "Name3", "Members"),
	createData(4, "Name4", "Members"),
	createData(5, "Name5", "Members"),
	createData(6, "Name6", "Members"),
	createData(7, "Name7", "Members"),
];

// header cells
const headCells = [
	{ id: "sl", label: "Sl." },
	{ id: "name", label: "Group name" },
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
export default function TblTeamGroups(props) {
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
									<option value="name">Group Name</option>
									<option value="email">Member Email</option>
								</Form.Select>
								<Button variant="contained" color="primary" className="px-3" aria-label="search" disableElevation>
									<i className="fas fa-search fa-fr"></i>
								</Button>
							</InputGroup>
						</Col>
						<Col sm={4} md={3} xl={2} className="text-end">
							<Button variant="outlined" color="primary" className="p-input bg-primary text-white w-100" disableElevation>
								Add Group
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
									const { sl, name, members } = row;

									return (
										<StripedTableRow key={sl}>
											<BorderlessTableCell component="th" scope="row">
												{sl}
											</BorderlessTableCell>
											<BorderlessTableCell>{name}</BorderlessTableCell>
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
