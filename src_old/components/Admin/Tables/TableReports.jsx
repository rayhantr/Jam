import React from "react";
import { TableContainer, TableHead, TableBody, Chip, Button } from "@material-ui/core";
import { Table, StripedTableRow, BorderlessTableCell } from "components/Table";

function createData(no, plan, user, amount, tax, paymentId, createdAt, status) {
	return { no, plan, user, amount, tax, paymentId, createdAt, status };
}

// data
const rows = [
	createData(1, "Basic", "user1", 10, 0, 123, "1/1/2021", "Active"),
	createData(2, "Standard", "user2", 20, 0, 124, "1/1/2021", "Active"),
	createData(3, "Pro", "user3", 30, 0, 143, "1/1/2021", "Active"),
	createData(4, "Enterprise", "user4", 40, 0, 523, "1/1/2021", "Active"),
];

// header cells
const headCells = [
	{ id: "no", label: "#" },
	{ id: "plan", label: "Plan" },
	{ id: "user", label: "User" },
	{ id: "amount", label: "Amount" },
	{ id: "tax", label: "Tax" },
	{ id: "paymentId", label: "Payment ID" },
	{ id: "createdAt", label: "Created At" },
	{ id: "status", label: "Status" },
	{ id: "view", label: "View" },
];

const TableReports = () => {
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
					{rows.map((row, index) => {
						const { no, plan, user, amount, tax, paymentId, createdAt, status } = row;
						return (
							<StripedTableRow key={index}>
								<BorderlessTableCell>{no}</BorderlessTableCell>
								<BorderlessTableCell>{plan}</BorderlessTableCell>
								<BorderlessTableCell>{user}</BorderlessTableCell>
								<BorderlessTableCell>{amount}</BorderlessTableCell>
								<BorderlessTableCell>{tax}</BorderlessTableCell>
								<BorderlessTableCell>{paymentId}</BorderlessTableCell>

								<BorderlessTableCell>{createdAt}</BorderlessTableCell>
								<BorderlessTableCell>
									<Chip label={status} className="rounded-pill p-1" size="small" color="primary" />
								</BorderlessTableCell>
								<BorderlessTableCell>
									{/* edit button */}
									<Button variant="contained" color="primary" aria-label="view" disableElevation>
										view
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

export default TableReports;
