import React from "react";
import { TableContainer, TableHead, TableBody, Chip, Button } from "@material-ui/core";
import { Table, StripedTableRow, BorderlessTableCell } from "components/Table";

function createData(title, price, totalOrders, totalAmount, featured, status, lastUpdate) {
	return { title, price, totalOrders, totalAmount, featured, status, lastUpdate };
}

// data
const rows = [
	createData("Basic", "5", 0, 0, "No", "Active", "1/1/2021"),
	createData("Standard", "9.9", 0, 0, "No", "Active", "1/1/2021"),
	createData("Pro", "15.5", 0, 0, "Yes", "Active", "1/1/2021"),
	createData("Enterprise", "19.9", 0, 0, "No", "Active", "1/1/2021"),
];

// header cells
const headCells = [
	{ id: "title", label: "Title" },
	{ id: "price", label: "Price" },
	{ id: "totalOrders", label: "Total Orders" },
	{ id: "totalAmount", label: "Total Sales Of Amount" },
	{ id: "featured", label: "Featured" },
	{ id: "status", label: "Status" },
	{ id: "lastUpdate", label: "Last Update" },
	{ id: "action", label: "Action" },
];

const TablePlans = (props) => {
	return (
		<TableContainer>
			<Table aria-label="Plans Table">
				{/* Table header */}
				<TableHead>
					<StripedTableRow className="bg-primary-light">
						{headCells.map((headCell) => (
							<BorderlessTableCell key={headCell.id} className="fw-bold text-secondary">
								{headCell.label}
							</BorderlessTableCell>
						))}
					</StripedTableRow>
				</TableHead>
				{/* table body */}
				<TableBody>
					{rows.map((row) => {
						const { title, price, totalOrders, totalAmount, featured, status, lastUpdate } = row;
						return (
							<StripedTableRow key={title}>
								<BorderlessTableCell>{title}</BorderlessTableCell>
								<BorderlessTableCell>{price}</BorderlessTableCell>
								<BorderlessTableCell>{totalOrders}</BorderlessTableCell>
								<BorderlessTableCell>{totalAmount}</BorderlessTableCell>
								<BorderlessTableCell>
									<Chip label={featured} className={`rounded-pill p-1 ${featured === "No" ? "bg-danger text-white" : "bg-success text-white"}`} size="small" />
								</BorderlessTableCell>
								<BorderlessTableCell>
									<Chip label={status} className="rounded-pill p-1" size="small" color="primary" />
								</BorderlessTableCell>
								<BorderlessTableCell>{lastUpdate}</BorderlessTableCell>
								<BorderlessTableCell>
									{/* edit button */}
									<Button onClick={props.onClick} variant="contained" className="p-2 me-2 text-secondary btn-primary-light" aria-label="edit" disableElevation>
										<i className="fas fa-pen fa-fr"></i>
									</Button>
									{/* delete button */}
									<Button onClick={props.onDeleteClick} variant="contained" className="p-2 text-danger btn-danger-light" aria-label="delete" disableElevation>
										<i className="fas fa-trash-alt fa-fr"></i>
									</Button>
								</BorderlessTableCell>
							</StripedTableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TablePlans;
