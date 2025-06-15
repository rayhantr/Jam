import React, { useRef, useState } from "react";
import clsx from "clsx";
import { Collapse, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Popover, Tooltip } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SimpleBarReact from "simplebar-react";
import { NavLink, useLocation, matchPath, Link, Switch, Route } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	drawer: {
		[theme.breakpoints.up("lg")]: { width: drawerWidth, flexShrink: 0, whiteSpace: "nowrap" },
	},
	drawerOpen: {
		[theme.breakpoints.up("lg")]: {
			width: drawerWidth,
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
	},
	drawerClose: {
		[theme.breakpoints.up("lg")]: {
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			overflowX: "hidden",
			width: theme.spacing(8) - 2,
		},
	},
	transition: {
		transition: "all 0.3s ease",
	},
	listItem: {
		transition: "all 0.3s ease-in-out",
	},
	itemIcon: {
		minWidth: 0,
		transition: "margin 0.3s ease",
	},
	tooltip: {
		fontSize: "0.85rem",
		fontWeight: "normal",
		padding: "0.5rem 1rem",
	},
	tooltipPlacementRight: {
		marginLeft: "0.6em",
	},
}));

export default function MiniSideBar(props) {
	const { open, collapseOpen, mobileOpen, handleDrawerOpen, handleDrawerClose, handleMobileClose, handleCollapse, navList } = props.drawerComp;

	const classes = useStyles();
	const [tooltipOpen, setTooltipOpen] = useState(false);
	const [popoverOpen, setPopoverOpen] = useState(false);

	const location = useLocation();

	const handleTooltipOpen = (drawerOpen, hasChildren, index) => {
		drawerOpen || hasChildren ? setTooltipOpen(false) : setTooltipOpen({ [index]: true });
	};
	const handleTooltipClose = () => {
		setTooltipOpen(false);
	};

	const handlePopoverOpen = (index) => {
		setPopoverOpen({ [index]: true });
	};
	const handlePopoverClose = (index) => {
		setPopoverOpen({ [index]: false });
	};

	const popoverAnchor = useRef([]);

	const DrawerItems = (
		<List className="p-2 text-gray-light">
			{navList.map((items, index) => {
				const { path, title, icon, header, children } = items;
				const active = matchPath(location.pathname, {
					path: path,
					exact: false,
					strict: false,
				});
				const linkProp = path && { component: NavLink, to: path, activeClassName: "bg-secondary text-white bs-400" };
				const popperProp = children
					? open
						? { onClick: () => handleCollapse(open, index) }
						: {
								ref: (element) => {
									popoverAnchor.current[index] = element;
								},
								"aria-owns": title,
								"aria-haspopup": "true",
								onMouseEnter: () => handlePopoverOpen(index),
								onMouseLeave: () => handlePopoverClose(index),
						  }
					: null;

				return (
					<React.Fragment key={index}>
						{/* Subheader */}
						{header ? (
							open && (
								<li className="p-3 text-uppercase text-gray-200 fw-light fs-6 ls-sm">
									<small>{header}</small>
								</li>
							)
						) : (
							<>
								<Tooltip
									open={tooltipOpen[index] || false}
									onOpen={() => handleTooltipOpen(open, children, index)}
									onClose={handleTooltipClose}
									title={title}
									placement="right"
									arrow
									classes={{ tooltip: classes.tooltip, tooltipPlacementRight: classes.tooltipPlacementRight }}
								>
									<ListItem
										{...linkProp}
										{...popperProp}
										id={title}
										button
										className={`p-3 ${open ? "mb-0 fs-6" : "mb-3 fs-4"} ${children && collapseOpen[index] ? "bg-gray-200 rounded-top" : "rounded-4"}`}
										classes={{ root: classes.listItem }}
									>
										{icon && (
											<ListItemIcon className={`${active ? "text-white" : "text-gray-light"} ${open ? "me-4" : "me-5"}`} classes={{ root: classes.itemIcon }}>
												{<i className={`${icon} fa-fw`}></i>}
											</ListItemIcon>
										)}
										{title && <ListItemText primary={title} className="m-0" />}
										{/* collapse indicator */}
										{children && (
											<span className={`subNav-indicator text-gray-light ms-5 ${collapseOpen[index] ? "rotate" : ""}`}>
												<i className="fas fa-chevron-right"></i>
											</span>
										)}
									</ListItem>
								</Tooltip>

								{children && (
									<>
										<Popover
											id={title}
											placement="right-start"
											open={popoverOpen[index] || false}
											anchorEl={popoverAnchor.current[index]}
											anchorOrigin={{
												vertical: "center",
												horizontal: "right",
											}}
											transformOrigin={{
												vertical: "center",
												horizontal: "left",
											}}
											className="pe-none"
											PaperProps={{ className: "bs-400 ms-2" }}
										>
											<div className="p-2 pe-auto" onMouseEnter={() => handlePopoverOpen(index)} onMouseLeave={() => handlePopoverClose(index)}>
												<h6 className="text-uppercase ls-sm px-2 pt-2">
													<small>{title}</small>
												</h6>
												<List disablePadding className="rounded-bottom text-gray-light">
													{children.map((items) => {
														const { path, title } = items;
														const linkProp = path && { component: NavLink, to: path, activeClassName: "bg-secondary text-white bs-400" };
														return (
															<ListItem key={title} {...linkProp} button className="rounded-4 p-3 ps-2" classes={{ root: classes.listItem }}>
																<ListItemText primary={title} className="m-0" />
															</ListItem>
														);
													})}
												</List>
											</div>
										</Popover>

										<List disablePadding className={`bg-gray-200 rounded-bottom px-2 ${collapseOpen[index] ? "pb-2" : "pb-0"}`}>
											<Collapse in={collapseOpen[index] || false}>
												{children.map((items) => {
													const { path, title } = items;
													const linkProp = path && { component: NavLink, to: path, activeClassName: "bg-secondary text-white bs-400" };
													return (
														<ListItem key={title} {...linkProp} button className={`rounded-4 p-3 ps-5`} classes={{ root: classes.listItem }}>
															<ListItemText primary={title} className="m-0 ps-1" />
														</ListItem>
													);
												})}
											</Collapse>
										</List>
									</>
								)}
							</>
						)}
					</React.Fragment>
				);
			})}
		</List>
	);

	return (
		<>
			<Drawer
				variant="permanent"
				className={clsx("d-none d-lg-block", classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx(
						{
							[classes.drawerOpen]: open,
							[classes.drawerClose]: !open,
						},
						"border-0 bs-400 z-index-1000"
					),
				}}
				transitionDuration={300}
			>
				<div className={`d-flex px-2 pt-3 align-items-center justify-content-end flex-shrink-0`}>
					<Link to="/" className="flex-grow-1 me-4 ps-3">
						<h4 className="mb-0 fw-bold text-secondary">JamTalent</h4>
					</Link>
					<IconButton className="me-1 bg-primary-light text-secondary" onClick={open ? handleDrawerClose : handleDrawerOpen}>
						{open ? <ChevronLeftIcon /> : <MenuIcon />}
					</IconButton>
				</div>
				<SimpleBarReact className="d-flex" style={{ overflowX: "hidden" }}>
					{DrawerItems}
				</SimpleBarReact>
			</Drawer>
			<Drawer anchor="left" className="d-block d-lg-none" open={mobileOpen} onClose={handleMobileClose}>
				<div style={{ width: drawerWidth }}>{DrawerItems}</div>
			</Drawer>
		</>
	);
}

export const SideBarComponent = ({ navList }) => {
	return (
		<Switch>
			{navList.map((route, index) => {
				const { path, children, component } = route;
				let routeComp;
				if (component) {
					routeComp = (
						<Route exact path={path} key={index}>
							<route.component />
						</Route>
					);
				} else if (children) {
					routeComp = children.map((route) => (
						<Route exact path={route.path} key={index}>
							<route.component />
						</Route>
					));
				}
				return routeComp;
			})}
		</Switch>
	);
};
