import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './Components/LoginPage';
import UserInfoPage from './Components/UserInfoPage';
import UserContextProvider from './Components/UserContext';

function App() {
  return (
    <Router>
    <UserContextProvider>
      <Routes>
        <Route exact path="/" element={<LoginPage />} /> 
        <Route path="/userinfo" element={<UserInfoPage />} />
      </Routes>
    </UserContextProvider>
  </Router>   
  );
}

export default App;