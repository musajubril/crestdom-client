import { login } from 'api/apiCall';
import { SIGN_IN, SIGN_UP } from 'api/apiUrl';
import React from 'react'
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { postRequest } from '../../api/apiCall';

export default function CreateAccountAdmin(props) {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    phone_number: "",
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, [e.target.id]: e.target.value})
  }
  const { mutate } = useMutation(postRequest, {
    onSuccess(data) {
      alert("Admin Account Created Successfully")
      props.history.push("/login", "/login")
    },
    onError(){
      alert("Account creation failed")
    }
  });
  const submitForm = (e: any) => {
    e.preventDefault();
    mutate({
      url: SIGN_UP,
      data: state,
    });
  };
  return (
    <div>
        <div className="w-full h-screen flex font-sans">
  <div className=" w-3/5 h-full lg:flex items-center hidden" style={{backgroundImage: `url(${require("./Rectangle\ 1.png")})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
    <img src={require("./Group 3.png")} alt="" />
  </div>
  <div className="lg:w-2/5 mx-auto h-full items-center justify-center flex flex-col">
    <img src={require("./Group 4.png")} className="lg:hidden block mt-16" alt="" />
    <h1 className="text-center font-bold text-3xl text-black lg:mb-20 lg:mt-0 mt-10 mb-10">
      Sign Up
    </h1>
    <form>
      <div className="mb-5 ">
        <div className=" mb-3">
          Email Address
        </div>
        <input onChange={handleChange} type="text" className=" lg:h-11 lg:w-rectangle w-min_rectangle h-7 mx-auto border-green-500 border-2 placeholder-gray-400 lg:text-sm text-xs pl-4 rounded-lg" placeholder="Example@rocket.mail" id="email" />
      </div>
      <div className="mb-2 ">
        <div className=" mb-3">
          Phone Number
        </div>
        <input onChange={handleChange} type="number" className=" lg:h-11 lg:w-rectangle w-min_rectangle h-7 mx-auto border-gray-400 border-2 placeholder-gray-400 lg:text-sm text-xs pl-4 rounded-lg" placeholder="e.g 2349078044747" id="phone_number" />
      </div>
      <div className="mb-2 ">
        <div className=" mb-3">
          Password
        </div>
        <input onChange={handleChange} type="password" className=" lg:h-11 lg:w-rectangle w-min_rectangle h-7 mx-auto border-gray-400 border-2 placeholder-gray-400 lg:text-sm text-xs pl-4 rounded-lg" placeholder="*******" id="password" />
      </div>
      <div className=" mb-6 text-green-500 flex flex-row-reverse font-semibold text-sm cursor-pointer">Forgot Password?</div>
      <div className="bg-green-500 text-white h-11 mlg:x-auto lg:w-rectangle w-min_rectangle h-7 flex items-center justify-center rounded-lg font-semibold text-sm mb-4 cursor-pointer hover:bg-white hover:text-green-500 transform hover:scale-110 transition-all duration-700 border-2 border-green-500" id="submit" onClick={submitForm}>Create Account</div>
      <div className="text-center font-semibold text-sm">
        Have an account? <Link to="/login" className="text-green-500">Sign In</Link>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}
