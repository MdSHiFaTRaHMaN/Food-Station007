import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './Reviews.css';

// import required modules
import { Pagination } from 'swiper/modules';
import User from "../../../../Images/u.png"


const Reviews = () => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-full lg:w-10/12 mx-auto">
      <SwiperSlide>
        <div className="w-full p-8 bg-white rounded-md shadow-lg  ">

          <div className="flex items-center mt-6 mx-2">
            <div className="mx-auto grid">
              <img className="object-cover mx-2 rounded-full w-20 h-20" src={User} alt="" />
              <h1 className="font-semibold text-gray-800 ">Jeny Doe</h1>
              <span className="text-sm text-gray-500 ">CEO, Jeny Consultency</span>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
            </div>
          </div>
          <p className="leading-loose text-gray-500 text-center w-[270px] lg:w-[500px] mx-auto ">
            “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea tempora dolores qui eius pariatur
            odit ad voluptas iste, cum accusantium beatae tempore quasi nesciunt distinctio. ”
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full p-8 bg-white rounded-md shadow-lg ">


          <div className="flex items-center mt-6 -mx-2">

            <div className="mx-auto grid text-center">
              <img className="object-cover rounded-full w-20 h-20" src={User} alt="" />
              <h1 className="font-semibold text-gray-800 ">Jeny Doe</h1>
              <span className="text-sm text-gray-500 ">CEO, Jeny Consultency</span>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
            </div>
          </div>
          <p className="leading-loose text-gray-500 w-[500px] mx-auto ">
            “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea tempora dolores qui eius pariatur
            odit ad voluptas iste, cum accusantium beatae tempore quasi nesciunt distinctio. ”
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full p-8 bg-white rounded-md shadow-lg  ">


          <div className="flex items-center mt-6 -mx-2">

            <div className="mx-auto grid">
              <img className="object-cover mx-2 rounded-full w-20 h-20" src={User} alt="" />
              <h1 className="font-semibold text-gray-800 ">Jeny Doe</h1>
              <span className="text-sm text-gray-500 ">CEO, Jeny Consultency</span>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
            </div>
          </div>
          <p className="leading-loose text-gray-500 w-[500px] mx-auto ">
            “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea tempora dolores qui eius pariatur
            odit ad voluptas iste, cum accusantium beatae tempore quasi nesciunt distinctio. ”
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Reviews;