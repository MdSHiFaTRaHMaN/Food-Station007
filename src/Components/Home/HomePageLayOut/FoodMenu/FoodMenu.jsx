import { Link } from 'react-router-dom'
import Img1 from '../../../../Images/menu_1.png'
import Img2 from '../../../../Images/menu_2.png'
import Img3 from '../../../../Images/menu_3.png'
import Img4 from '../../../../Images/menu_4.png'
import Img5 from '../../../../Images/menu_5.png'
import Img6 from '../../../../Images/menu_6.png'
import Img7 from '../../../../Images/menu_7.png'
import Img8 from '../../../../Images/menu_8.png'

const FoodMenu = () => {
    return (
        <div>
            <section className="text-gray-600 body-font sm:mx-5 lg:mx-28">
                <div className="container px-5 py-2 lg:py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Explore our menu</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
                    </div>
                    <div className='sm:grid sm:grid-cols-3 lg:flex gap-5 sm:overflow-x-auto'>
                        <Link to='/salad'>
                            <div className='shadow-xl bg-white p-3 rounded-md'>
                                <img src={Img1} alt="" className='mx-auto' />
                                <h1 className='text-center text-lg font-semibold'>Salad</h1>
                            </div>
                        </Link>
                        <Link to='/rolls'>
                            <div className='shadow-xl bg-white p-3 rounded-md'>
                                <img src={Img2} alt="" className='mx-auto' />
                                <h1 className='text-center text-lg font-semibold'>Rolls</h1>
                            </div>
                        </Link>
                        <Link to='/deserts'>
                            <div className='shadow-xl bg-white p-3 rounded-md'>
                                <img src={Img3} alt="" className='mx-auto' />
                                <h1 className='text-center text-lg font-semibold'>Deserts</h1>
                            </div>
                        </Link>
                        <Link to='/sandwich'>
                            <div className='shadow-xl bg-white p-3 rounded-md'>
                                <img src={Img4} alt="" className='mx-auto' />
                                <h1 className='text-center text-lg font-semibold'>Sandwich</h1>
                            </div>
                        </Link>
                        <Link to='/cake'>
                            <div className='shadow-xl bg-white p-3 rounded-md'>
                                <img src={Img5} alt="" className='mx-auto' />
                                <h1 className='text-center text-lg font-semibold'>Cake</h1>
                            </div>
                        </Link>
                        <Link to='/pureveg'>
                            <div className='shadow-xl bg-white p-3 rounded-md'>
                                <img src={Img6} alt="" className='mx-auto' />
                                <h1 className='text-center text-lg font-semibold'>Pure veg</h1>
                            </div>
                        </Link>
                        <Link to='/pasta'>
                            <div className='shadow-xl bg-white p-3 rounded-md'>
                                <img src={Img7} alt="" className='mx-auto' />
                                <h1 className='text-center text-lg font-semibold'>Pasta</h1>
                            </div>
                        </Link>
                        <Link to='/noodles'>
                            <div className='shadow-xl bg-white p-3 rounded-md'>
                                <img src={Img8} alt="" className='mx-auto' />
                                <h1 className='text-center text-lg font-semibold'>Noodles</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FoodMenu;