import React from "react";
import { TableContainer, TableHead, TableBody, Chip, TableRow } from "@material-ui/core";
import { Table, StripedTableRow, BorderlessTableCell } from "components/Table";

function createData(orderId, payId, plan, method, amount, status, payStatus, orderedAt, willExpire) {
	return { orderId, payId, plan, method, amount, status, payStatus, orderedAt, willExpire };
}

// data
const rows = [createData("0012", "0013", "Basic", "Method", "19.99", "status", "Pay Status", "1/1/2021", "1/1/2021")];

// header cells
const headCells = [
	{ id: "orderId", label: "Order No" },
	{ id: "payId", label: "Payment ID" },
	{ id: "plan", label: "Plan" },
	{ id: "method", label: "Method" },
	{ id: "amount", label: "Amount" },
	{ id: "status", label: "Status" },
	{ id: "payStatus", label: "Payment Status" },
	{ id: "orderedAt", label: "Ordered At" },
	{ id: "willExpire", label: "Will Expire" },
];

const TblTransactionHis = (props) => {
	return (
		<TableContainer>
			<Table aria-label="Plans Table">
				{/* Table header */}
				<TableHead>
					<TableRow className="bg-primary-light">
						{headCells.map((headCell) => (
							<BorderlessTableCell key={headCell.id} className="fw-bold text-secondary">
								{headCell.label}
							</BorderlessTableCell>
						))}
					</TableRow>
				</TableHead>
				{/* table body */}
				<TableBody>
					{rows.map((row) => {
						const { orderId, payId, plan, method, amount, status, payStatus, orderedAt, willExpire } = row;
						return (
							<StripedTableRow key={orderId}>
								<BorderlessTableCell>{orderId}</BorderlessTableCell>
								<BorderlessTableCell>{payId}</BorderlessTableCell>
								<BorderlessTableCell>{plan}</BorderlessTableCell>
								<BorderlessTableCell>{method}</BorderlessTableCell>
								<BorderlessTableCell>$ {amount}</BorderlessTableCell>
								<BorderlessTableCell>
									<Chip label={status} className="rounded-pill p-1 text-capitalize" size="small" color="primary" />
								</BorderlessTableCell>
								<BorderlessTableCell>{payStatus}</BorderlessTableCell>
								<BorderlessTableCell>{orderedAt}</BorderlessTableCell>
								<BorderlessTableCell>{willExpire}</BorderlessTableCell>
							</StripedTableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TblTransactionHis;
