import React from "react";
import { ListItem, List, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link, Route, Switch, withRouter, useLocation } from "react-router-dom";

const SideNav = (props) => {
	const activeRoute = (routeName) => {
		return props.location.pathname === routeName ? true : false;
	};

	return (
		<List disablePadding component="nav" className={`sideNav ${props.className}`}>
			{props.itemsList.map((item) => {
				const { title, icon, path } = item;
				return (
					<Link to={path} key={title}>
						<ListItem button selected={activeRoute(path)} onClick={props.onClick}>
							{icon && <ListItemIcon className="justify-content-center">{icon}</ListItemIcon>}
							<ListItemText primary={title} />
						</ListItem>
					</Link>
				);
			})}
		</List>
	);
};

export default withRouter(SideNav);

export const SideNavComponent = (props) => {
	return (
		<Switch>
			{props.itemsList.map((route) => (
				<Route exact path={route.path} key={route.path}>
					<route.component />
				</Route>
			))}
		</Switch>
	);
};

export const SideNavResponsive = (props) => {
	const location = useLocation();
	const activeNav = (routeName) => {
		return location.pathname === routeName ? true : false;
	};

	return (
		<div className="sideNav-responsive p-3 m-0 d-block d-md-none position-fixed bs-600">
			{props.itemsList.map((item) => {
				const { title, path } = item;
				return (
					activeNav(path) && (
						<h5 className="mb-0 text-secondary d-flex align-items-center" key={title} onClick={props.onClick}>
							<i className="fas fa-stream me-3"></i>
							{title}
						</h5>
					)
				);
			})}
		</div>
	);
};
