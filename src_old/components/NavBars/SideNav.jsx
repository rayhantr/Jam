import React, { useState } from "react";
import { ListItem, List, ListItemIcon, ListItemText, Button, makeStyles, Backdrop, Collapse } from "@material-ui/core";
import { Link, Route, Switch, withRouter, useLocation } from "react-router-dom";
import { globalCss } from "MaterialTheme";

const useStyles = makeStyles({
	liRoot: {
		borderRadius: globalCss.pTb,
	},
	iconRoot: {
		minWidth: "1.3rem",
	},
	collapseRoot: {
		maxHeight: "80vh",
		overflow: "auto",
	},
	wrapper: {
		marginTop: "0.5rem",
	},
});

const SideNav = ({ className, itemsList, onClick }) => {
	// material style classes
	const classes = useStyles();

	// location path check
	const location = useLocation();
	const activeRoute = (routeName) => {
		return location.pathname === routeName ? true : false;
	};

	// subNav collapse control
	const [collapseControl, setCollapseControl] = useState({ open: [] });
	const collapseOpen = (index) => {
		setCollapseControl({ open: { ...collapseControl.open, [index]: !collapseControl.open[index] } });
	};

	return (
		<List disablePadding component="nav" className={`jamNav-side ${className || ""}`}>
			{itemsList.map((item, index) => {
				const { title, icon, path, subNav } = item;
				return (
					<React.Fragment key={title}>
						<ListItem button component={Link} to={path} selected={activeRoute(path)} onClick={subNav ? () => collapseOpen(index) : onClick} className="py-2 px-3" classes={{ root: classes.liRoot }}>
							{icon && (
								<ListItemIcon className="justify-content-center me-3 text-gray-light" classes={{ root: classes.iconRoot }}>
									{icon}
								</ListItemIcon>
							)}
							<ListItemText primary={title} />
							{/* collapse indicator */}
							{subNav && (
								<span className={`subNav-indicator text-gray-light ${collapseControl.open[index] ? "rotate" : ""}`}>
									<i className="fas fa-chevron-right"></i>
								</span>
							)}
						</ListItem>
						{/* Collapse for sub nav */}
						{subNav && (
							<Collapse in={collapseControl.open[index] || false} timeout={300}>
								<List disablePadding>
									{subNav.map((item) => {
										// sub nav lists
										return (
											<ListItem key={item.title} button className="ps-5 py-1 my-2">
												{item.icon && (
													<ListItemIcon className="justify-content-center me-3" classes={{ root: classes.iconRoot }}>
														{item.icon}
													</ListItemIcon>
												)}
												<ListItemText className="ms-2" primary={item.title} />
											</ListItem>
										);
									})}
								</List>
							</Collapse>
						)}
					</React.Fragment>
				);
			})}
		</List>
	);
};

export default withRouter(SideNav);

// show related component linked with each nav items
export const SideNavComponent = ({ itemsList }) => {
	return (
		<Switch>
			{itemsList.map((route) => (
				<Route exact path={route.path} key={route.path}>
					<route.component />
				</Route>
			))}
		</Switch>
	);
};

// top navigation for the side nav when device in medium or small view
export const SideNavResponsive = ({ itemsList, header }) => {
	const location = useLocation();
	const activeNav = (routeName) => {
		return location.pathname === routeName ? true : false;
	};

	// Collapse control
	const [expanded, setExpanded] = useState(false);
	const handleExpand = () => {
		setExpanded(!expanded);
	};
	const closeExpand = () => {
		setExpanded(false);
	};

	// css classes
	const classes = useStyles();

	return (
		<>
			<div className="jamNav-side-responsive d-block d-md-none position-fixed top-0 start-0 end-0 w-auto text-end bs-600 z-index-2050">
				<Backdrop open={expanded} onClick={closeExpand} transitionDuration={300} />
				<div className={`jamNav-side-responsive-display bg-white p-3 ${expanded ? "m-2 expanded" : "m-0"}`}>
					{itemsList.map((item) => {
						const { title, path } = item;
						return (
							activeNav(path) && (
								<Button key={title} endIcon={expanded ? <i className="fas fa-times ms-2"></i> : <i className="fas fa-stream ms-2"></i>} color="secondary" onClick={handleExpand}>
									<strong>{!expanded ? title : header}</strong>
								</Button>
							)
						);
					})}
					<Collapse in={expanded} timeout={300} classes={{ root: classes.collapseRoot, wrapper: classes.wrapper }}>
						<SideNav itemsList={itemsList} onClick={closeExpand} />
					</Collapse>
				</div>
			</div>
		</>
	);
};
