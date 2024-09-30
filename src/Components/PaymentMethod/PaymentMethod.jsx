import { useState } from 'react';
import BkashForm from './BkashPay';
import CreditCard from './CreditCard';
import PaypalPay from './PaypalPay';
import { FaCcPaypal } from 'react-icons/fa';
import { MdMobileFriendly } from 'react-icons/md';

const PaymentMethod = () => {
    const [activeTab, setActiveTab] = useState('Credit Card'); // Default active tab

    // Function to handle tab changes
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };


    return (
        <section className="text-Black w-10/12 mx-auto body-font relative">
            <div className='flex mt-[72px]'>
                <div className="container w-3/6 px-5 py-24 mx-auto grid">
                    <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap ">
                        {/* Credit Card Tab */}
                        <button
                            onClick={() => handleTabChange('Credit Card')}
                            className={`inline-flex items-center h-10 px-2 py-2 -mb-px text-center ${activeTab === 'Credit Card' ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-700 border-b-2 border-transparent'
                                } sm:px-4 -px-1 whitespace-nowrap focus:outline-none`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                            </svg>
                            <span className="mx-1 text-sm sm:text-base">Credit Card</span>
                        </button>

                        {/* Bkash Tab */}
                        <button
                            onClick={() => handleTabChange('Bkash')}
                            className={`inline-flex items-center h-10 px-2 py-2 -mb-px text-center ${activeTab === 'Bkash' ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-700 border-b-2 border-transparent'
                                } sm:px-4 -px-1 whitespace-nowrap focus:outline-none`}
                        >
                            <MdMobileFriendly />
                            <span className="mx-1 text-sm sm:text-base">Bkash</span>
                        </button>

                        {/* PayPal Tab */}
                        <button
                            onClick={() => handleTabChange('PayPal')}
                            className={`inline-flex items-center h-10 px-2 py-2 -mb-px text-center ${activeTab === 'PayPal' ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-700 border-b-2 border-transparent'
                                } sm:px-4 -px-1 whitespace-nowrap focus:outline-none`}
                        >
                            <FaCcPaypal />
                            <span className="mx-1 text-sm sm:text-base">PayPal</span>
                        </button>
                    </div>
                    {/* You can add content specific to each tab below */}
                    <div className="">
                        {activeTab === 'Credit Card' && <CreditCard></CreditCard>}
                        {activeTab === 'Bkash' && <div><BkashForm></BkashForm></div>}
                        {activeTab === 'PayPal' && <div><PaypalPay></PaypalPay></div>}
                    </div>
                </div>
                <div className="lg:w-5/12 md:w-1/2 bg-white flex flex-col md:ml-auto w-full px-6 md:py-8 mt-20 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Delivary Address</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Please give me your present Address</p>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Your Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Mobile Number</label>
                        <input type="number" id="number" name="numder" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Your Address</label>
                        <textarea id="message" name="message"
                            placeholder="Distict: ..../Zilla:..../Home"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Pay Now</button>
                </div>
            </div>
        </section>
    );
};

export default PaymentMethod;
