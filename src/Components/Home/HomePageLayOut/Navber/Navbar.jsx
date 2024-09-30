import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import useCarts from "../../../../Hooks/useCarts";
import { CgProfile } from "react-icons/cg";
import { MdBorderColor, MdRateReview, MdReportProblem } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import { BsFillCameraReelsFill } from "react-icons/bs";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCarts();
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className="navbar px-1 lg:px-36 mx-auto fixed top-0 z-10 bg-opacity-85 text-white bg-pink-950">
            <div className="flex-1">
                <img src='https://i.ibb.co.com/DMrfzsv/Screenshot-2024-09-30-133253-removebg-preview.png' alt="" className="w-12 rounded-md hidden lg:block" />
                <Link to="/">

                    <a className=" text-xl">FoodSTaTioN</a>
                </Link>
            </div>
            <div className="flex-none">
                <Link to="/search">
                    <button className="btn btn-ghost btn-circle">
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
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </Link>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <Link to='/myCart'>
                            <div className="indicator">
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
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item">{cart.length}</span>
                            </div>
                        </Link>
                    </div>

                </div>
                <div className="dropdown dropdown-end">
                    {
                        user ?
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <div className="avatar m-1" tabIndex={0}>
                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src='https://i.ibb.co/C9GVgbx/Screenshot-2023-11-26-112111.png' />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <Link to="/myProfile">
                                        <a className="flex items-center ml-2 p-3 text-sm  text-blue-900 capitalize transition-colors duration-300 transform hover:bg-gray-300 hover:rounded-xl">
                                        <CgProfile />
                                            <span className="mx-1 font-semibold">
                                                Profile
                                            </span>
                                        </a>
                                    </Link>
                                    <Link to="/myOrder">
                                        <a className="flex items-center ml-2 p-3 text-sm  text-blue-900 capitalize transition-colors duration-300 transform hover:bg-gray-300 hover:rounded-xl">
                                        <MdBorderColor />
                                            <span className="mx-1 font-semibold">
                                                My Order
                                            </span>
                                        </a>
                                    </Link>
                                    <Link to="/reviewPage">
                                        <a className="flex items-center ml-2 p-3 text-sm  text-blue-900 capitalize transition-colors duration-300 transform hover:bg-gray-300 hover:rounded-xl">
                                        <MdRateReview />
                                            <span className="mx-1 font-semibold">
                                                Review
                                            </span>
                                        </a>
                                    </Link>
                                    <Link to="/blogPage">
                                        <a className="flex items-center ml-2 p-3 text-sm  text-blue-900 capitalize transition-colors duration-300 transform hover:bg-gray-300 hover:rounded-xl">
                                        <BsFillCameraReelsFill />
                                            <span className="mx-1 font-semibold">
                                                Blog
                                            </span>
                                        </a>
                                    </Link>
                                    <Link to="/newsPage">
                                        <a className="flex items-center ml-2 p-3 text-sm  text-blue-900 capitalize transition-colors duration-300 transform hover:bg-gray-300 hover:rounded-xl">
                                        <IoNewspaper />
                                            <span className="mx-1 font-semibold">
                                                News
                                            </span>
                                        </a>
                                    </Link>
                                    <Link to="/reportPage">
                                        <a className="flex items-center ml-2 p-3 text-sm  text-blue-900 capitalize transition-colors duration-300 transform hover:bg-gray-300 hover:rounded-xl">
                                        <MdReportProblem />
                                            <span className="mx-1 font-semibold">
                                                Report
                                            </span>
                                        </a>
                                    </Link>
                                    <a onClick={handleSignOut} className="flex items-center p-3 text-sm  text-blue-900 capitalize transition-colors duration-300 transform hover:bg-gray-300 hover:rounded-xl">
                                        <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z" fill="currentColor"></path>
                                        </svg>
                                        <span className="mx-1 font-semibold">
                                            Sign Out
                                        </span>
                                    </a>
                                </ul>
                            </div>
                            :
                            <Link to="/signup">
                                <button className="btn text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;

