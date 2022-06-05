import React from 'react';
import { MailIcon, PhoneIcon, TrashIcon } from "@heroicons/react/solid";
import { PencilAltIcon } from "@heroicons/react/outline";

const RoomGrid = ({people}) => {
    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {people.map(person => (
          <li
            key={person.email}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div className="flex-1 flex flex-col p-8">
              <img
                className="w-auto h-auto mx-auto bg-lightBlue-600"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-3 text-gray-900 text-sm font-medium">
                {person.hostel_name} room number {person.room_number}
              </h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dd className="mt-1">
                  <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                    {person.availability}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="w-0 flex-1 flex">
                  <a
                    href={`mailto:${person.email}`}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-lightBlue-700 font-medium border border-transparent rounded-bl-lg hover:text-lightBlue-500"
                  >
                    <PencilAltIcon
                      className="w-5 h-5 text-lightBlue-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Edit</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href={`tel:${person.telephone}`}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-lightBlue-700 font-medium border border-transparent rounded-br-lg hover:text-lightBlue-500"
                  >
                    <TrashIcon
                      className="w-5 h-5 text-lightBlue-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Delete</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
}

export default RoomGrid;
