import React from 'react';
import { PencilAltIcon } from '@heroicons/react/outline';

const Header = () => {
    const user = {
        name: 'Lawal Oyindamola Habeebah',
        role: 'Bursar',
        image:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      }
      const stats = [
        { label: 'Vacation days left', value: 12 },
        { label: 'Sick days left', value: 4 },
        { label: 'Personal days left', value: 2 },
      ]
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 w-full">
      <div className="rounded-lg bg-white overflow-hidden shadow w-full">
      <h2 className="sr-only" id="profile-overview-title">
        Profile Overview
      </h2>
      <div className="bg-white p-6 w-full">
        <div className="sm:flex sm:items-center sm:justify-between w-full">
          <div className="sm:flex sm:space-x-5 w-full justify-between">
          <div className="sm:flex sm:space-x-5 ">
            <div className="flex-shrink-0">
              <img className="mx-auto h-20 w-20 rounded-full object-cover object-center" src={user?.image} alt="" />
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              {/* <p className="text-sm font-medium text-gray-600">Welcome back,</p> */}
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">{user?.name}</p>
              <p className="text-sm font-medium text-gray-600 capitalize">{user?.role}</p>
            </div>
          </div>
            <div className="sm:flex items-center sm:h-full flex justify-center w-full sm:w-auto">
                <button className="border-2 border-lightBlue-600  bg-lightBlue-600 text-white transform transition-all flex rounded-lg px-6 py-2 hover:scale-105 hover:text-lightBlue-600 hover:bg-white">
                    Edit
                    <PencilAltIcon className="w-6 h-6 ml-3" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
}

export default Header;
