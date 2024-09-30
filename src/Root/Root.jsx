import { Outlet } from "react-router-dom";
import Navbar from "../Components/Home/HomePageLayOut/Navber/Navbar";
// import DashBoard from "../Components/DeshBoard/DashBoard";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;