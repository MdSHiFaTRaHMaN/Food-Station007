import { useEffect, useState } from "react";

const Deserts = () => {
    const [totalFood, setTotalFood] = useState([]);
    useEffect(() => {
        fetch("https://food-station.onrender.com/Items")
            .then(res => res.json())
            .then(data => setTotalFood(data))
    }, [])
    const thisFood = totalFood.filter(foodMenu => foodMenu.category === "Deserts")
    return (
        <section className="text-gray-600 body-font w-full lg:w-10/12 mx-auto">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        thisFood.map(food => (
                            <div className="p-4 md:w-1/3 shadow-xl" key={food._id}>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={food.image} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{food.category}</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{food.name}</h1>
                                        <p className="leading-relaxed mb-3">{food.description}</p>
                                        <div className="flex justify-between items-center flex-wrap ">
                                            <a className="text-indigo-500  md:mb-2 lg:mb-0">$ {food.price}
                                            </a>
                                            <button 
                                            className="btn btn-outline btn-secondary">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Deserts;