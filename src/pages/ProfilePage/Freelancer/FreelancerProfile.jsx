/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Button, LinearProgress } from "@material-ui/core";
// MUI Icon
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import SettingsIcon from "@material-ui/icons/Settings";
import axios from "axios";
import { Link } from "react-router-dom";

import {
	Testimonials,
	WorkHistory,
	Certification,
	EmploymentHistory,
	OtherExp,
	VideoIntro,
	UserInfo,
	ViewProfile,
	AvailableHours,
	Languages,
	Education,
	ProfileTitleView,
	Portfolio,
	Skills,
} from "./InfoTabs";

const FreelancerProfile = () => {
	// Data from API
	const [userInformation, setUserInformation] = useState({
		otherData: [],
		languages: [],
		education: [],
		skills: [],
		completedJobList: [],
		inProgressJobList: [],
		portfolioList: [],
		certificationList: [],
		employmentHistory: [],
		otherExpList: [],
		testimonialList: [],
		isLoading: false,
	});

	// Public View
	const [publicView, setPublicView] = useState(false);

	// Get API
	useEffect(() => {
		const getData = async () => {
			try {
				setUserInformation({ isLoading: true });
				const response = await axios.get("http://localhost:8000/users/1");
				// Set User data from API call
				const userData = response.data;
				// Set user information for each field
				setUserInformation({
					otherData: userData,
					languages: userData.languages,
					education: userData.education,
					skills: userData.skills,
					completedJobList: userData.workHistory.completedJobList,
					inProgressJobList: userData.workHistory.inProgressJobList,
					portfolioList: userData.portfolio,
					certificationList: userData.certification,
					employmentHistory: userData.employmentHistory,
					otherExpList: userData.otherExp,
					testimonialList: userData.testimonials,
					isLoading: false,
				});
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);

	// Toggle between public view and personal view
	const handleViewChange = () => {
		setPublicView(!publicView);
	};

	// Show or hide empty panels with no information available
	const ShowPanel = ({ empty, content, publicView }) => {
		return !(empty && publicView) ? content : null;
	};

	// View changing button
	const ViewChange = ({ onClick, publicView }) => {
		return (
			<Col xs="auto" className="ms-auto px-3 px-md-2">
				<Button component={Link} to="/profile/settings" className="me-3 text-white" variant="contained" color="secondary" startIcon={<SettingsIcon />} disableElevation>
					Settings
				</Button>
				<Button variant="contained" color="secondary" startIcon={publicView ? <VisibilityOffIcon /> : <VisibilityIcon />} disableElevation onClick={onClick}>
					{publicView ? "Close" : "See"} Public View
				</Button>
			</Col>
		);
	};

	// Panel for easy arrangement & grid system
	const Panel1 = () => {
		return (
			<Col xs={12} className="mt-3">
				<UserInfo activeUser={userInformation.otherData} />
			</Col>
		);
	};

	// Panel for easy arrangement & grid system
	const Panel2 = () => {
		return (
			<Col xs={12} md={4} className="mt-3">
				<Col className="mb-3">
					<ViewProfile publicView={publicView} />
				</Col>

				<ShowPanel
					empty={!userInformation.otherData.videoIntro}
					content={
						<Col className="mt-3">
							<VideoIntro videoIntro={userInformation.otherData.videoIntro} publicView={publicView} />
						</Col>
					}
					publicView={publicView}
				/>

				<Col className="mt-3">
					<AvailableHours activeUser={userInformation.otherData} publicView={publicView} />
				</Col>

				<Col className="mt-3">
					<Languages languages={userInformation.languages} publicView={publicView} />
				</Col>

				<ShowPanel
					empty={!userInformation.education.length}
					content={
						<Col className="mt-3">
							<Education education={userInformation.education} publicView={publicView} />
						</Col>
					}
					publicView={publicView}
				/>
			</Col>
		);
	};

	// Panel for easy arrangement & grid system
	const Panel3 = () => {
		return (
			<Col xs={12} md={8} className="mt-3">
				<Col>
					<ProfileTitleView activeUser={userInformation.otherData} publicView={publicView} />
				</Col>

				<ShowPanel
					empty={!userInformation.completedJobList.length && !userInformation.inProgressJobList.length}
					content={
						<Col className="mt-3">
							<WorkHistory completedJobList={userInformation.completedJobList} inProgressJobList={userInformation.inProgressJobList} />
						</Col>
					}
					publicView={publicView}
				/>

				<ShowPanel
					empty={!userInformation.portfolioList.length}
					content={
						<Col className="mt-3">
							<Portfolio portfolioList={userInformation.portfolioList} publicView={publicView} />
						</Col>
					}
					publicView={publicView}
				/>

				<Col className="mt-3">
					<Skills skills={userInformation.skills} publicView={publicView} />
				</Col>
			</Col>
		);
	};

	// Full page view with all contents
	const FullPageView = () => {
		return (
			<>
				<Panel1 />
				<Panel2 />
				<Panel3 />
				<ShowPanel empty={!userInformation.testimonialList.length} content={<Testimonials testimonialList={userInformation.testimonialList} publicView={publicView} />} publicView={publicView} />
				<ShowPanel
					empty={!userInformation.certificationList.length}
					content={<Certification certificationList={userInformation.certificationList} publicView={publicView} />}
					publicView={publicView}
				/>
				<ShowPanel
					empty={!userInformation.employmentHistory.length}
					content={<EmploymentHistory employmentHistory={userInformation.employmentHistory} publicView={publicView} />}
					publicView={publicView}
				/>
				<ShowPanel empty={!userInformation.otherExpList.length} content={<OtherExp otherExpList={userInformation.otherExpList} publicView={publicView} />} publicView={publicView} />
			</>
		);
	};

	return (
		// <Container className="my-3 my-md-5">
		<Row className="gy-3 gx-0 gx-md-3">
			{userInformation.isLoading ? (
				<Col>
					<LinearProgress color="secondary" />
				</Col>
			) : (
				<>
					<ViewChange onClick={handleViewChange} publicView={publicView} />
					<FullPageView />
				</>
			)}
		</Row>
		// </Container>
	);
};

export default FreelancerProfile;
