import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Error404 from "pages/Error404/Error404";

const RouteWithSubRoutes = (route) => {
	return <Route path={route.path} exact={route.exact} render={(props) => <route.component {...props} routes={route.routes} />} />;
};

const RenderRoutes = ({ routes }) => {
	return (
		<Router>
			<Switch>
				{routes.map((route, i) => {
					return <RouteWithSubRoutes key={route.path} {...route} />;
				})}
				<Route component={Error404} />
			</Switch>
		</Router>
	);
};

export default RenderRoutes;
