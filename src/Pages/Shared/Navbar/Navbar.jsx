

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
// import useClasses from "../../../hooks/useClasses";
// import useCart from "../../../hooks/useCart";
// 
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    // const [enrolled] = useClasses();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    // const logoUrl = "https://media.istockphoto.com/id/939144958/vector/guitar-stylized-icon-vector-simple-lines-acoustic-guitar-design-element.jpg?s=612x612&w=0&k=20&c=KOw-qKVwYAPgriQq4svN10gdHbzItr3bzQLLdXumops=";

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ourclasses">Classes</Link></li>
        
        <li><Link to="/instructor">Instructor</Link></li>
        
        {/* <li><Link to="/secret">Secret</Link></li> */}
        <li>
            <Link to="/dashboard">
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    Dashboard
                    {/* <div className="badge badge-secondary">+{enrolled?.length || 0}</div> */}
                </button>
            </Link>
        </li>
        {
            user ? <>
                <span>{user?.displayName}</span>
                {user.photoURL && <img src={user.photoURL} alt="" className="h-12 rounded-full border-2 border-primary" />}

                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    
                    <a className="btn btn-ghost normal-case text-xl">Singerella</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <img
                        src="data:image/jpeg;base64,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"
                        alt="Logo"
                        className="logo"
                        style={{ width: "80px", height: "80px", borderRadius: "50%", padding: "5px" }}
                    />
                </div>
            </div>
        </>
    );
};

export default NavBar;