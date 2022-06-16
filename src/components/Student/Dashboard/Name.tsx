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
    var user = localStorage?.crescent_token ? jwtDecode(localStorage?.crescent_token) : {
        image: "",
        full_name: "User User"
    }
  return (
      <>
    <div className="rounded-lg bg-white overflow-hidden shadow h-full">
      <div className="bg-white p-6 h-full">
        <div className="sm:flex sm:items-center sm:justify-between h-full">
          <div className="sm:flex sm:space-x-5 h-full">
            <div className="flex-shrink-0">
              <img className="mx-auto h-32 w-32 object-contain object-center" src={require("../../images/crescent.png")} alt="" />
              {/* <img className="mx-auto h-20 w-20 object-cover object-center" src={"/img/logo.jpeg"} alt="" /> */}
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left flex-col items-center justify-center flex">
              {/* <p className="text-sm font-medium text-gray-600">Welcome back,</p> */}
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">{"Crescent University Abeokuta"}</p>
              <p className="text-sm font-medium text-gray-600 capitalize">Here is your summary</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <img className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full" src={person.imageUrl} alt="" />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{person.name}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-sm">{person.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {person.role}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Email</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Call</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
      </>
  )
}
