import jwtDecode from 'jwt-decode'
import React from 'react'

export default function Data() {
    const user:{
email: any,
account_type: any,
full_name: any,
matric_number: any,
jamb_number: any,
gender: any,
    } = localStorage?.crescent_token ? jwtDecode(localStorage?.crescent_token) : {
        email: '',
account_type: '',
full_name: '',
matric_number: '',
jamb_number: '',
gender: '',
    }
    const stats = [
        {name:"Email Address",stat: user.email},
                    {name:"Matric Number",stat: user.matric_number ? user.matric_number : ""},
                    {name:"Jamb REG Number",stat: user.jamb_number ? user.jamb_number : ""},
                    {name:"Gender",stat: user.gender}
      ]
  return (
    <div>
      {/* <h3 className="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3> */}
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 transform transition-all hover:scale-105 duration-500 hover:shadow-lg">
            <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
            <dd className="mt-1 font-semibold text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
