import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { Button, Chip, makeStyles, withStyles, TableBody, TableContainer, TableHead, TablePagination, Checkbox } from "@material-ui/core";
import { Table, StripedTableRow, BorderlessTableCell } from "components/Table";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { ToggleButtonGroup as MuiToggleButtonGroup, ToggleButton as MuiToggleButton } from "@material-ui/lab";

function createData(id, paymentId, planName, amount, user, status, orderAt, willExpire) {
	return { id, paymentId, planName, amount, user, status, orderAt, willExpire };
}

// data
const rows = [
	createData(1, 123, "Basic", 50, "Cupcake", "pending", "01/01/2021", "01/01/2022"),
	createData(2, 123, "Pro", 50, "Donut", "approved", "01/01/2021", "01/01/2022"),
	createData(3, 123, "Basic", 50, "Eclair", "pending", "01/01/2021", "01/01/2022"),
	createData(4, 123, "Standard", 50, "Frozen yoghurt", "pending", "01/01/2021", "01/01/2022"),
	createData(5, 123, "Standard", 50, "Gingerbread", "canceled", "01/01/2021", "01/01/2022"),
	createData(6, 123, "Enterprise", 50, "Honeycomb", "pending", "01/01/2021", "01/01/2022"),
	createData(7, 123, "Pro", 50, "Ice cream sandwich", "pending", "01/01/2021", "01/01/2022"),
	createData(8, 123, "Pro", 50, "Jelly Bean", "canceled", "01/01/2021", "01/01/2022"),
	createData(9, 123, "Basic", 50, "KitKat", "pending", "01/01/2021", "01/01/2022"),
	createData(10, 124, "Basic", 60, "Lollipop", "trashed", "01/01/2021", "01/01/2022"),
	createData(11, 124, "Basic", 60, "Marshmallow", "approved", "01/01/2021", "01/01/2022"),
	createData(12, 124, "Enterprise", 60, "Nougat", "pending", "01/01/2021", "01/01/2022"),
	createData(13, 124, "Pro", 60, "Oreo", "approved", "01/01/2021", "01/01/2022"),
];

// header cells
const headCells = [
	{ id: "id", label: "ID" },
	{ id: "paymentId", label: "Payment ID" },
	{ id: "planName", label: "Plan Name" },
	{ id: "amount", label: "Amount" },
	{ id: "user", label: "User" },
	{ id: "status", label: "Status" },
	{ id: "orderAt", label: "Order At" },
	{ id: "willExpire", label: "Will Expire" },
	{ id: "action", label: "Action" },
];

// table header with checkbox
function EnhancedTableHead(props) {
	const { onSelectAllClick, numSelected, rowCount } = props;

	return (
		<TableHead>
			<StripedTableRow className="bg-primary-light">
				<BorderlessTableCell>
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{ "aria-label": "select all orders" }}
						className="p-0"
					/>
				</BorderlessTableCell>
				{headCells.map((headCell) => (
					<BorderlessTableCell key={headCell.id} className="fw-bold text-secondary">
						{headCell.label}
					</BorderlessTableCell>
				))}
			</StripedTableRow>
		</TableHead>
	);
}

EnhancedTableHead.propTypes = {
	numSelected: PropTypes.number.isRequired,
	onSelectAllClick: PropTypes.func.isRequired,
	rowCount: PropTypes.number.isRequired,
};

// table actions
const EnhancedTableToolbar = (props) => {
	const { numSelected } = props;

	return (
		<Row className={`mb-3 align-items-center ${numSelected > 0 ? "justify-content-between" : "justify-content-end"}`}>
			{numSelected > 0 ? (
				<>
					<Col>
						<h5 className="mb-3 mb-md-0 text-primary">{numSelected} selected</h5>
					</Col>
					<Col md={4}>
						<Form.Select aria-label="Status" className="p-input px-3">
							<option>Action For Selected</option>
							<option value="mtPending">Move to Pending</option>
							<option value="mtCancel">Move to Cancel</option>
							<option value="mtTrash">Move to Trash</option>
						</Form.Select>
					</Col>
				</>
			) : (
				<>
					<Col md={5}>
						<InputGroup>
							<FormControl type="text" placeholder="Search" className="px-3" aria-label="Search" aria-describedby="search-orders" />
							<Form.Select aria-label="Invoice No" className="p-input px-3">
								<option value="invoiceNo">Invoice No</option>
								<option value="userEmail">User Email</option>
								<option value="paymentID">Payment ID</option>
							</Form.Select>
							<Button variant="contained" color="primary" className="px-3" aria-label="search" disableElevation>
								<i className="fas fa-search fa-fr"></i>
							</Button>
						</InputGroup>
					</Col>
				</>
			)}
		</Row>
	);
};

EnhancedTableToolbar.propTypes = {
	numSelected: PropTypes.number.isRequired,
};

// filter function
function filtered(list, filterOption) {
	return list.filter((row) => row.status === filterOption);
}

// Toggle button styling
const ToggleButtonGroup = withStyles((theme) => ({
	grouped: {
		"&:not(:first-child)": {
			margin: 0,
		},
	},
}))(MuiToggleButtonGroup);

const ToggleButton = withStyles((theme) => ({
	root: {
		border: "none",
		fontSize: "1rem",
		fontWeight: 500,
		textTransform: "none",
		color: theme.palette.primary.main,
	},
	selected: {
		backgroundColor: theme.palette.primary.main + "!important",
		color: "white !important",
	},
}))(MuiToggleButton);

// Toggle buttons
function ToggleButtons({ data, statusFilter, handleStatusFilter }) {
	function activeCls(filter) {
		return statusFilter === filter ? "bg-white text-primary" : "bg-primary-light text-secondary";
	}

	const buttons = [
		{ name: "All", chipLabel: data.length, labelActiveCls: activeCls("all") },
		{ name: "Approved", chipLabel: filtered(data, "approved").length, labelActiveCls: activeCls("approved") },
		{ name: "Pending", chipLabel: filtered(data, "pending").length, labelActiveCls: activeCls("pending") },
		{ name: "Canceled", chipLabel: filtered(data, "canceled").length, labelActiveCls: activeCls("canceled") },
		{ name: "Trashed", chipLabel: filtered(data, "trashed").length, labelActiveCls: activeCls("trashed") },
	];

	return (
		<ToggleButtonGroup value={statusFilter} exclusive onChange={handleStatusFilter} aria-label="orders list filter">
			{buttons.map((item) => {
				const { name, chipLabel, labelActiveCls } = item;
				return (
					<ToggleButton key={name} value={name.toLowerCase()} aria-label={name.toLowerCase()} className="rounded-4 px-3 p-input" disableRipple>
						{name}
						<Chip label={chipLabel} className={`rounded-pill p-1 ls-1 ms-3 pe-none fw-600 ${labelActiveCls}`} size="small" />
					</ToggleButton>
				);
			})}
		</ToggleButtonGroup>
	);
}

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
export default function TableOrders() {
	const classes = useStyles();
	const [selected, setSelected] = useState([]);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [statusFilter, setStatusFilter] = useState("all");
	const [data, setData] = useState(rows);

	const handleStatusFilter = (event, newStatusFilter) => {
		setStatusFilter(newStatusFilter);
		setData(newStatusFilter === "all" ? rows : filtered(rows, newStatusFilter));
		setSelected([]);
	};

	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelected = data.map((n) => n.id);
			setSelected(newSelected);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event, name) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
		}

		setSelected(newSelected);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const isSelected = (name) => selected.indexOf(name) !== -1;

	return (
		<>
			{/* show toggle button */}
			<div className="card mb-3 p-3">
				<div className="card-body p-0 overflow-x-auto">
					<ToggleButtons data={rows} statusFilter={statusFilter} handleStatusFilter={handleStatusFilter} />
				</div>
			</div>
			{/* show main table */}
			<div className="card">
				<div className="card-body d-grid">
					{/* show toolbar */}
					<EnhancedTableToolbar numSelected={selected.length} />
					<TableContainer>
						<Table aria-labelledby="tableTitle" aria-label="enhanced table">
							{/* show table header */}
							<EnhancedTableHead numSelected={selected.length} onSelectAllClick={handleSelectAllClick} rowCount={data.length} />
							{/* show table body */}
							<TableBody>
								{data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
									const { id, paymentId, planName, amount, user, status, orderAt, willExpire } = row;
									const isItemSelected = isSelected(id);
									const labelId = `orders-list-${index}`;

									return (
										<StripedTableRow hover onClick={(event) => handleClick(event, id)} role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={id} selected={isItemSelected}>
											<BorderlessTableCell>
												<Checkbox checked={isItemSelected} inputProps={{ "aria-labelledby": labelId }} className="p-0" />
											</BorderlessTableCell>
											<BorderlessTableCell component="th" id={labelId} scope="row">
												{id}
											</BorderlessTableCell>
											<BorderlessTableCell>{paymentId}</BorderlessTableCell>
											<BorderlessTableCell>{planName}</BorderlessTableCell>
											<BorderlessTableCell>{amount}</BorderlessTableCell>
											<BorderlessTableCell>{user}</BorderlessTableCell>
											<BorderlessTableCell>
												<Chip label={status} className="rounded-pill p-1 ls-1 text-capitalize" size="small" color="primary" />
											</BorderlessTableCell>
											<BorderlessTableCell>{orderAt}</BorderlessTableCell>
											<BorderlessTableCell>{willExpire}</BorderlessTableCell>
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
					{data.length > 5 && (
						<TablePagination
							rowsPerPageOptions={[5, 10, 25]}
							component="div"
							count={data.length}
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
