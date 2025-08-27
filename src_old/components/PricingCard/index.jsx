import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";

const useStyles = makeStyles({
	label: {
		justifyContent: "between",
	},
});

const PricingCard = (props) => {
	const classes = useStyles();
	const { category, price, days, benefits } = props;

	return (
		<motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }} className="pricing-card bg-white bs-hover rounded-4 row g-0">
			<div className="pricing-card-header">
				<h1 className="text-secondary text-center my-5 fw-bold">$ {price}</h1>
				<Row className="g-0 align-items-center">
					<Col as="h5" className="text-muted ps-4">
						{days} Days
					</Col>
					<Col xs="auto" as="h5" className="bg-primary text-white text-end py-3 px-5 ps-xl-4 pe-xl-3 text-uppercase ls-sm category">
						{category}
					</Col>
				</Row>
			</div>
			<div className="pricing-card-body p-4">
				{benefits.map((items, index) => {
					const { name, access } = items;
					return (
						<p key={index}>
							<span className={`me-2 ${access ? "text-primary" : "text-danger"}`}>
								<i className={`fas fa-${access ? "check" : "times"}-circle`}></i>
							</span>
							{name}
						</p>
					);
				})}
			</div>

			<div className="pricing-card-footer p-4">
				<Button variant="contained" color="primary" className="py-3 px-4 w-100" classes={{ label: classes.label }} disableElevation>
					<span className="w-100 text-start">Activate</span>
					<i className="fas fa-arrow-right ms-2"></i>
				</Button>
			</div>
		</motion.div>
	);
};

export default PricingCard;
