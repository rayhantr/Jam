import React, { useState } from "react";
import MiniSideBar, { SideBarComponent } from "components/NavBars/MiniSideNav";
import Header from "components/Header/HeaderDashboard";
import { Col, Row } from "react-bootstrap";
import { SideBarRoutes } from "routes/SideNavRoutesAdmin";

const Admin = () => {
	const [open, setOpen] = useState(true);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [collapseOpen, setCollapseOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
		setCollapseOpen(false);
	};

	const handleMobileOpen = () => {
		setMobileOpen(true);
		setOpen(true);
	};
	const handleMobileClose = () => {
		setMobileOpen(false);
		setCollapseOpen(false);
	};

	const handleCollapse = (drawerOpen, index) => {
		drawerOpen ? setCollapseOpen({ [index]: !collapseOpen[index] }) : handleCollapse((prev) => prev);
	};

	const navList = SideBarRoutes;

	return (
		<Row className="g-0">
			<Col xs="auto">
				<MiniSideBar drawerComp={{ open, collapseOpen, mobileOpen, handleDrawerOpen, handleDrawerClose, handleMobileOpen, handleMobileClose, handleCollapse, navList }} />
			</Col>
			<Col>
				<Header drawerComp={{ mobileOpen, handleMobileOpen, handleMobileClose }} />
				<SideBarComponent navList={SideBarRoutes} />
			</Col>
		</Row>
	);
};

export default Admin;
