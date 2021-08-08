import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Chip, Tabs, Tab } from "@material-ui/core";
import { Rating, Pagination } from "@material-ui/lab";
import { useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import TabPanel from "../../Tabs/TabPanel";

const JobCard = ({ title, date, rating, comment, fee, feeType }) => {
	return (
		<div className="job-card ps-3 mb-3">
			<h6 className="job-title">{title}</h6>
			<Row className="align-items-center">
				<Rating className="col-auto pe-0" name="job-rating" defaultValue={rating} precision={0.1} readOnly />
				<Col xs="auto">{rating}</Col>
				<Col as="small">{date}</Col>
			</Row>
			<Row>
				<div className="comment mt-2">
					<em>{comment}</em>
				</div>
			</Row>

			<div className="price mt-2 d-flex align-items-center">
				<span>${fee}</span>
				<Chip className="ms-2" size="small" label={feeType} />
			</div>
		</div>
	);
};

const WorkHistory = ({ completedJobList, inProgressJobList }) => {
	// How many items per page should show
	const itemsPerPage = 5;
	const [compJobPage, setCompJobPage] = useState(1);
	const [ipJobPage, setIpJobPage] = useState(1);
	const [compJobNoOfPages] = useState(Math.ceil(completedJobList.length / itemsPerPage));
	const [ipJobNoOfPages] = useState(Math.ceil(inProgressJobList.length / itemsPerPage));
	// Tab Function
	const theme = useTheme();
	const [value, setValue] = useState(0);

	const compJobHandleChange = (event, value) => {
		setCompJobPage(value);
	};

	const ipJobHandleChange = (event, value) => {
		setIpJobPage(value);
	};

	const tabChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	// Completed jobs with detailed list
	const CompletedJobs = () => {
		return (
			<>
				{completedJobList.slice((compJobPage - 1) * itemsPerPage, compJobPage * itemsPerPage).map((jobItem) => {
					return <JobCard key={jobItem.jobID} title={jobItem.title} date={jobItem.completionDate} rating={jobItem.rating} comment={jobItem.comment} fee={jobItem.fee} feeType={jobItem.feeType} />;
				})}
			</>
		);
	};

	// In Progress jobs with detailed list
	const InProgressJobs = () => {
		return (
			<>
				{inProgressJobList.slice((ipJobPage - 1) * itemsPerPage, ipJobPage * itemsPerPage).map((jobItem) => {
					return (
						<div key={jobItem.jobID} className="mb-3">
							<h6> title: {jobItem.title} </h6>
							<small>date: {jobItem.completionDate}</small>
						</div>
					);
				})}
			</>
		);
	};

	return (
		<Card body className="bs-dim">
			<Card.Title className="row g-0 justify-content-between align-items-center">Work History</Card.Title>
			{/* Tab View */}
			<Tabs value={value} onChange={tabChange} indicatorColor="primary" textColor="primary" aria-label="Work History Tabs">
				<Tab label={`Completed Jobs (${completedJobList.length})`} />
				<Tab label={`In Progress (${inProgressJobList.length})`} />
			</Tabs>
			{/* Swipe Animation */}
			<SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={handleChangeIndex} slideStyle={{ overflow: "visible" }}>
				<TabPanel value={value} index={0} dir={theme.direction}>
					{completedJobList.length !== 0 ? (
						<>
							<CompletedJobs />
							<Pagination count={compJobNoOfPages} page={compJobPage} onChange={compJobHandleChange} defaultPage={1} shape="rounded" color="secondary" className="d-flex justify-content-center mt-3" />
						</>
					) : (
						"You haven't completed any jobs yet."
					)}
				</TabPanel>

				<TabPanel value={value} index={1} dir={theme.direction}>
					{inProgressJobList.length !== 0 ? (
						<>
							<InProgressJobs />
							<Pagination count={ipJobNoOfPages} page={ipJobPage} onChange={ipJobHandleChange} defaultPage={1} shape="rounded" className="d-flex justify-content-center mt-3" />
						</>
					) : (
						"You are not working in any jobs."
					)}
				</TabPanel>
			</SwipeableViews>
		</Card>
	);
};

export default WorkHistory;
