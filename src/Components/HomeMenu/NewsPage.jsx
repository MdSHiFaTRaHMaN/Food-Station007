import { useState } from 'react';

const NewsPage = () => {
    // Mock list of food-related news articles
    const [articles] = useState([
        {
            id: 1,
            title: 'The Rise of Plant-Based Diets: A Comprehensive Guide',
            description: 'Explore the health benefits and environmental impact of adopting a plant-based diet. Learn how to get started and find delicious recipes.',
            image: "https://i.ibb.co.com/RyJJDrR/n1.jpg",
            category: 'Health',
            date: 'September 22, 2024',
        },
        {
            id: 2,
            title: 'Top 10 Street Foods to Try Around the World',
            description: 'From Bangkok to Mexico City, discover the most iconic street foods you must try when traveling.',
            image: 'https://i.ibb.co.com/Q6X0085/n2.jpg',
            category: 'Travel',
            date: 'August 18, 2024',
        },
        {
            id: 3,
            title: 'Sustainable Cooking: Tips for Reducing Food Waste',
            description: 'Learn how to cook sustainably and reduce food waste with these practical tips from top chefs.',
            image: 'https://i.ibb.co.com/GPc6TQT/n3.jpg',
            category: 'Sustainability',
            date: 'July 30, 2024',
        },
    ]);

    return (
        <div className="w-full lg:w-10/12 mt-[72px] mx-auto p-4 bg-gray-100 shadow-lg rounded-md">
            <h1 className="text-4xl font-bold text-center text-green-600 mb-8">Food News and Articles</h1>

            {/* News Articles List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                    <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        {/* Article Image */}
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-48 object-cover"
                        />
                        {/* Article Content */}
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-green-800">{article.title}</h2>
                            <p className="text-gray-600 mt-2">{article.description}</p>
                            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                                <span>Category: {article.category}</span>
                                <span>{article.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" w-full lg:w-8/12 mx-auto mt-7 overflow-hidden bg-white rounded-lg shadow-md ">
                <img className="object-cover w-full h-64" src="https://i.ibb.co.com/chBq2WD/Screenshot-2024-09-29-124901.png" alt="Article" />

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase ">Upcoming Desh</span>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform  hover:text-gray-600 hover:underline"  role="link">I Built A Successful Blog In One Year</a>
                        <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img className="object-cover h-10 rounded-full" src="https://i.ibb.co.com/TcrLQ6K/Whats-App0.jpg" alt="Avatar" />
                                <a href="#" className="mx-2 font-semibold text-gray-700 " role="link">SHiFaT RaHMaN</a>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 ">21 SEP 2015</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
