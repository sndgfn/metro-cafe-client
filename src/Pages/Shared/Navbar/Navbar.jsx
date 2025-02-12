import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {

    const navOptions = <>
        <li><Link to='/'>  Home</Link> </li>
        <li> <Link to='/order/salad'>Order </Link></li>
        <li> <Link to='/menu'>Menu </Link></li>
        <li> <Link to='/login'>Login </Link></li>
        <li> <Link to='/signUp'>Sign Up </Link></li>
    </>

    return (

        // <div class="nav">
        //   <div class="container">
        //     <div class="btn">Home</div>
        //     <div class="btn">Contact</div>
        //     <div class="btn">About</div>
        //     <div class="btn">FAQ</div>
        //     <svg
        //       class="outline"
        //       overflow="visible"
        //       width="400"
        //       height="60"
        //       viewBox="0 0 400 60"
        //       xmlns="http://www.w3.org/2000/svg"
        //     >
        //       <rect
        //         class="rect"
        //         pathLength="100"
        //         x="0"
        //         y="0"
        //         width="400"
        //         height="60"
        //         fill="transparent"
        //         stroke-width="5"
        //       ></rect>
        //     </svg>
        //   </div>
        // </div>




        <div className="navbar fixed text-white bg-opacity-30 z-10 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>



    );
};

export default Navbar;