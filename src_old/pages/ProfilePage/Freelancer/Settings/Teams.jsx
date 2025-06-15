import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Notify } from "components/Alerts/Alert";
import { Button } from "@material-ui/core";
import teamImg from "common/images/create-team.svg";

const Teams = () => {
	return (
		<>
			{/* Title */}
			<h3 className="title-primary d-none d-md-block">Teams</h3>

			{/* Account */}
			<Card body className="mb-3">
				{/* Content */}
				<Row className="justify-content-center align-items-center">
					<Col xs={12} sm={7} lg={5} className="text-center px-5">
						<img src={teamImg} alt="create team" className="mw-100 my-3" />
					</Col>

					<Col xs={12} lg={7}>
						<Row className="justify-content-center my-3">
							<Col as="h4" xs={12} className="text-center mb-4">
								Create teams for easier organization
							</Col>

							<Col>
								<Notify icon={<i className="fas fa-check-circle"></i>} className="mb-3">
									<Notify.Body>
										<h6 className="mb-0">Better visibility into time logged and spend per group</h6>
									</Notify.Body>
								</Notify>

								<Notify icon={<i className="fas fa-check-circle"></i>} className="mb-3">
									<Notify.Body>
										<h6 className="mb-0">Tighter control over admin or hiring privileges within each team</h6>
									</Notify.Body>
								</Notify>

								<Notify icon={<i className="fas fa-check-circle"></i>} className="mb-3">
									<Notify.Body>
										<h6 className="mb-0">Streamlined billing by charging each team directly to that group's billing method</h6>
									</Notify.Body>
								</Notify>
							</Col>
							<Col xs={12} className="text-center">
								<Row className="justify-content-center g-3">
									<Col xs={12} sm="auto">
										<Button color="primary" disableElevation>
											Learn More
										</Button>
									</Col>
									<Col xs={12} sm="auto">
										<Button variant="contained" color="primary" disableElevation>
											Upgrade to Access Teams
										</Button>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
			</Card>
		</>
	);
};

export default Teams;
