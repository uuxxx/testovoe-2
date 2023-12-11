import React, { Component } from 'react';
import {
  Card, Table, Tag, Tooltip, message, Button,
} from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { setAll as setAllAction } from 'redux/actions/User';
import Loading from 'components/shared-components/Loading';
import { useHistory } from 'react-router-dom';
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import { useDispatch } from 'react-redux';

export class UserList extends Component {
  state = {
    users: [],
    isLoading: false,
    error: null,
    userProfileVisible: false,
    selectedUser: null,
  };

  deleteUser = (userId) => {
    this.setState({
      users: this.state.users.filter((item) => item.id !== userId),
    });
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  openUserProfile(user) {
    const {
      email, name, website, username,
    } = user;
    this.props.setUser({
      email, name, website, username,
    });
    this.props.navigate(`${APP_PREFIX_PATH}/user-settings`);
  }

  async componentDidMount() {
    try {
      this.setState({ ...this.state, isLoading: true });
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await response.json();

      this.setState({
        ...this.state,
        users: json,
        isLoading: false,
        error: null,
      });
    } catch (e) {
      this.setState({
        ...this.state,
        isLoading: false,
        error: e.message,
      });
    }
  }

  render() {
    const { users, isLoading, error } = this.state;

    const tableColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        render: (name) => <span>{name}</span>,
        sorter: (a, b) => a.length - b.length,
      },
      {
        title: 'Username',
        dataIndex: 'username',
        sorter: (a, b) => a.length - b.length,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        render: (email) => (
          <span>
            {email}
            {' '}
          </span>
        ),
        sorter: (a, b) => a.length - b.length,
      },
      {
        title: 'Website',
        dataIndex: 'website',
        render: (link) => (
          <Tag className="text-capitalize" color="black">{link}</Tag>
        ),
        sorter: (a, b) => a.length - b.length,
      },
      {
        title: '',
        dataIndex: 'actions',
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="View">
              {/* <Link to={`${APP_PREFIX_PATH}/user-settings`}> */}
              <Button onClick={this.openUserProfile.bind(this, elm)} type="primary" className="mr-2" icon={<EyeOutlined />} size="small" />
              {/* </Link> */}
            </Tooltip>
            <Tooltip title="Delete">
              <Button danger icon={<DeleteOutlined />} onClick={() => { this.deleteUser(elm.id); }} size="small" />
            </Tooltip>
          </div>
        ),
      },
    ];

    let Content;

    if (isLoading) {
      Content = <Loading align="center" />;
    } else if (error) {
      Content = <h3 style={{ color: 'red', textAlign: 'center' }}>{error}</h3>;
    } else {
      Content = (
        <Table columns={tableColumns} dataSource={users} rowKey="id" />
      );
    }

    return (
      <Card bodyStyle={{ padding: '0px' }}>
        {Content}
      </Card>
    );
  }
}

function HOC(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const navigate = (path) => history.push(path);
  const setAll = (userInfo) => dispatch(setAllAction(userInfo));

  return <UserList navigate={navigate} setUser={setAll} {...props} />;
}

export default HOC;
