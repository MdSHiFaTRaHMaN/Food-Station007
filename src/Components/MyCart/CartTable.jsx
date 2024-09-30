import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

const CartTable = ({ cartData, refetch }) => {
    // Destructure cart data
    const { _id, name, image, price } = cartData;

    // State for quantity and total price
    const [quantity, setQuantity] = useState(cartData.quantity || 1); // Default quantity from cartData
    const [totalPrice, setTotalPrice] = useState(price * quantity);

    // Recalculate total price whenever quantity changes
    useEffect(() => {
        setTotalPrice(price * quantity);
    }, [quantity, price]);

    // Increment quantity
    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    // Decrement quantity (ensuring quantity doesn't go below 1)
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    // Handle remove item
    const handleRemove = () => {
        // Implement remove functionality based on your application logic
        console.log("Remove item with ID:", _id);
        refetch(); // Optionally refetch the cart data if needed
    };

    return (
        <tbody>
            <tr>
                {/* Product Name and Image */}
                <td className="px-2 md:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10">
                            <img className="w-full h-full rounded-sm" src={image} alt={name} />
                        </div>
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">{name}</p>
                        </div>
                    </div>
                </td>

                {/* Price */}
                <td className="px-2 md:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">$ {price}</p>
                </td>

                {/* Quantity Control */}
                <td className="px-2 md:px-5 py-5 border-b flex border-gray-200 bg-white text-sm">
                    {/* Decrement Button */}
                    <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                        onClick={handleDecrement}
                    >
                        <span className="sr-only">Decrease quantity</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" d="M1 1h16" />
                        </svg>
                    </button>

                    {/* Quantity Input */}
                    <div>
                        <input
                            type="number"
                            value={quantity}
                            readOnly
                            className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1"
                        />
                    </div>

                    {/* Increment Button */}
                    <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                        onClick={handleIncrement}
                    >
                        <span className="sr-only">Increase quantity</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </td>

                {/* Total Price */}
                <td className="px-2 md:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">$ {totalPrice}</p>
                </td>

                {/* Remove Button */}
                <td className="px-2 md:px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight cursor-pointer"
                        onClick={handleRemove}
                    >
                        <span aria-hidden className="absolute inset-0 bg-red-700 rounded-full"></span>
                        <span className="relative text-white cursor-pointer">
                            <RxCross2 />
                        </span>
                    </span>
                </td>
            </tr>
        </tbody>
    );
};

export default CartTable;
