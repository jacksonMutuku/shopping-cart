import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = ({Children}) => {
  return (
    <div>
      <Navbar />
      {/* <Outlet /> */}
      {Children}
    </div>
  );
};

export default Layout;