import React from "react"
// import Crescent from "../../images/crescent.png"-
export default function Greeting() {

  return(
    <div className="rounded-lg bg-white overflow-hidden shadow h-full">
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
              <p className="text-sm font-medium text-gray-600 capitalize">Here is your summary</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
