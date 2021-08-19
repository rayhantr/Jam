import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import SideNav, { SideNavComponent } from "components/NavBars/SideNav";
import settingsRoutes from "pages/ProfilePage/Freelancer/Settings/settingsRoutes";
import { SideNavResponsive } from "components/NavBars/SideNav";
import { Drawer, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	paper: {
		padding: "1rem",
	},
});

const ProfileSettings = () => {
	const classes = useStyles();

	const [open, setOpen] = useState(false);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Container fluid="lg" className="my-3 my-lg-4 px-0 px-md-3">
			<Row className="g-0 g-md-3">
				{/* Side Navigation */}
				<SideNavResponsive itemsList={settingsRoutes} onClick={handleDrawerOpen} />
				<Drawer variant="temporary" open={open} onClose={handleDrawerClose} className="d-block d-md-none" classes={{ paper: classes.paper }}>
					<SideNav itemsList={settingsRoutes} onClick={handleDrawerClose} />
				</Drawer>
				<Col xs={12} md={3} className="d-none d-md-block">
					<Card className="p-3">
						<SideNav itemsList={settingsRoutes} />
					</Card>
				</Col>
				{/* Nav Components */}
				<Col xs={12} md={9}>
					<SideNavComponent itemsList={settingsRoutes} />
				</Col>
			</Row>
		</Container>
	);
};

export default ProfileSettings;
