import { useEffect, useState } from "react";
import FoodCart from "./FoodCart";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";



const FoodItems = () => {
    const [allFood, setAllFood] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMorePages, setHasMorePages] = useState(true);
    const itemsPerPage = 8;

    useEffect(() => {
        const fetchFoodItems = async () => {
            const response = await fetch(`https://food-station.onrender.com/Items?page=${currentPage}&limit=${itemsPerPage}`);
            const data = await response.json();
            if (data.length === 0) {
                setHasMorePages(false);
            } else {
                setAllFood(data);
                setHasMorePages(true);
            }
        };

        fetchFoodItems();
    }, [currentPage]);

    // console.log(allFood);

    const nextPage = () => {
        if (hasMorePages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const prevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    // Function to chunk array into groups of 8 items
    const chunkArray = (arr, size) => {
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArr.push(arr.slice(i, i + size));
        }
        return chunkedArr;
    };

    // Divide allFood array into chunks of 8 items per page
    const paginatedFood = chunkArray(allFood, itemsPerPage);

    return (
        <div>
            <section className="text-gray-600 body-font mx-3 lg:mx-28">
                <h1 className="text-3xl font-bold text-fuchsia-700 -mb-14">Top dishes near you. Enjoy Your Food🙂🙂</h1>

                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            paginatedFood[currentPage - 1] && paginatedFood[currentPage - 1].map(food => (
                                <FoodCart
                                    key={food._id}
                                    food={food}
                                />
                            ))
                        }
                        {
                            !hasMorePages && (
                                <p>No more food items available.</p>
                            )
                        }
                    </div>
                    <div className="mt-4 gap-4 flex justify-center">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className="btn btn-primary mt-4">
                            <MdKeyboardDoubleArrowLeft className="text-2xl"></MdKeyboardDoubleArrowLeft>
                        </button>

                        <button
                            onClick={nextPage}
                            disabled={!hasMorePages}
                            className="btn btn-primary mt-4">
                            <MdKeyboardDoubleArrowRight className="text-2xl"></MdKeyboardDoubleArrowRight>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FoodItems;
