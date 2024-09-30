import { BsDot, BsFillCartCheckFill } from "react-icons/bs";
import { FaBiking } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { IoStar } from "react-icons/io5";
import { LuBadgeInfo, LuBadgePercent } from "react-icons/lu";
import { useLoaderData, useParams } from "react-router-dom";

const FoodDetails = () => {
    const FoodDetail = useLoaderData();
    console.log(FoodDetail);
    const { id } = useParams();
    const idInt = id;
    const Food = FoodDetail.find((details) => details._id === idInt)
    console.log(Food);
    const { name, image, price, description, category } = Food;
    return (
        <section className="bg-white w-full lg:w-10/12 mx-auto mt-[72px] lg:mt-0 ">
            <div className="relative flex">
                <div className="min-h-screen lg:w-1/3"></div>
                <div className="hidden w-3/4 min-h-screen bg-gray-100  lg:block"></div>

                <div
                    className="container flex flex-col justify-center w-full min-h-screen px-6  mx-auto lg:absolute lg:inset-x-0">

                    <div className="lg:flex lg:items-center">
                        <img className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-64 lg:h-96" src={image} alt="" />

                        <div className="mt-8 lg:px-10 lg:mt-0">
                            <h1 className="text-2xl font-semibold text-gray-800  lg:w-72">
                                {category}
                            </h1>

                            <p className="max-w-lg mt-6 text-gray-500 ">
                                {description}
                            </p>

                            <h3 className="mt-6 text-2xl font-medium text-blue-500">{name}</h3>
                            <div className="flex items-center font-semibold my-2">
                                <FaBiking /> Free Delivary <BsDot />
                                <span className="flex items-center font-semibold">
                                    <BsFillCartCheckFill /> TK 50 Minimum
                                </span>
                            </div>
                            <p className="font-bold flex items-center "><ImPriceTags />$ {price}</p>
                            <span className="flex my-2 items-center text-xs font-semibold">
                                <IoStar className="text-yellow-700"></IoStar>
                                4.2/5(18)   See Reviews
                                <h6 className="ml-2 flex items-center"><LuBadgeInfo /> More Info</h6>
                            </span>
                            <button className="btn mt-3 btn-outline btn-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                Add to Favourites
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-2  mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/3 md:w-1/2 p-4" onClick={() => document.getElementById('my_modal_3').showModal()}>
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-800 mb-4">
                                    <LuBadgePercent />
                                </div>
                                <span className="text-sm font-semibold text-pink-700">15% off today</span>
                                <p className="leading-relaxed text-base">Min. order Tk 50.
                                    Automatically applied to cart</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4"onClick={() => document.getElementById('my_modal_3').showModal()}>
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-800 mb-4">
                                    <LuBadgePercent />
                                </div>
                                <span className="text-sm font-semibold text-pink-700">25% off today</span>
                                <p className="leading-relaxed text-base">Min. order Tk 199. Discount capped at Tk 100
                                    Use voucher in cart</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4"onClick={() => document.getElementById('my_modal_3').showModal()}>
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-800 mb-4">
                                    <LuBadgePercent />
                                </div>
                                <span className="text-sm font-semibold text-pink-700">30% off by Bkash</span>
                                <p className="leading-relaxed text-base">Min. order Tk 199. Discount capped at Tk 100
                                    Use voucher in Bkash</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="mb-4 font-extrabold text-2xl">Offers details</h3>
                    <span className="text-sm font-semibold text-pink-700">15% off today</span>
                    <p className="py-4">Min. order Tk 199. Discount capped at Tk 100
                    Use voucher in cart</p>
                    <li>Valid for a minimum order of Tk199</li>
                    <li>Discount capped at Tk100</li>
                    <li>Applicable for Delivery.</li>
                    <li>Limited to 1 redemption per user.</li>
                    <li>For selected users only.</li>
                </div>
            </dialog>
        </section>
    );
};

export default FoodDetails;