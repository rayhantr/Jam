import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, Tabs, Tab } from "@material-ui/core";
import TabPanel from "components/Tabs/TabPanel";
import { Alert } from "@material-ui/lab";

const PanelAppSettings = () => {
	return (
		<Form>
			<Form.Group as={Row} className="mb-3" controlId="app_name">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					APP_NAME
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="APP_NAME" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="app_env">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					APP_ENV
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="APP_ENV" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="app_key">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					APP_KEY
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="APP_KEY" className="py-2 px-3" disabled />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="app_debug">
				<Form.Label column md={3} lg={3} className="text-md-end text-uppercase">
					APP_DEBUG
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="APP_DEBUG" className="py-2 px-3">
						<option value="true">True</option>
						<option value="false">True</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="log_channel">
				<Form.Label column md={3} lg={3} className="text-md-end text-uppercase">
					LOG_CHANNEL
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="LOG_CHANNEL" className="py-2 px-3">
						<option value="stack">Stack</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="content_editor">
				<Form.Label column md={3} lg={3} className="text-md-end text-uppercase">
					CONTENT_EDITOR
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="CONTENT_EDITOR" className="py-2 px-3">
						<option value="enabled">Enabled</option>
						<option value="disabled">Disabled</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="app_url">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					APP_URL
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="APP_URL" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Row>
				<Col md={{ span: "auto", offset: 3 }}>
					<Button variant="contained" color="primary" disableElevation>
						Save Settings
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

const PanelDBSettings = () => {
	return (
		<Form>
			<Form.Group as={Row} className="mb-3" controlId="db_connection">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					DB_CONNECTION
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" disabled />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="db_host">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					DB_HOST
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" disabled />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="db_port">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					DB_PORT
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" disabled />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="db_database">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					DB_DATABASE
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" disabled />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="db_username">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					DB_USERNAME
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" disabled />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="db_password">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					DB_PASSWORD
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" disabled />
				</Col>
			</Form.Group>
			<Row>
				<Col md={{ span: "auto", offset: 3 }}>
					<Button variant="contained" color="primary" disableElevation>
						Save Settings
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

const PanelMailSettings = () => {
	return (
		<Form>
			<Form.Group as={Row} className="mb-3" controlId="queue_mail">
				<Form.Label column md={3} lg={3} className="text-md-end text-uppercase">
					queue_mail
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="APP_DEBUG" className="py-2 px-3">
						<option value="on">On</option>
						<option value="off">Off</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="mail_driver">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					mail_driver
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="mail_host">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					mail_host
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="mail_port">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					mail_port
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="mail_username">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					mail_username
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="mail_password">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					mail_password
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="mail_encryption">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					mail_encryption
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="mail_from_address">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					mail_from_address
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="mail_to_address">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					mail_to_address
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="mail_from_name">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					mail_from_name
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Row>
				<Col md={{ span: "auto", offset: 3 }}>
					<Button variant="contained" color="primary" disableElevation>
						Save Settings
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

const PanelOthers = () => {
	return (
		<Form>
			<Form.Group as={Row} className="mb-3" controlId="broadcast_driver">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					broadcast_driver
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="cache_driver">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					cache_driver
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="queue_connection">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					queue_connection
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="session_driver">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					session_driver
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="session_lifetime">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					session_lifetime
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="map_api_key">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					map_api_key
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="mailchimp_apikey">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					mailchimp_apikey
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="mailchimp_list_id">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					mailchimp_list_id
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="redis_host">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					redis_host
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="redis_password">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					redis_password
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="redis_port">
				<Form.Label column md={3} className="text-md-end text-uppercase">
					redis_port
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="timezone">
				<Form.Label column md={3} lg={3} className="text-md-end">
					Timezone
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Timezone" className="py-2 px-3">
						<option value="gmt+6">Dhaka GMT+6</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="timezone">
				<Form.Label column md={3} lg={3} className="text-md-end">
					Default Language
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Default Language" className="py-2 px-3">
						<option value="en">English - en</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Row>
				<Col md={{ span: "auto", offset: 3 }}>
					<Button variant="contained" color="primary" disableElevation>
						Save Settings
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

const SystemEnv = () => {
	const [value, setValue] = useState(0);

	const tabChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">System Environment</h1>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">SystemEnv</div>
					</div>
				</div>
			</section>
			<Row as="section" className="g-3">
				<Col xs={12}>
					<Card>
						<Card.Body className="p-0">
							<Alert variant="filled" severity="warning" className="fs-6">
								Note: This section is for Developers only. Do not use <kbd className="bg-white text-secondary">space</kbd> in any input filed!
							</Alert>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12}>
					<Card>
						<Card.Body className="py-0">
							<Tabs value={value} onChange={tabChange} indicatorColor="primary" textColor="primary" aria-label="Work History Tabs">
								<Tab label="App Settings" className="text" color="primary" />
								<Tab label="Database" />
								<Tab label="Mail Settings" />
								<Tab label="Others" />
							</Tabs>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12}>
					<Card body>
						<TabPanel value={value} index={0}>
							<PanelAppSettings />
						</TabPanel>
						<TabPanel value={value} index={1}>
							<PanelDBSettings />
						</TabPanel>
						<TabPanel value={value} index={2}>
							<PanelMailSettings />
						</TabPanel>
						<TabPanel value={value} index={3}>
							<PanelOthers />
						</TabPanel>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default SystemEnv;
