import React from 'react';
import { MailIcon, PhoneIcon, TrashIcon, ShoppingCartIcon, UsersIcon } from "@heroicons/react/solid";
import { PencilAltIcon, CheckIcon } from '@heroicons/react/outline';
import ModalDialog from 'components/Dialog';

const RoomGrid = ({rooms, showType}) => {
  const bookedStatus = rooms.filter(room=>room.bookedStatus)
  console.log(bookedStatus.length)
  const [open, setOpen] = React.useState(false)
  const [title, setTitle] = React.useState("")
    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rooms?.map((room,i) => (
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
              <h3 className="mt-3 text-gray-900 text-sm font-medium">
                {room.hostel_name} room number {room.room_number}
              </h3>
              {
                showType && 
              <h3 className="mt-1 text-gray-900 text-sm font-medium">
                {room.type}
              </h3>
              }
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
                {/* <div className="w-0 flex-1 flex">
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
                </div> */}
                <div className="-ml-px w-0 flex-1 flex transition-all duration-500 rounded-b-l-lg">
                <ModalDialog
                open={open}
                handleSubmit={""}
                setOpen={setOpen}
                Title={title}
                Button={()=>(
                  <>
                  {
                    room.bookedStatus ?
                  <button
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-red-600 bg-white font-medium border border-transparent rounded-br-lg hover:text-white hover:bg-red-500  transition-all duration-500 rounded-b-l-lg cursor-pointer" 
                  disabled={bookedStatus.length}
                  >
                    <CheckIcon
                      className="w-5 h-5"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Booked</span>
                  </button>
                  :
                  <button
                  disabled={bookedStatus.length}
                  onClick={()=>{
                    setOpen(true)
                    setTitle(`Book ${room.hostel_name} room number ${room.room_number}`)
                  }}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-green-600 bg-white font-medium border border-transparent rounded-br-lg hover:text-white hover:bg-green-500  transition-all duration-500 rounded-b-l-lg cursor-pointer"
                  >
                    <ShoppingCartIcon
                      className="w-5 h-5"
                      aria-hidden="true"
                      />
                    <span className="ml-3">Book</span>
                  </button>
                  }
                  </>
                )}
                >
                  Afa
                </ModalDialog>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
}

export default RoomGrid;
