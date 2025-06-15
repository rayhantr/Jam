import React from "react";
import { TableContainer, TableHead, TableBody, Chip } from "@material-ui/core";
import { Table, StripedTableRow, BorderlessTableCell } from "components/Table";

function createData(id, paymentId, planName, amount, user, status, orderAt, willExpire) {
	return { id, paymentId, planName, amount, user, status, orderAt, willExpire };
}

const rows = [
	createData(1, "00123", "Pro", 159, "user1", "Active", "1/1/2021", "1/1/2022"),
	createData(2, "00124", "Basic", 237, "user2", "On Hold", "1/1/2021", "1/1/2022"),
	createData(3, "00125", "Enterprise", 262, "user3", "Unpaid", "1/1/2021", "1/1/2022"),
	createData(4, "00126", "Enterprise", 305, "user4", "Active", "1/1/2021", "1/1/2022"),
	createData(5, "00127", "Basic", 356, "user5", "Active", "1/1/2021", "1/1/2022"),
];

const headCells = [
	{ id: "id", label: "ID" },
	{ id: "paymentId", label: "Payment ID" },
	{ id: "planName", label: "Plan Name" },
	{ id: "amount", label: "Amount" },
	{ id: "user", label: "User" },
	{ id: "status", label: "Status" },
	{ id: "orderAt", label: "Order At" },
	{ id: "willExpire", label: "Will Expire" },
];

const TableExpOrder = () => {
	return (
		<TableContainer className="pb-3">
			<Table aria-label="simple table">
				{/* table header */}
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
						const { id, paymentId, planName, amount, user, status, orderAt, willExpire } = row;

						return (
							<StripedTableRow key={id}>
								<BorderlessTableCell>{id}</BorderlessTableCell>
								<BorderlessTableCell>{paymentId}</BorderlessTableCell>
								<BorderlessTableCell>{planName}</BorderlessTableCell>
								<BorderlessTableCell>{amount}</BorderlessTableCell>
								<BorderlessTableCell>{user}</BorderlessTableCell>
								<BorderlessTableCell>
									<Chip label={status} className="rounded-pill p-1" size="small" color="primary" />
								</BorderlessTableCell>
								<BorderlessTableCell>{orderAt}</BorderlessTableCell>
								<BorderlessTableCell>{willExpire}</BorderlessTableCell>
							</StripedTableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TableExpOrder;
