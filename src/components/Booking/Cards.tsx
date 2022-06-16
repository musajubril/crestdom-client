/* This example requires Tailwind CSS v2.0+ */
import { ExternalLinkIcon, DotsCircleHorizontalIcon } from '@heroicons/react/outline'
import {Link} from "react-router-dom"
import React from 'react'


export default function Cards({students, school, send}) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {students?.map((student) => (
        <li key={student.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium">{student.full_name}</h3>
                {
                  !student.verified && 
                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-red-800 text-xs font-medium bg-red-100 rounded-full">
                  Not Verified
                </span>
                }
                {
                  student.verified && 
                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  Verified
                </span>
                }
              </div>
              <p className="mt-1 text-gray-500 text-sm">{student.email}</p>
              <p className="mt-1 text-gray-500 text-sm">{student.matric_number}</p>
              <p className="mt-1 text-gray-500 text-sm w-full flex flex-wrap wrap">{student.hostel_name} room number {student.room_number}</p>
            </div>
            <img className="w-16 h-16 object-center object-cover bg-gray-300 rounded-full flex-shrink-0" src={student.image ? student.image : student.gender === "Male" ? "https://res.cloudinary.com/jewbreel1/image/upload/v1625737172/jewbreel/sms/male_avatar_c3v0vu.png" : "https://res.cloudinary.com/jewbreel1/image/upload/v1625737170/jewbreel/sms/female_avatar_pgqx9s.png"} alt="" />
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
            <a
              href={`${student?.proof_of_payment_school_fee}`}
              target="_blank"
              className="-ml-px w-0 flex-1 flex sm:hidden">
              <>
                <div
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <ExternalLinkIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">School Fee</span>
                </div>
              </>
              </a>
            <a 
              target="_blank"
            href={`${student?.proof_of_payment_hostel_fee}`}
             className="-ml-px w-0 flex-1 flex sm:hidden">
              <>
                  <div
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
  <>
  <ExternalLinkIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
  <span className="ml-3">Hostel Fee</span>
  </>

                </div>
              </>
              </a>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
            <div className="-ml-px w-0 flex-1 flex sm:hidden">
              <>
                  <button
                    onClick={()=>send(student?._id)}
                    disabled={student.send_to_bursar}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                {
                  student.send_to_bursar ? 
                  (
                    <>
                    <DotsCircleHorizontalIcon className="w-5 h-5  text-green-600" aria-hidden="true" />
                    <span className="ml-3 text-green-600">Sent To Bursar</span>
                    </>

)
:
(
  <>
  <ExternalLinkIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
  <span className="ml-3">Send To Bursar</span>
  </>

                  )
                }
                </button>
              </>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
