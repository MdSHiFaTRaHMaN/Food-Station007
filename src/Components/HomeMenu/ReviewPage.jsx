import { useState } from 'react';

const ReviewPage = () => {
    // State to store reviews and form input
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({
        name: '',
        reviewText: '',
        rating: 0, // Ensure this starts at 0, indicating no rating selected
    });

    // Handle input change for form fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    // Handle rating selection
    const handleRatingChange = (rating) => {
        setNewReview({ ...newReview, rating });
        console.log("Rating selected:", rating); // Debug: check rating value in console
    };

    // Handle form submission to add a new review
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Check if all required fields are filled
        if (newReview.name && newReview.reviewText && newReview.rating) {
            setReviews([...reviews, newReview]); // Add new review to the list
            console.log("New Review Added:", newReview); // Debug: log the added review
            setNewReview({ name: '', reviewText: '', rating: 0 }); // Reset form fields
        } else {
            alert('Please fill in all fields and select a rating.');
        }
    };

    return (
        <div className="w-full lg:w-10/12 mt-[72px] mx-auto bg-white shadow-lg rounded-md">
            {/* Review Form Section */}
            <div className=" bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
                <div className="py-3 sm:max-w-xl sm:mx-auto">
                    <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
                        <div className="px-12 py-5">
                            <h2 className="text-gray-800 text-3xl font-semibold">Your opinion matters to us!</h2>
                        </div>
                        <div className="bg-gray-200 w-full flex flex-col items-center">
                            <div className="flex flex-col items-center py-6 space-y-3">
                                <span className="text-lg text-gray-800">How was quality of the call?</span>
                                <div className="flex space-x-3">
                                    {/* Rating Selection */}
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            className={`w-12 h-12 rounded-full focus:outline-none ${newReview.rating >= star ? 'text-yellow-500' : 'text-gray-500'
                                                }`}
                                            onClick={() => handleRatingChange(star)}
                                        >
                                            <svg
                                                className="w-full h-full"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {/* Review Input Field */}
                            <div className="w-3/4 flex flex-col">
                                <input
                                    id="name"
                                    name="name"
                                    value={newReview.name}
                                    onChange={handleInputChange}
                                    placeholder="Your Name"
                                    className="mb-4 p-2 rounded-lg border border-gray-300"
                                />
                                <textarea
                                    id="reviewText"
                                    name="reviewText"
                                    value={newReview.reviewText}
                                    onChange={handleInputChange}
                                    rows="3"
                                    className="p-4 text-gray-500 rounded-xl resize-none"
                                    placeholder="Leave a message, if you want"
                                />
                                <button
                                    onClick={handleFormSubmit}
                                    className="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white"
                                >
                                    Rate now
                                </button>
                            </div>
                        </div>
                        {/* <div className="h-20 flex items-center justify-center">
                            <a href="#" className="text-gray-600">Maybe later</a>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Review List Section */}
            <h3 className="text-xl font-bold text-center mt-8 mb-4">Customer Reviews</h3>
            {reviews.length > 0 ? (
                <div className="space-y-4">
                    {reviews.map((review, index) => (
                        <div key={index} className="border p-4 rounded-md shadow-sm">
                            <div className="flex items-center justify-between">
                                <div className='flex gap-2 rounded-sm'>
                                    <div>
                                        <img className='w-20' src="https://i.ibb.co.com/TcrLQ6K/Whats-App0.jpg" alt="" />
                                    </div>
                                    <div>
                                    <h4 className="text-lg font-semibold">{review.name}</h4>
                                    <p className="text-gray-600">{review.reviewText}</p>
                                    </div>
                                </div>
                                <div className="text-yellow-400">
                                    {'⭐'.repeat(review.rating)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No reviews yet. Be the first to leave a review!</p>
            )}
        </div>
    );
};

export default ReviewPage;
