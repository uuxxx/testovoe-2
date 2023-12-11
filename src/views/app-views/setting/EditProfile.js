import React, { Component } from 'react';
import { Form, Button, Input, Row, Col, message } from 'antd';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

export class EditProfile extends Component {


	componentWillUnmount() {
		setTimeout(() => message.destroy(), 2000)
	}

	render() {
		const onFinish = () => {
			const key = 'updatable';
			message.loading({ content: 'Updating...', key });
			setTimeout(() => {
				message.success({ content: 'Done!', key });
				this.props.navigate(`${APP_PREFIX_PATH}/user-list`)
			}, 1000);
		};
	
		const onFinishFailed = errorInfo => {
			console.log('Failed:', errorInfo);
		};


		const { name, email, username, website} = this.props.user;

		return (
			<>
				<div className="mt-4">
					<Form
						name="basicInformation"
						layout="vertical"
						initialValues={
							{ 
								'name': name,
								'email': email,
								'username': username,
								'website': website,
							}
						}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<Row>
							<Col xs={24} sm={24} md={24} lg={16}>
								<Row gutter={ROW_GUTTER}>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Name"
											name="name"
											rules={[
												{
													required: true,
													message: 'Please input your name!',
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Username"
											name="username"
											rules={[
												{
													required: true,
													message: 'Please input your username!'
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Email"
											name="email"
											rules={[{ 
												required: true,
												type: 'email',
												message: 'Please enter a valid email!' 
											}]}
										>
											<Input />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Website"
											name="website"
										>
											<Input />
										</Form.Item>
									</Col>
								</Row>
								<Button type="primary" htmlType="submit">
									Save Change
								</Button>
							</Col>
						</Row>
					</Form>
				</div>
			</>
		)
	}
}

function HOC(props) {
	const history = useHistory();
	const user = useSelector(state => state.user) 
	const navigate = (path) => history.push(path)

	return <EditProfile user={user} navigate={navigate} {...props} />
}

export default HOC
