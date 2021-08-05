import React, { useState } from "react";
import { Row, Col, Card, Ratio } from "react-bootstrap";
import { Pagination } from "@material-ui/lab";
import BtnIcon from "../../Buttons/BtnIcon";
import EmptyAdd from "../EmptyAdd";

const Portfolio = ({ portfolioList, publicView }) => {
	// Items to show per page
	const itemsPerPage = 3;
	const [page, setPage] = useState(1);
	const [nooOfPages] = useState(Math.ceil(portfolioList.length / itemsPerPage));

	// Pagination on click handle change
	const handleChange = (event, value) => {
		setPage(value);
	};

	const PortfolioCard = () => {
		return (
			<>
				{portfolioList.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((portfolio) => {
					return (
						<Col xs={12} sm={6} md={6} lg={4} key={portfolio.id} className="portfolio-card mb-3 mb-lg-0">
							<Card className="bordered clickable hoverable">
								<Ratio aspectRatio="4x3">
									<Card.Img
										variant="top"
										src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAsVBMVEXu7u4REiRmZmYAAADX19jz8/NiYmJ9fX2MjIzl5eXt7e1WVlb29vZ0dHRoaGjb29sAABsAABhbW1sLDCB5eXkAAAkAABRtbXbOztEGCB6UlZy9vb3Dw8OXl5eBgYFxcXEAABBbW2WdnaVGRlM+PkqFhYwZGiosLTs0NEAkJTKEhIq0tLSgoKB2d38MDyW4t7xmZ3FPUFqrqq5TVFsgITEWFyk+QEgwMTx6eoVhYW06O0lY5vjcAAAEdklEQVR4nO3aC1eqShyHYZBLwskdOCkwmQk4KuxIxjC3fv8PdgZvibc6q9oK5/eUXcBavv1hpFaSBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBjzDMkUyp89v72fZ+0+viqdW++Q/320h1naL/0f75Of7ruxtqd8VWq3rjyRuPL3+QOjZeGxk9C48Whcf/O2vHtlWnUJPWhc3e0siqNmnrfbDb1x2OXplVpVJt6TWh2j+yrSKP2tEwUkb8PD9eKNKrN2tp9VRu1zraxWd1GfdNYq2qjZGzmqNer0mioeyW3z+vIpnp471I2Gje6uz+uev7koesPR64Cytho3us1fX+S0kP3qfF4sDVXwsY8sXYYqUmmefyCtXyN5s1qDT2c5Cmla1xN8YPI4o6yNW6meC5SM+qFS/OSNb5P8Uykcd+82Y0sV+PuFE9Faka+7HZ3IkvVuJ94NNJsLJfdncgyNRYP1BORxvq3LP39cC1R4+EUDyM1o7FddreR5Wk8nrgXaeyMenu4lqbxVGIh0iguu+vIsjSeThQ2kWZjb9ld/XWnJI3Hlpv9SWrm08Gyuzwny9F4doqbSKNxZNm9kUrS+FFiHnlrHB21OCe1EjRqHycK7qllt1uCOZqfSqzpJ5fd7tU3/jI+lXiu/ql27Y1fTcxdeePXA9F4eWhEIxqvhyae27/BVf9PoFT/Fo+f/XPzRWjf49IZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/1uapFafpFSfJFcfGqvhPzcS8hMP40etG4m1ui3Zm52kpbRI6z2qJTYNh6WLXDWSt8QiUdJqy7LXbrEX2WoT2bPJ2B1HHY94PZFv9xRXaWdOWrrI9RztwLJ87lDP5kHKAiUN+nKYUqq8jtzfL+HEb/eSYGAoScrn0V9/kETe/bESb7u5sNXzLPFiizf5XTyyvd+mMeE9mvoe7TOFUCt1FLqYRNychIr7Gt75qv88TrI79tDOsr8+RtL3+rJFxIMXN2KFob18P52JGLGJiDJvMJr7PA1T7qdv6aDPyTwb+qTQSEaszSacUyaTNn157hE5cNp2xozEtYJY4WO3Zyu3UusSx6nlhGw0n6bhJHN4n485Xcz9gRMmodV3Bs6Ip37IucOGzA/8fkDr04C9+gFlvrfbKPdoEgWLUZQs8vORTnsL5thEUfyxa8XPSjJxZ4pixJPWBRrFANJxJ45nNBXnUcgZ85OY+QuVK5O3IHwOWMKcwRu1mcLjWTKM43jOWZ+Fc6vQaCVjJaSxMxC3BV3QmGZ/WrHbcd8SNet01CxV3b6puIl9+rH8mF4wTP6ENI05jVNCqcMp5XSeJouYzmmS8JHjTBkLX0PqOJlPQ0adwE+CPik0yiQiXjbLyHQWeZGVjQgZyC/RjFh25FkzccwPZnLkydFFFlVx1k1tIk69/FWsLrI4BfNVZWrJ4mX5lE3kfKmZ2vkTuNhLplOLFM9HebVKLW/LVWy1e/3VB9vLBddy1YDGavgXIXiOOOUMCCAAAAAASUVORK5CYII="
									/>
								</Ratio>
								<Card.Body>
									<Card.Title className="colored">{portfolio.title}</Card.Title>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</>
		);
	};

	return (
		<Card body className="bs-dim">
			<Card.Title className="row g-0 justify-content-between align-items-center">
				Portfolio ({portfolioList.length}){publicView ? null : <BtnIcon iconType="add" />}
			</Card.Title>
			<Row className="mt-3">
				{/* For empty portfolio show empty sign else show the portfolios available */}
				{!portfolioList.length ? (
					<Col>
						<EmptyAdd description="Showcase your work to win more projects" btnName="Add items to impress clients" />
					</Col>
				) : (
					<>
						<PortfolioCard />
						<Pagination count={nooOfPages} page={page} onChange={handleChange} defaultPage={1} shape="rounded" className="d-flex justify-content-center mt-3" />
					</>
				)}
			</Row>
		</Card>
	);
};

export default Portfolio;
