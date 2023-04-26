import React from 'react'
import OrderList from '../../pages/Admin/OrderManagement/OrderList';
import UserList from '../../pages/Admin/UserManagement/UserList';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

const SidebarRoutes = () => {
  return (
    <div>
      <Routes>
                  <Route path="*" element={<div></div>} />
                  <Route exact path="/" element={<div></div>} />
                  <Route exact path="/orders" element={< OrderList/>} />
                  <Route exact path="/products" element={<div></div>} />
                  <Route exact path="/users" element={<UserList/>} />
              </Routes>
    </div>
  )
}

export default SidebarRoutes
