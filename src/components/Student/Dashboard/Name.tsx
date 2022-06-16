import React from 'react'
import jwtDecode from 'jwt-decode';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

const people = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]

export default function Name() {
    var user:{full_name: any, gender:any} = localStorage?.crescent_token ? jwtDecode(localStorage?.crescent_token) : {
        full_name: "User User",
        gender: "Male",
    }
  return (
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
    <div className="rounded-lg bg-white overflow-hidden shadow h-full transform transition-all hover:scale-105 duration-500 hover:shadow-lg">
      <div className="bg-white p-6 h-full">
        <div className="sm:flex sm:items-center sm:justify-between h-full">
          <div className="sm:flex sm:space-x-5 h-full">
            <div className="flex-shrink-0">
              <img className="mx-auto h-32 w-32 object-contain object-center" src={require("../../../images/crescent.png")} alt="" />
              {/* <img className="mx-auto h-20 w-20 object-cover object-center" src={"/img/logo.jpeg"} alt="" /> */}
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left flex-col items-center justify-center flex">
              {/* <p className="text-sm font-medium text-gray-600">Welcome back,</p> */}
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">{"Crescent University Abeokuta"}</p>
              {/* <p className="text-sm font-medium text-gray-600 capitalize">Here is your summary</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="rounded-lg bg-white overflow-hidden shadow h-full transform transition-all hover:scale-105 duration-500 hover:shadow-lg">
      <div className="bg-white p-6 h-full">
        <div className="sm:flex sm:items-center sm:justify-between h-full">
          <div className="sm:flex sm:space-x-5 h-full">
            <div className="flex-shrink-0">
              <img className="mx-auto h-32 w-32 object-contain object-center" src={user?.gender === "Male"
                                  ? "https://res.cloudinary.com/jewbreel1/image/upload/v1625737172/jewbreel/sms/male_avatar_c3v0vu.png"
                                  : "https://res.cloudinary.com/jewbreel1/image/upload/v1625737170/jewbreel/sms/female_avatar_pgqx9s.png"} alt="" />
              {/* <img className="mx-auto h-20 w-20 object-cover object-center" src={"/img/logo.jpeg"} alt="" /> */}
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left flex-col items-center justify-center flex">
              {/* <p className="text-sm font-medium text-gray-600">Welcome back,</p> */}
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">{user?.full_name}</p>
              <p className="text-sm font-medium text-gray-600 capitalize">Here is your summary</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  )
}
