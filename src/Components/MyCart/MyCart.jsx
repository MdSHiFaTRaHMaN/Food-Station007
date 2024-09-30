import { useState } from "react";
import useCarts from "../../Hooks/useCarts";
// import { FaRegTrashAlt } from "react-icons/fa";
import CartTable from "./CartTable";
import { Link } from "react-router-dom";

const MyCart = () => {
    const [cart, refetch] = useCarts();
    const [searchTerm, setSearchTerm] = useState(""); // State for storing search term

    // Filter cart items based on search term
    const filteredCart = cart.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(cart)
    return (
        <div className="bg-white mt-[74px] w-full lg:w-10/12 mx-auto p-4 md:p-8 rounded-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 space-y-4 sm:space-y-0">
                <div>
                    <h2 className="text-black font-semibold text-lg md:text-2xl">Products Order</h2>
                    <span className="text-xs">All products item</span>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex bg-gray-50 items-center p-2 rounded-md w-full sm:w-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <input
                            className="bg-gray-50 outline-none ml-1 block w-full sm:w-auto"
                            type="text"
                            placeholder="search..."
                            value={searchTerm} // Bind searchTerm state to input value
                            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state on input change
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row lg:ml-40 ml-0 space-y-4 sm:space-y-0 sm:space-x-8 w-full sm:w-auto">
                        <Link to='/myOrder'>
                            <button className="btn btn-outline btn-secondary">
                                My Order
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th className="px-2 md:px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-black uppercase tracking-wider">
                                    FootItem & Image
                                </th>
                                <th className="px-2 md:px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-black uppercase tracking-wider">
                                    Price
                                </th>
                                <th className="px-2 md:px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-black uppercase tracking-wider">
                                    Quentity
                                </th>
                                <th className="px-2 md:px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-black uppercase tracking-wider">
                                    Total Price
                                </th>
                                <th className="px-2 md:px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-black uppercase tracking-wider">
                                    Remove
                                </th>
                            </tr>
                        </thead>
                        {filteredCart && filteredCart.length > 0 ? (
                            filteredCart.map((cartData) => (
                                <CartTable key={cartData._id}
                                    cartData={cartData}
                                    refetch={refetch}
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-5 text-black">
                                    No items found.
                                </td>
                            </tr>
                        )}

                    </table>
                    <div className="grid lg:flex justify-between mt-7">
                        <div>
                            <table className="w-full lg:w-[600px] text-sm text-left text-black ">
                                <thead className="text-xs text-black uppercase bg-gray-50 ">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">Total Price</th>
                                        <th scope="col" className="py-3 px-6"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b mr-28 justify-around ">
                                        <td className="py-4 px-6">Total</td>
                                        <td className="py-4 px-6">$ 125</td>
                                    </tr>
                                    <tr className="bg-white border-b  ">
                                        <td className="py-4 px-6">Delivary Fee</td>
                                        <td className="py-4 px-6">$ 5</td>
                                    </tr>
                                    <tr className="bg-white border-b  ">
                                        <td className="py-4 px-6">Sub Total</td>
                                        <td className="py-4 px-6">$ 130</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
                            <button
                                className="!absolute right-1 top-1 z-10 select-none rounded bg-pink-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                                type="button"
                                data-ripple-light="true"
                            >
                                Submit
                            </button>
                            <input
                                type="text"
                                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Coupon Code
                            </label>
                        </div>
                    </div>
                    <div>
                        <Link to='/payment'>
                            <button className="btn btn-outline btn-secondary m-4">
                                Order Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;