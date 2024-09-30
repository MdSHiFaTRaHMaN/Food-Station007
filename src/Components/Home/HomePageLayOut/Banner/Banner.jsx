import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import B1 from "../../../../Images/Bannar/01.jpg"
import B2 from "../../../../Images/Bannar/02.jpg"
import B3 from "../../../../Images/Bannar/03.png"
import B4 from "../../../../Images/Bannar/04.jpg"
import B5 from "../../../../Images/Bannar/05.png"
import B6 from "../../../../Images/Bannar/06.png"

const Banner = () => {

    return (
        <div className="w-12/12 lg:w-10/12  mx-auto">
            <Carousel className="h-[270px] lg:h-[700px]">
                <div>
                    <img src={B1} />
                </div>
                <div>
                    <img src={B2} />
                </div>
                <div>
                    <img src={B3} />
                </div>
                <div>
                    <img src={B4} />
                </div>
                <div>
                    <img src={B5} />
                </div>
                <div>
                    <img src={B6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
