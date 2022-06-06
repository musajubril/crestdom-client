import React from 'react'

export default function CreateAccountStudent() {
    // { password, email, phone_number, full_name, matric_number, jamb_number, gender }
  return (
    <div className="min-h-screen">
        <div className="w-full lg:h-screen flex font-sans">
  <div className=" w-3/5 h-full lg:flex items-center hidden" style={{backgroundImage: `url(${require("./Rectangle\ 1.png")})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
    <img src={require("./Group 3.png")} alt="" />
  </div>
  <div className="lg:w-2/5 mx-auto h-full items-center justify-center flex flex-col">
    <img src={require("./Group 4.png")} className="lg:hidden block mt-16" alt="" />
    <h1 className="text-center font-bold text-3xl text-black lg:mb-20 lg:mt-0 mt-10 mb-10">
      Sign In
    </h1>
    <form>
      <div className="mb-5 ">
        <div className=" mb-3">
          Full name
        </div>
        <input required type="text" className=" lg:h-11 lg:w-rectangle w-min_rectangle h-10 mx-auto border-green-500 border-2 placeholder-gray-400 lg:text-sm text-xs pl-4 rounded-lg" placeholder="e.g John Doe" id="full_name" />
      </div>
      <div className="mb-2 lg:w-rectangle w-min_rectangle lg:flex">
        <div className="lg:w-1/2 w-full mx-auto">
        <div className=" mb-3">
          Email Address
        </div>
        <input required type="email" className=" lg:h-11 lg:w-full  h-10 w-min_rectangle lg:mr-2 mx-auto border-gray-400 border-2 placeholder-gray-400 lg:text-sm text-xs pl-4 rounded-lg" placeholder="e.g johndoe996@gmail.com" id="email" />
        </div>
        <div className="lg:w-1/2 w-full mx-auto">
        <div className=" mb-3">
          Phone Number
        </div>
        <input required type="number" className=" lg:h-11 lg:w-full  h-10 w-min_rectangle lg:ml-2 mx-auto border-gray-400 border-2 placeholder-gray-400 lg:text-sm text-xs pl-4 rounded-lg" placeholder="e.g 2349078044747" id="phone_number" />
        </div>
      </div>
      <div className="mb-2 lg:w-rectangle w-min_rectangle lg:flex">
        <div className="lg:w-1/2 w-full mx-auto">
        <div className=" mb-3">
          Matric Number
        </div>
        <input required type="text" className=" lg:h-11 lg:w-full  h-10 w-min_rectangle lg:mr-2 mx-auto border-gray-400 border-2 placeholder-gray-400 lg:text-sm text-xs pl-4 rounded-lg" placeholder="e.g 200591072" id="matric_number" />
        </div>
        <div className="lg:w-1/2 w-full mx-auto">
        <div className=" mb-3">
          Jamb Number
        </div>
        <input required type="text" className=" lg:h-11 lg:w-full  h-10 w-min_rectangle lg:ml-2 mx-auto border-gray-400 border-2 placeholder-gray-400 lg:text-sm text-xs pl-4 rounded-lg" placeholder="e.g 21593666CF" id="jamb_number" />
        </div>
      </div>
      <div className="mb-2">
      <div className=" mb-3">
          Gender
        </div>
      <select className=" lg:h-11 lg:w-rectangle w-min_rectangle h-10 mx-auto border-green-500 border-2 placeholder-gray-400 lg:text-sm text-xs pl-4 rounded-lg" id="gender">
        <option>Please Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      </div>
      <div className="mb-2 lg:w-rectangle w-min_rectangle lg:flex">
        <div className="lg:w-1/2 w-full mx-auto">
        <div className=" mb-3">
          Password
        </div>
        <input required type="password" className=" lg:h-11 lg:w-full  h-10 w-min_rectangle lg:mr-2 mx-auto border-gray-400 border-2 placeholder-gray-400 lg:text-sm text-xs pl-4 rounded-lg" placeholder="*******" id="password" />
        </div>
        <div className="lg:w-1/2 w-full mx-auto">
        <div className=" mb-3">
          Confirm Password
        </div>
        <input required type="password" className=" lg:h-11 lg:w-full  h-10 w-min_rectangle lg:ml-2 mx-auto border-gray-400 border-2 placeholder-gray-400 lg:text-sm text-xs pl-4 rounded-lg" placeholder="*******" id="confirm_password" />
        </div>
      </div>
      <div className=" mb-6 text-green-500 flex flex-row-reverse font-semibold text-sm cursor-pointer">Forgot Password?</div>
      <div className="bg-green-500 text-white h-11 mlg:x-auto lg:w-rectangle w-min_rectangle h-10 flex items-center justify-center rounded-lg font-semibold text-sm mb-4 cursor-pointer hover:bg-white hover:text-green-500 transform hover:scale-110 transition-all duration-700 border-2 border-green-500" id="submit">Login</div>
      <div className="text-center font-semibold text-sm">
        Are you new here? <span className="text-green-500">Sign Up</span>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}
