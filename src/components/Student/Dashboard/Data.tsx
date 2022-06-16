import { getRequest } from 'api/apiCall'
import { STUDENT_BOOKING } from 'api/apiUrl'
import { queryKeys } from 'api/queryKey'
import jwtDecode from 'jwt-decode'
import React from 'react'
import { useQuery } from 'react-query'

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
      const {
        data
      } = useQuery(
        [queryKeys.getBooking],
        async () => await getRequest({ url: STUDENT_BOOKING }),
        {
          retry: 2,
        }
        )
    const [book, setBook] = React.useState(data?.data)
    React.useEffect(()=>{
        setBook(data?.data)
    },[data?.data])
    console.log(book)
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-5">
      {/* <h3 className="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3> */}
      <div className="col-span-1">
      <div className="rounded-lg bg-white overflow-hidden shadow transform transition-all hover:scale-105 duration-500 hover:shadow-lg">
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
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-1">
        {stats.map((item) => (
            <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 transform transition-all hover:scale-105 duration-500 hover:shadow-lg">
            <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
            <dd className="mt-1 font-semibold text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>
        </div>
        <div className="col-span-1">
            <img className="rounded-lg shadow  transform transition-all hover:scale-105 duration-500 hover:shadow-lg" src={book?.image} alt="" />
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {[
            {name: "Hostel Name", stat:book?.hostel_name},
            {name: "Room Number", stat:book?.room_number},
            {name: "Price", stat:`#${book?.hostel_name}`},
            {name: "Verification Status", stat:book?.verified ? "Verified" : "Not Verified"},
            {name: "Bursar Info", stat:book?.send_to_bursar ? "Sent" : "Not Sent"},
            {name: "Hostel Name", stat:book?.hostel_name}
        ].map((item) => (
            <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 transform transition-all hover:scale-105 duration-500 hover:shadow-lg">
            <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
            <dd className="mt-1 font-semibold text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>
        </div>
        <div className="col-span">
            <img src={book?.proof_of_payment_school_fee} alt="" className="rounded-lg shadow transform transition-all hover:scale-105 duration-500 hover:shadow-lg" />
        </div>
        <div className="col-span">
            <img src={book?.proof_of_payment_hostel_fee} alt="" className="rounded-lg shadow transform transition-all hover:scale-105 duration-500 hover:shadow-lg" />
        </div>
    </div>
  )
}
