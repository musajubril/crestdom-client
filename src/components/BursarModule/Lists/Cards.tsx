/* This example requires Tailwind CSS v2.0+ */
import { ExternalLinkIcon, DotsCircleHorizontalIcon } from '@heroicons/react/outline'
import {Link} from "react-router-dom"
import React from 'react'


export default function Cards({students, school}) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {students?.map((student) => (
        <li key={student.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium">{student.full_name}</h3>
                {
                  student.is_verified && 
                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-red-800 text-xs font-medium bg-red-100 rounded-full">
                  Not Verified
                </span>
                }
                {
                  !student.is_verified && 
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
            <Link to={`/${school}/school/student/${student.id}`} className="-ml-px w-0 flex-1 flex sm:hidden">
              <>
                <a
                  href="#"
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <span className="ml-3">View School Fee Receipt</span>
                </a>
              </>
              </Link>
            <Link to={`/${school}/result/${student.id}`} className="-ml-px w-0 flex-1 flex sm:hidden">
              <>
                  <a
                    target="_blank"
                  href={`/${school}/result/${student.id}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
  <>
  <span className="ml-3">View Hostel Receipt</span>
  </>

                </a>
              </>
              </Link>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
            <div className="cursor-pointer -ml-px w-0 flex-1 flex sm:hidden bg-green-600 text-white rounded-bl-lg">
              <>
                <a
                  href="#"
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-white font-medium border border-transparent rounded-br-lg hover:text-white"
                >
                  <span className="ml-3">Verify</span>
                </a>
              </>
              </div>
            <div className="cursor-pointer -ml-px w-0 flex-1 flex sm:hidden bg-red-600 text-white rounded-br-lg">
              <>
                  <a
                    target="_blank"
                  href={`/${school}/result/${student.id}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-white font-medium border border-transparent rounded-br-lg hover:text-white"
                >
  <>
  <span className="ml-3">Reject</span>
  </>

                </a>
              </>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
