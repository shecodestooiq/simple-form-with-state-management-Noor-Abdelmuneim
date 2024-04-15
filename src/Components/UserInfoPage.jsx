
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserInfoPage = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>User Information</h2>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
    </div>
  );
};

export default UserInfoPage;