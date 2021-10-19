import React from "react";
import { TableContainer, TableHead, TableBody, Button } from "@material-ui/core";
import { Table, StripedTableRow, BorderlessTableCell } from "components/Table";

function createData(name, logo, lastUpdate) {
	return { name, logo, lastUpdate };
}

// data
const rows = [
	createData("toyyibPay", "toyyibPay", "1/1/2021"),
	createData("Mollie", "mollie", "1/1/2021"),
	createData("Paystack", "paystack", "1/1/2021"),
	createData("Free", null, "1/1/2021"),
	createData("Flutterwave", "flutterwave", "1/1/2021"),
	createData("Bank Transfer", null, "1/1/2021"),
	createData("PayPal", "payPal", "1/1/2021"),
	createData("Stripe", "stripe", "1/1/2021"),
	createData("Razorpay", "razorpay", "1/1/2021"),
	createData("Instamojo", "instamojo", "1/1/2021"),
];

// header cells
const headCells = [
	{ id: "name", label: "Name" },
	{ id: "logo", label: "Logo" },
	{ id: "lastUpdate", label: "Last Update" },
	{ id: "action", label: "Action" },
];

const TablePaymentGateway = (props) => {
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
						const { name, logo, lastUpdate } = row;
						return (
							<StripedTableRow key={name}>
								<BorderlessTableCell>{name}</BorderlessTableCell>
								<BorderlessTableCell>{logo && <img src={`/img/logo/${logo}.png`} style={{ width: "100px", height: "34px" }} alt={name} />}</BorderlessTableCell>
								<BorderlessTableCell>{lastUpdate}</BorderlessTableCell>
								<BorderlessTableCell>
									{/* edit button */}
									<Button onClick={props.onClick} endIcon={<i className="fas fa-pen fa-fr"></i>} className="px-3 btn-primary-light" aria-label="edit">
										Edit
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

export default TablePaymentGateway;
