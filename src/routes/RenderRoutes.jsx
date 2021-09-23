import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Error404 from "pages/Error404/Error404";
import BottomNav from "components/NavBars/BottomNav";
import { Container } from "react-bootstrap";
import TopNav from "components/NavBars/TopNav";

const RouteWithSubRoutes = (route) => {
	return <Route path={route.path} exact={route.exact} render={(props) => <route.component {...props} routes={route.routes} />} />;
};

const RenderRoutes = ({ routes }) => {
	return (
		<Router>
			<TopNav />
			<Container as="main" fluid="lg" className="my-3 my-lg-4 px-0 px-md-3">
				<Switch>
					{routes.map((route, i) => {
						return <RouteWithSubRoutes key={route.path} {...route} />;
					})}
					<Route component={Error404} />
				</Switch>
			</Container>
			<BottomNav />
		</Router>
	);
};

export default RenderRoutes;
