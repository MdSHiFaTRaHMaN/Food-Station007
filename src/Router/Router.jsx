import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import { CarouselTransition } from "../Components/MenuSection/MenuCarousel/Carousel";
import SignUp from "../Components/Login/SignUp";
import SearchBar from "../Components/SearchBar/SearchBar";
import FoodDetails from "../Components/Home/HomePageLayOut/FoodItems/FoodDetails";
import MyCart from "../Components/MyCart/MyCart";
import PaymentMethod from "../Components/PaymentMethod/PaymentMethod";
import MyOrder from "../MyOrder/MyOrder";
import Profile from "../Components/HomeMenu/Profile";
import ReviewPage from "../Components/HomeMenu/ReviewPage";
import NewsPage from "../Components/HomeMenu/NewsPage";
import ReportPage from "../Components/HomeMenu/ReportPage";
import BlogPage from "../Components/HomeMenu/BlogPage";
import Salad from "../Components/Home/HomePageLayOut/FoodMenu/FoodFilter/Salad";
import Rolls from "../Components/Home/HomePageLayOut/FoodMenu/FoodFilter/Rolls";
import Deserts from "../Components/Home/HomePageLayOut/FoodMenu/FoodFilter/Deserts";
import Sandwich from "../Components/Home/HomePageLayOut/FoodMenu/FoodFilter/Sandwich";
import Cake from "../Components/Home/HomePageLayOut/FoodMenu/FoodFilter/Cake";
import PureVeg from "../Components/Home/HomePageLayOut/FoodMenu/FoodFilter/PureVeg";
import Pasta from "../Components/Home/HomePageLayOut/FoodMenu/FoodFilter/Pasta";
import Noodles from "../Components/Home/HomePageLayOut/FoodMenu/FoodFilter/Noodles";




const Router = createBrowserRouter ([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/menu",
                element: <CarouselTransition></CarouselTransition>
            },
            {
                path:"/signup",
                element: <SignUp></SignUp>
            },
            {
                path:"/search",
                element: <SearchBar></SearchBar>,
                loader: () => fetch(`https://food-station.onrender.com/Items`)
            },
            {
                path:"/foodDetails/:id",
                element: <FoodDetails></FoodDetails>,
                loader: () => fetch(`https://food-station.onrender.com/Items`)
            },
            {
                path:'/myCart',
                element: <MyCart></MyCart>
            },
            {
                path:'/payment',
                element: <PaymentMethod></PaymentMethod>
            },
            {
                path: "/myOrder",
                element: <MyOrder></MyOrder>
            },
            {
                path: "/myProfile",
                element: <Profile></Profile>
            },
            {
                path: '/reviewPage',
                element: <ReviewPage></ReviewPage>
            },
            {
                path: "/newsPage",
                element: <NewsPage></NewsPage>
            },
            {
                path: "/reportPage",
                element: <ReportPage></ReportPage>
            },
            {
                path: "/blogPage",
                element: <BlogPage></BlogPage>
            },
            {
                path: '/salad',
                element: <Salad></Salad>
            },
            {
                path: '/rolls',
                element: <Rolls></Rolls>
            },
            {
                path: '/deserts',
                element: <Deserts></Deserts>
            },
            {
                path: '/sandwich',
                element: <Sandwich></Sandwich>
            },
            {
                path: '/cake',
                element: <Cake></Cake>
            },
            {
                path: '/pureveg',
                element: <PureVeg></PureVeg>
            },
            {
                path: '/pasta',
                element: <Pasta></Pasta>
            },
            {
                path: '/noodles',
                element: <Noodles></Noodles>
            }
        ]
    }
])
export default Router;