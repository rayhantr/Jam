import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { Button, Chip, makeStyles, withStyles, TableBody, TableContainer, TableHead, TableRow, TableCell as MuiTableCell, TablePagination, Checkbox, Avatar, Collapse } from "@material-ui/core";
import { Table } from "components/Table";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { ToggleButtonGroup as MuiToggleButtonGroup, ToggleButton as MuiToggleButton } from "@material-ui/lab";

function createData(avatar, name, email, status) {
	return { avatar, name, email, status };
}

// data
const rows = [
	createData("", "User LastName", "user1@gmail.com", "active"),
	createData("", "User2", "user2@gmail.com", "inactive"),
	createData("", "User3", "user3@gmail.com", "active"),
	createData("", "User4", "user4@gmail.com", "active"),
	createData("", "User5", "user5@gmail.com", "trash"),
	createData("", "User6", "user6@gmail.com", "active"),
	createData("", "User7", "user7@gmail.com", "active"),
	createData("", "User8", "user8@gmail.com", "trash"),
	createData("", "User9", "user9@gmail.com", "active"),
	createData("", "User10", "user10@gmail.com", "trash"),
	createData("", "User11", "user11@gmail.com", "inactive"),
	createData("", "User12", "user12@gmail.com", "active"),
	createData("", "User13", "user13@gmail.com", "inactive"),
];

// header cells
const headCells = [
	{ id: "avatar", label: "Avatar" },
	{ id: "name", label: "Name" },
	{ id: "email", label: "Email" },
	{ id: "status", label: "Status" },
	{ id: "action", label: "Action" },
];

// table header with checkbox
function EnhancedTableHead(props) {
	const { onSelectAllClick, numSelected, rowCount } = props;

	return (
		<TableHead>
			<TableRow className="bg-primary-light">
				<BorderlessTableCell>
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{ "aria-label": "select all users" }}
						className="px-0"
					/>
				</BorderlessTableCell>
				{headCells.map((headCell) => (
					<BorderlessTableCell key={headCell.id} className="fw-bold text-secondary">
						{headCell.label}
					</BorderlessTableCell>
				))}
			</TableRow>
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
							<option value="mtActive">Move to Active</option>
							<option value="mtInactive">Move to Inactive</option>
							<option value="mtTrash">Move to Trash</option>
						</Form.Select>
					</Col>
				</>
			) : (
				<>
					<Col md={5}>
						<InputGroup>
							<FormControl type="text" placeholder="Search" className="px-3" aria-label="Search" aria-describedby="search-orders" />
							<Form.Select aria-label="Search Filter Option" className="p-input px-3">
								<option value="username">User Name</option>
								<option value="userEmail">User Email</option>
								<option value="userId">User ID</option>
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
		{ name: "All", value: "all", chipLabel: data.length, labelActiveCls: activeCls("all") },
		{ name: "Active Users", value: "active", chipLabel: filtered(data, "active").length, labelActiveCls: activeCls("active") },
		{ name: "Inactive Users", value: "inactive", chipLabel: filtered(data, "inactive").length, labelActiveCls: activeCls("inactive") },
		{ name: "Trash", value: "trash", chipLabel: filtered(data, "trash").length, labelActiveCls: activeCls("trash") },
	];

	return (
		<ToggleButtonGroup value={statusFilter} exclusive onChange={handleStatusFilter} aria-label="orders list filter">
			{buttons.map((item) => {
				const { name, value, chipLabel, labelActiveCls } = item;
				return (
					<ToggleButton key={name} value={value} aria-label={name.toLowerCase()} className="rounded-4 px-3 p-input" disableRipple>
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

const BorderlessTableCell = withStyles({
	root: {
		fontSize: "1rem",
		padding: "0.6em 1em",
		borderBottom: "none",
	},
})(MuiTableCell);

const CollapsedTableRow = (props) => {
	const { isItemSelected, handleClick, row, labelId, editModal, deleteModal, planModal, index } = props;
	const { avatar, name, email, status } = row;

	const [collapseOpen, setCollapseOpen] = useState(false);

	const actionButtons = [
		{ title: "View", icon: "fas fa-eye", color: "btn-primary-light", onClick: () => console.log("view clicked") },
		{ title: "Edit", icon: "fas fa-pen", color: "btn-primary-light", onClick: editModal },
		{ title: "Edit Plan", icon: "fas fa-edit", color: "btn-primary-light", onClick: planModal },
		{ title: "Login", icon: "fas fa-sign-in-alt", color: "btn-primary-light", onClick: () => console.log("login clicked") },
		{ title: "Delete", icon: "fas fa-trash", color: "btn-danger-light", onClick: deleteModal },
	];

	return (
		<>
			<TableRow role="checkbox" aria-checked={isItemSelected} tabIndex={-1} selected={isItemSelected} className={index % 2 === 1 ? "bg-gray-table" : undefined}>
				<BorderlessTableCell onClick={(event) => handleClick(event, email)}>
					<Checkbox checked={isItemSelected} inputProps={{ "aria-labelledby": labelId }} className="p-0" />
				</BorderlessTableCell>
				<BorderlessTableCell component="th" id={labelId} scope="row">
					<Avatar alt={name} src={avatar}>
						{name.match(/\b(\w)/g).join("")}
					</Avatar>
				</BorderlessTableCell>
				<BorderlessTableCell>{name}</BorderlessTableCell>
				<BorderlessTableCell>{email}</BorderlessTableCell>
				<BorderlessTableCell>
					<Chip label={status} className="rounded-pill p-1 ls-1 text-capitalize" size="small" color="primary" />
				</BorderlessTableCell>
				{/* Action button */}
				<BorderlessTableCell>
					<Button onClick={() => setCollapseOpen(!collapseOpen)} variant="contained" color="primary" className="px-3" aria-label="edit" disableElevation>
						Action
					</Button>
				</BorderlessTableCell>
			</TableRow>
			{/* Action Buttons */}
			<TableRow selected={isItemSelected} className={index % 2 === 1 ? "bg-gray-table" : undefined}>
				<BorderlessTableCell colSpan={6} align="center" className="p-0">
					<Collapse in={collapseOpen} timeout="auto" unmountOnExit>
						{actionButtons.map((btn) => {
							const { title, icon, color, onClick } = btn;

							return (
								<Button key={title} onClick={onClick} endIcon={<i className={`${icon} fa-fw`}></i>} className={`my-3 mx-2 px-3 ${color}`} aria-label={title}>
									{title}
								</Button>
							);
						})}
					</Collapse>
				</BorderlessTableCell>
			</TableRow>
		</>
	);
};

// main table
export default function TableUsers(props) {
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
			const newSelected = data.map((n) => n.email);
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
									const isItemSelected = isSelected(row.email);
									const labelId = `users-list-${index}`;

									return (
										<CollapsedTableRow
											index={index}
											key={row.email}
											isItemSelected={isItemSelected}
											handleClick={handleClick}
											editModal={props.editModal}
											deleteModal={props.deleteModal}
											planModal={props.planModal}
											row={row}
											labelId={labelId}
										/>
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
