import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter as Router, useLocation, matchPath } from "react-router-dom";
import Error404 from "pages/Error404/Error404";
import BottomNav from "components/NavBars/BottomNav";
import { Container } from "react-bootstrap";
import TopNav from "components/NavBars/TopNav";

const RouteWithSubRoutes = (route) => {
	const location = useLocation();

	function matchLoc(pathName) {
		return matchPath(location.pathname, {
			path: pathName,
			exact: false,
			strict: false,
		});
	}
	const excludeList = [matchLoc("/admin"), matchLoc("/user")];
	const isPathActive = excludeList.some(function (v) {
		return v !== null;
	});

	return (
		<Route
			path={route.path}
			exact={route.exact}
			children={
				<>
					{!isPathActive && <TopNav />}
					<Container as="main" fluid={`${isPathActive ? "xs" : "lg"}`} className={`pb-3 ${isPathActive ? "my-0 px-3" : "my-3 my-lg-4 px-0 px-md-3"}`}>
						<route.component routes={route.routes} />
					</Container>
					{!isPathActive && <BottomNav />}
				</>
			}
		/>
	);
};

const RenderRoutes = ({ routes }) => {
	return (
		<Router>
			<Suspense fallback={<h1>Loading…</h1>}>
				<Switch>
					{routes.map((route, i) => {
						return <RouteWithSubRoutes key={route.path} {...route} />;
					})}
					<Route component={Error404} />
				</Switch>
			</Suspense>
		</Router>
	);
};

export default RenderRoutes;
