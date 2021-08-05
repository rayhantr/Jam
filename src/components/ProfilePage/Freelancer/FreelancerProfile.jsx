/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";

// MUI Icon
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import Testimonials from "../InfoTabs/Testimonials";
import WorkHistory from "../InfoTabs/WorkHistory";
import Certification from "../InfoTabs/Certification";
import EmploymentHistory from "../InfoTabs/EmploymentHistory";
import OtherExp from "../InfoTabs/OtherExp";
import VideoIntro from "../InfoTabs/VideoIntro";

// import freelancerAPI from "../../MockAPI/freelancerAPI";
import axios from "axios";
import UserInfo from "../InfoTabs/UserInfo";
import ViewProfile from "../InfoTabs/ViewProfile";
import AvailableHours from "../InfoTabs/AvailableHours";
import Languages from "../InfoTabs/Languages";
import Education from "../InfoTabs/Education";
import ProfileTitleView from "../InfoTabs/ProfileTitleView";
import Portfolio from "../InfoTabs/Portfolio";
import Skills from "../InfoTabs/Skills";

const FreelancerProfile = () => {
	// Data from API
	const [activeUser, setActiveUser] = useState([]);
	const [languages, setLanguages] = useState([]);
	const [education, setEducation] = useState([]);
	const [skills, setSkills] = useState([]);
	const [completedJobList, setCompletedJobList] = useState([]);
	const [inProgressJobList, setInProgressJobList] = useState([]);
	const [portfolioList, setPortfolioList] = useState([]);
	const [certificationList, setCertificationList] = useState([]);
	const [employmentHistory, setEmploymentHistory] = useState([]);
	const [otherExpList, setOtherExpList] = useState([]);
	const [testimonialList, setTestimonialList] = useState([]);
	// Public View
	const [publicView, setPublicView] = useState(false);

	// Get API
	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get("http://localhost:8000/users/1");
				const userData = response.data;
				setActiveUser(userData);
				setLanguages(userData.languages);
				setEducation(userData.education);
				setSkills(userData.skills);
				setCompletedJobList(userData.workHistory.completedJobList);
				setInProgressJobList(userData.workHistory.inProgressJobList);
				setPortfolioList(userData.portfolio);
				setCertificationList(userData.certification);
				setEmploymentHistory(userData.employmentHistory);
				setOtherExpList(userData.otherExp);
				setTestimonialList(userData.testimonials);
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
			<Col xs="auto" className="ms-auto">
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
				<UserInfo activeUser={activeUser} />
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
					empty={!activeUser.videoIntro}
					content={
						<Col className="mt-3">
							<VideoIntro videoIntro={activeUser.videoIntro} publicView={publicView} />
						</Col>
					}
					publicView={publicView}
				/>

				<Col className="mt-3">
					<AvailableHours activeUser={activeUser} publicView={publicView} />
				</Col>

				<Col className="mt-3">
					<Languages languages={languages} publicView={publicView} />
				</Col>

				<ShowPanel
					empty={!education.length}
					content={
						<Col className="mt-3">
							<Education education={education} publicView={publicView} />
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
					<ProfileTitleView activeUser={activeUser} publicView={publicView} />
				</Col>

				<ShowPanel
					empty={!completedJobList.length && !inProgressJobList.length}
					content={
						<Col className="mt-3">
							<WorkHistory completedJobList={completedJobList} inProgressJobList={inProgressJobList} />
						</Col>
					}
					publicView={publicView}
				/>

				<ShowPanel
					empty={!portfolioList.length}
					content={
						<Col className="mt-3">
							<Portfolio portfolioList={portfolioList} publicView={publicView} />
						</Col>
					}
					publicView={publicView}
				/>

				<Col className="mt-3">
					<Skills skills={skills} publicView={publicView} />
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
				<ShowPanel empty={!testimonialList.length} content={<Testimonials testimonialList={testimonialList} publicView={publicView} />} publicView={publicView} />
				<ShowPanel empty={!certificationList.length} content={<Certification certificationList={certificationList} publicView={publicView} />} publicView={publicView} />
				<ShowPanel empty={!employmentHistory.length} content={<EmploymentHistory employmentHistory={employmentHistory} publicView={publicView} />} publicView={publicView} />
				<ShowPanel empty={!otherExpList.length} content={<OtherExp otherExpList={otherExpList} publicView={publicView} />} publicView={publicView} />
			</>
		);
	};

	return (
		<Container className="my-2 my-md-5">
			<Row>
				<ViewChange onClick={handleViewChange} publicView={publicView} />
				<FullPageView />
			</Row>
		</Container>
	);
};

export default FreelancerProfile;
