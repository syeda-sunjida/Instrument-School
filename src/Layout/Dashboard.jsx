import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUsers, FaShoppingCart, FaWallet, FaHome } from 'react-icons/fa';
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await fetch("https://singerella-server-syeda-sunjida.vercel.app/users");
        const data = await response.json();
        const user = data.find(user => user.role);
        setUserRole(user.role);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserRole();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-side bg-slate-500">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
          <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
          
          {userRole === 'admin' && (
            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
          )}
          
          <li>
            <NavLink to="/dashboard/myselectedclasses"><FaShoppingCart></FaShoppingCart> My selected classes
              <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
          <li><NavLink to="/ourclasses"> Classes</NavLink></li>
          <li><NavLink to="/instructor">Instructor</NavLink></li>
        </ul>
      </div>
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
