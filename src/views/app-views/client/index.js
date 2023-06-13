import React, { Component, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import InnerAppLayout from 'layouts/inner-app-layout';
import EditProfile from './EditProfile';
import { fetchUsers } from 'redux/actions/Users';

const SettingOption = ({ match, location }) => {
  return (
      <Menu
          defaultSelectedKeys={`/client/${match.params.id}`}
          mode='inline'
          selectedKeys={[location.pathname]}
      >
        <Menu.Item key={`${match.url}/${match.params.id}`}>
          <UserOutlined/>
          <span>Edit Profile</span>
          <Link to={match.params.id}/>
        </Menu.Item>
      </Menu>
  );
};

const SettingContent = () => {
  return <EditProfile/>;
};

export class Setting extends Component {
  render() {
    return (
        <InnerAppLayout
            sideContentWidth={320}
            sideContent={<SettingOption {...this.props}/>}
            mainContent={<SettingContent {...this.props}/>}
        />
    );
  }
}

const ClientComponent = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
      <Switch>
        <Route path={`${match.url}/:id`} component={Setting}/>
      </Switch>
  );
};

export default ClientComponent;
