import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Table, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { deleteUser, setEditableUser } from 'redux/actions/Users';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const Clients = (props) => {
  const history = useHistory();
  const [userProfileVisible, setUserProfileVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const deleteUser = userId => {
    props.deleteUser(userId)
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  const showUserProfile = userId => {
    props.setEditableUser(userId)
  };

  const closeUserProfile = () => {
    setUserProfileVisible(false)
    setSelectedUser(null)
  };

  const tableColumns = [
    {
      title: 'User',
      dataIndex: 'name',
      render: (_, record) => (
          <div className='d-flex'>
            <AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
          </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: '',
      dataIndex: 'actions',
      render: (_, elm) => (
          <div className='text-right'>
            <Tooltip title='View'>
              <Button type='primary' className='mr-2' icon={<EyeOutlined/>} onClick={() => {
                showUserProfile(elm.id)
                history.push(`${APP_PREFIX_PATH}/client/${elm.id}`)
              }} size='small'/>
            </Tooltip>
            <Tooltip title='Delete'>
              <Button danger icon={<DeleteOutlined/>} onClick={() => {
                deleteUser(elm.id);
              }} size='small'/>
            </Tooltip>
          </div>
      )
    }
  ];

  if (props.loading) return <Loading/>

  return (
      <Card bodyStyle={{ 'padding': '0px' }}>
        <Table columns={tableColumns} dataSource={props.users} rowKey='id'/>
        <UserView data={selectedUser} visible={userProfileVisible} close={() => {
          closeUserProfile();
        }}/>
      </Card>
  );
};

const mapStateToProps = state => ({
  users: state.users.users,
  loading: state.users.loading
});

const mapDispatchToProps = {
  deleteUser,
  setEditableUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
