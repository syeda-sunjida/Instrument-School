import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet,  FaHome, FaUsers } from 'react-icons/fa';

import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard" className="sidebar-link">
                  <FaHome className="sidebar-icon" /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers" className="sidebar-link">
                  <FaUsers className="sidebar-icon" /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
            <li>
                <NavLink to="/dashboard/allusers" className="sidebar-link">
                  <FaUsers className="sidebar-icon" /> All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/home" className="sidebar-link">
                  <FaHome className="sidebar-icon" /> User Home
                </NavLink>
              </li>
              
              <li>
                <NavLink to="/dashboard/history" className="sidebar-link">
                  <FaWallet className="sidebar-icon" /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myselectedclasses" className="sidebar-link">
                  <FaShoppingCart className="sidebar-icon" /> My Classes
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to="/" className="sidebar-link">
              <FaHome className="sidebar-icon" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/ourclasses" className="sidebar-link">
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructor" className="sidebar-link">
              Instructor
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
