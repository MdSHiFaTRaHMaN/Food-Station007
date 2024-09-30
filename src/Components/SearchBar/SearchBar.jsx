import { useState } from "react";
import { MdDone } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const SearchBar = () => {
    const AlItems = useLoaderData();
    const [searchTerm, setSearchTerm] = useState("");

    // Filter the items based on the search term
    const filteredItems = AlItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="relative overflow-x-auto shadow-md mt-20 py-7 sm:rounded-lg w-full lg:w-10/12 mx-auto">
            <div className="flex w-full lg:w-5/12 my-4 rounded bg-white">
                <input
                    className="w-full border-none bg-transparent px-4 py-1 text-black outline-none focus:outline-none"
                    type="search"
                    name="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                />
                <button
                    type="submit"
                    className="m-2 rounded bg-blue-600 px-4 py-2 text-white"
                >
                    <svg
                        className="fill-current h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 56.966 56.966"
                        width="512px"
                        height="512px"
                    >
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-4 py-3">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Item Name
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Purcess
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item, index) => (
                                <tr className="bg-white border-b" key={index}>
                                    <td className="p-4">
                                        <img
                                            src={item.image}
                                            className="w-16 md:w-32 max-w-full max-h-full"
                                            alt={item.name}
                                        />
                                    </td>
                                    <td className="px-4 py-4 font-semibold text-gray-900">
                                        {item.name}
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex items-center">
                                          
                                            <td className="px-4 py-4 flex items-center">
                                                <MdDone className="text-green-800" />
                                                <a href="#" className="font-medium text-green-700 ">
                                                    {item.status}
                                                </a>
                                            </td>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 font-semibold text-gray-900">
                                        {item.price}
                                    </td>
                                    <td className="px-4 mt-10 flex items-center">
                                        <button className="btn btn-outline btn-accent">Add to Cart</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-4 text-gray-500">
                                    No items found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SearchBar;
