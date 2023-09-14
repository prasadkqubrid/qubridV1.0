import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import notification from '../assets/notification.png'
import { MdClose } from 'react-icons/md';
import User from '../assets/User.png'


function Navbar() {
    const [showProfile_, setShowProfile_] = useState(false);
    const handleUserClick_ = () => {
        setShowProfile_(!showProfile_);
    }

    return (
        <div className="fixed top-0 z-10 w-fill-available bg-page-bg-color shadow">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-2 px-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1 ml-6">
                        <form className='w-1/2'>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900  rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search" required />
                                {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button> */}
                            </div>
                        </form>
                </div>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <div className='w-8 cursor-pointer mx-2'>
                            <img src={notification} alt='notification' />
                        </div>
                        <div className="relative">
                            <div className='w-8 cursor-pointer mx-2' onClick={handleUserClick_}>
                                <img src={User} alt='notification' />
                            </div>
                            {showProfile_ && (
                                <div className="absolute top-0 right-0 mt-12 w-96 bg-white rounded shadow-lg">
                                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                                        <div className="flex justify-end px-4 pt-4">
                                            <button onClick={handleUserClick_}>
                                                <MdClose className='w-6 h-6 font-semibold rounded-full hover:bg-gray-200'/>
                                            </button>
                                        </div>
                                        <div className="flex flex-col items-center pb-10">
                                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={User} alt="Bonnie_image" />
                                            <h5 className="mb-1 text-xl font-medium text-gray-900">Saurabh Kushwaha</h5>
                                            <span className="text-sm text-gray-500">Developer</span>
                                            <div className="flex mt-4 space-x-3 md:mt-6">
                                                <Link className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</Link>
                                                <Link className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar