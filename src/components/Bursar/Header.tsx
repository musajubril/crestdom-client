import React from 'react';
import { PencilAltIcon } from '@heroicons/react/outline';
import ModalDialog from "../Dialog"
import TextField from "@mui/material/TextField"

const Header = () => {
  
    const user = {
        name: 'Lawal Oyindamola Habeebah',
        role: 'Bursar',
        image:
          require("../../images/crescent.png"),
      }
      const stats = [
        { label: 'Vacation days left', value: 12 },
        { label: 'Sick days left', value: 4 },
        { label: 'Personal days left', value: 2 },
      ]
      const [open, setOpen] = React.useState<boolean>(false)
      const [state, setState] = React.useState({
        full_name: "",
        email: "",
        phone_number: null
      })
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, [e.target.id]: e.target.value})
      }
      const EditBursar = () => {
        alert(`${state.full_name} updated successfully`)
        console.log(state)
        setOpen(false)
      }
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
              <ModalDialog open={open} setOpen={setOpen} Button={()=>(
                <button className="border-2 border-green-600  bg-green-600 text-white transform transition-all flex rounded-lg px-6 py-2 hover:scale-105 hover:text-green-600 hover:bg-white" onClick={()=>setOpen(true)}>
                    Edit
                    <PencilAltIcon className="w-6 h-6 ml-3" />
                </button>
              )}
              Title="Edit Bursar"
              // Body={()=>(
                
              // )}
              handleSubmit={EditBursar}
              >
                <React.Fragment>
<div className="mb-2 w-full flex items-center flex-col">
<div className=" mb-3 w-full">
Email Address
</div>
<input onChange={handleChange} type="email" className=" lg:h-11 w-full h-7 mx-auto border-gray-400 border-2 placeholder-gray-400 lg:text-sm text-xs pl-4 rounded-lg" placeholder="e.g marydoe@gmail.com" id="email" />
</div>
    <div className="mb-2 w-full flex items-center flex-col">
<div className=" mb-3 w-full">
Full Name
</div>
<input onChange={handleChange} type="text" className=" lg:h-11 w-full h-7 mx-auto border-gray-400 border-2 placeholder-gray-400 lg:text-sm text-xs pl-4 rounded-lg" placeholder="e.g Mary Doe" id="full_name" />
</div>
    <div className="mb-2 w-full flex items-center flex-col">
<div className=" mb-3 w-full">
Phone Number
</div>
<input onChange={handleChange} type="number" className=" lg:h-11 w-full h-7 mx-auto border-gray-400 border-2 placeholder-gray-400 lg:text-sm text-xs pl-4 rounded-lg" placeholder="e.g 2349078044747" id="phone_number" />
</div>
    </React.Fragment>
              </ModalDialog>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
}

export default Header;
