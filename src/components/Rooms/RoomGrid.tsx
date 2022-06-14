import React from 'react';
import { MailIcon, PhoneIcon, TrashIcon } from "@heroicons/react/solid";
import { PencilAltIcon } from "@heroicons/react/outline";

const RoomGrid = ({rooms}) => {
    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3">
        {rooms?.map((room, i) => (
          <li
            key={i}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-lg transform"
          >
            <div className="flex-1 flex flex-col p-8">
              <img
                className="w-auto h-auto mx-auto bg-green-600"
                src={room.image}
                alt=""
              />
              <h3 className="mt-2 text-gray-900 text-sm font-medium">
                {room.hostel_name} room number {room.room_number}
              </h3>
              <h3 className="mt-1 text-gray-900 text-sm font-medium">
                {room.type}
              </h3>
              <h3 className="mt-1 text-gray-900 text-sm font-medium">
                #{room.price}
              </h3>
              <h3 className="mt-1 text-gray-900 text-sm font-medium">
                Gender: {room.gender}
              </h3>
              <h3 className="mt-1 text-gray-900 text-sm font-medium flex w-full text-center justify-center">
                <span>
                Number in room: {room.number_in_room}
                </span>
                {/* <UsersIcon
                      className="w-5 h-5 text-green-400"
                      aria-hidden="true"
                    /> */}
              </h3>
              <h3 className="mt-1 text-gray-900 text-sm font-medium flex w-full text-center justify-center">
                <span>
                Room Capacity: {room.number_acceptable}
                </span>
                {/* <UsersIcon
                      className="w-5 h-5 text-green-400"
                      aria-hidden="true"
                    /> */}
              </h3>
              <h3 className="mt-1 text-gray-900 text-sm font-medium">
                #{room.price}
              </h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dd className="mt-1">
                    {
                    room.availability ?
                  <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  Available
                  </span>
                  :
                  <span className="px-2 py-1 text-red-800 text-xs font-medium bg-red-100 rounded-full">
                    Not Available
                  </span>
                    }
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="w-0 flex-1 flex">
                  <a
                    href={`mailto:${room.email}`}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-green-700 font-medium border border-transparent rounded-bl-lg hover:text-green-500"
                  >
                    <PencilAltIcon
                      className="w-5 h-5 text-green-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Edit</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href={`tel:${room.telephone}`}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-green-700 font-medium border border-transparent rounded-br-lg hover:text-green-500"
                  >
                    <TrashIcon
                      className="w-5 h-5 text-green-400"
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
