import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')

    return (
        <div>
            {
                noHeaderFooter || <Navbar></Navbar>
            }
            
            <Outlet></Outlet>
        </div>
    );
};

export default Main;