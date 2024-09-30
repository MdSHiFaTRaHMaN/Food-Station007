import Footer from "../Footer/Footer";
import Banner from "./HomePageLayOut/Banner/Banner";
import DelifaryInfo from "./HomePageLayOut/DelivaryInfo/DelifaryInfo";
import FindLocation from "./HomePageLayOut/FindLocation/FindLocation";
import FoodItems from "./HomePageLayOut/FoodItems/FoodItems";
import FoodMenu from "./HomePageLayOut/FoodMenu/FoodMenu";
import Review from "./HomePageLayOut/Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodMenu></FoodMenu>
            <FoodItems></FoodItems>
            <Review></Review>
            <FindLocation></FindLocation>
            <DelifaryInfo></DelifaryInfo>
            <Footer></Footer>
        </div>
    );
};

export default Home;