import { useState } from 'react';

const Profile = () => {
    // State to manage edit form visibility and user details
    const [isEditing, setIsEditing] = useState(false);
    const [userDetails, setUserDetails] = useState({
        firstName: 'Md SHiFaT',
        lastName: 'RaHMaN',
        gender: 'Male',
        contactNo: '01724683220',
        currentAddress: 'Boroiya kazirchar, Barishal',
        permanentAddress: 'Muladi, Barishal in Bangladesh',
        email: 'mdshifat@gmail.com',
        birthday: 'Sep 29, 2003',
    });

    // Toggle editing mode
    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    // Handle save action (could also add a submission to an API here)
    const handleSave = () => {
        setIsEditing(false);
        alert('Profile details saved!');
    };

    return (
        <div className="">
            <div className="bg-gray-100 w-full lg:w-10/12 mx-auto mt-[72px]">
                <div className="container mx-auto my-5 p-5">
                    <div className="md:flex no-wrap md:-mx-2 ">
                        {/* Left Side Profile Card */}
                        <div className="w-full md:w-3/12 md:mx-2">
                            <div className="bg-white p-3 border-t-4 border-green-400">
                                <div className="image overflow-hidden">
                                    <img className="h-auto w-full mx-auto"
                                        src="https://i.ibb.co/TcrLQ6K/Whats-App0.jpg"
                                        alt="Profile" />
                                </div>
                                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{userDetails.firstName} {userDetails.lastName}</h1>
                                <h3 className="text-gray-600 font-lg text-semibold leading-6">CEO of FoodStaion</h3>
                                <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                                    I am a passionate full-stack developer with experience in creating scalable web
                                    applications and working with cross-functional teams to deliver high-quality projects.
                                </p>
                                <ul
                                    className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li className="flex items-center py-3">
                                        <span>Status</span>
                                        <span className="ml-auto"><span className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                                    </li>
                                    <li className="flex items-center py-3">
                                        <span>Joined On</span>
                                        <span className="ml-auto">Sep 29, 2024</span>
                                    </li>
                                </ul>
                                {/* Edit Button */}
                                <button
                                    onClick={handleEditClick}
                                    className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    {isEditing ? 'Cancel' : 'Edit Profile'}
                                </button>
                            </div>
                            <div className="my-4"></div>
                        </div>

                        {/* Right Side Profile Details */}
                        <div className="w-full md:w-9/12 mx-2 h-64">
                            <div className="bg-white p-3 shadow-sm rounded-sm">
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span className="text-green-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">About</span>
                                </div>
                                <div className="text-gray-700">
                                    {/* Display Mode */}
                                    {!isEditing ? (
                                        <div className="grid md:grid-cols-2 text-sm">
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">First Name</div>
                                                <div className="px-4 py-2">{userDetails.firstName}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Last Name</div>
                                                <div className="px-4 py-2">{userDetails.lastName}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Gender</div>
                                                <div className="px-4 py-2">{userDetails.gender}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Contact No.</div>
                                                <div className="px-4 py-2">{userDetails.contactNo}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Current Address</div>
                                                <div className="px-4 py-2">{userDetails.currentAddress}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Permanent Address</div>
                                                <div className="px-4 py-2">{userDetails.permanentAddress}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Email</div>
                                                <div className="px-4 py-2">
                                                    <a className="text-blue-800" href={`mailto:${userDetails.email}`}>{userDetails.email}</a>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Birthday</div>
                                                <div className="px-4 py-2">{userDetails.birthday}</div>
                                            </div>
                                        </div>
                                    ) : (
                                        // Edit Mode - Form to update details
                                        <div className="grid md:grid-cols-2 text-sm">
                                            {Object.keys(userDetails).map((key) => (
                                                <div key={key} className="grid grid-cols-2 py-2">
                                                    <label className="px-4 font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                                                    <input
                                                        type="text"
                                                        name={key}
                                                        value={userDetails[key]}
                                                        onChange={handleInputChange}
                                                        className="px-4 py-2 border rounded-md"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Save Button */}
                            {isEditing && (
                                <div className="mt-4">
                                    <button
                                        onClick={handleSave}
                                        className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            )}
                            <div className="my-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
