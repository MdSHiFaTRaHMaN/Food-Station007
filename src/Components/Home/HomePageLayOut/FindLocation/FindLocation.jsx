
const FindLocation = () => {
    return (
        <div className="w-11/12 lg:w-10/12 mx-auto mt-4">
            <section className="bg-white ">
                <div className="max-w-3xl px-6 py-16 mx-auto text-center">
                    <h1 className="text-3xl font-semibold text-gray-800 ">Find us in these cities and many more!</h1>
                    <p className="max-w-md mx-auto mt-5 text-gray-500 ">It's the food and groceries you love, delivered</p>

                    <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
                        <form>
                            <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg  lg:flex-row  focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                                <input className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none   focus:placeholder-transparent" type="location" name="location" placeholder="Search Your Location" aria-label="Enter your email"/>

                                    <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-blue-800 rounded-md hover:bg-green-500 focus:bg-gray-600 focus:outline-none">Find it!</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FindLocation;