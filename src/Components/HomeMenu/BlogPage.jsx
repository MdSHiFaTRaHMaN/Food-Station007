import { useState } from 'react';

const BlogPage = () => {
    // Mock data for the food blog videos
    const [videos, setVideos] = useState([
        {
            id: 1,
            title: 'Delicious Pasta Recipe',
            description: 'Learn how to make a delicious creamy pasta recipe in 15 minutes!',
            videoUrl: 'https://www.youtube.com/embed/DzSSUU37ynQ?si=1hKGF6M5TwV4Pelq',
            thumbnail: 'https://www.youtube.com/embed/DzSSUU37ynQ?si=1hKGF6M5TwV4Pelq',
        },
        {
            id: 2,
            title: 'Healthy Salad Ideas',
            description: 'Quick and easy salad recipes that are both healthy and delicious.',
            videoUrl: 'https://www.youtube.com/embed/kRCH8kD1GD0?si=u9FXoc1aJgc-Ud9k',
            thumbnail: 'https://www.youtube.com/embed/kRCH8kD1GD0?si=u9FXoc1aJgc-Ud9k',
        },
        {
            id: 3,
            title: 'Homemade Pizza',
            description: 'Make the perfect homemade pizza with these simple steps.',
            videoUrl: 'https://www.youtube.com/embed/xPPLbEFbCAo?si=DWlKpIrFf2Ct-Kui',
            thumbnail: 'https://www.youtube.com/embed/xPPLbEFbCAo?si=DWlKpIrFf2Ct-Kui',
        },
        {
            id: 4,
            title: ' Pizza',
            description: 'Make the perfect homemade pizza with these simple steps.',
            videoUrl: 'https://www.youtube.com/embed/lcU3pruVyUw?si=Z9_HwvMhzrd4LTH3',
            thumbnail: 'https://www.youtube.com/embed/lcU3pruVyUw?si=Z9_HwvMhzrd4LTH3',
        }
    ]);

    return (
        <div className="w-full mt-[72px] max-w-7xl mx-auto p-4 bg-white shadow-lg rounded-md">
            {/* Hero Section: Featured Video */}
            <section className="mb-8">
                <h1 className="text-5xl font-bold text-center text-red-600 mb-6">Welcome to Our Food Blog</h1>
                <div className="relative mb-6">
                    <iframe
                        className="w-full lg:w-8/12 mx-auto  lg:h-96 rounded-md shadow-md"
                        src={videos[0].videoUrl}
                        title={videos[0].title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <h2 className="text-3xl font-semibold text-center">{videos[0].title}</h2>
                <p className="text-lg text-center text-gray-700">{videos[0].description}</p>
            </section>

            {/* Video Blog Grid */}
            <section>
                <h3 className="text-4xl font-semibold text-blue-600 mb-4">Latest Food Blogs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos.slice(1).map((video) => (
                        <div key={video.id} className="border rounded-md overflow-hidden shadow-lg bg-white">
                            {/* Video Thumbnail */}
                            <iframe
                                className="w-11/12 mx-auto rounded-md shadow-md"
                                src={videos[0].videoUrl}
                                title={videos[0].title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            {/* Video Info */}
                            <div className="p-4">
                                <h4 className="text-2xl font-semibold">{video.title}</h4>
                                <p className="text-gray-600 mb-4">{video.description}</p>
                                <a
                                    href={video.videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    Watch Video &rarr;
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
