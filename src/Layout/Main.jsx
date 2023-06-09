import Footer from "../Pages/Shared/Footer";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Pages/Shared/Navbar/Navbar";
// import NavBar from "../pages/Shared/NavBar/NavBar";


const Main = () => {
    const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>
            { noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;