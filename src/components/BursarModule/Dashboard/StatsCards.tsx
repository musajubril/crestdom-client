import React from "react"
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import { UserGroupIcon, UsersIcon, OfficeBuildingIcon, HomeIcon, ClipboardListIcon } from '@heroicons/react/outline'
import {Link} from "react-router-dom"

export default function StatsCards() {

  const stats = [
    { href: `#`,id: 1, name: 'Total Rooms', stat: "500", icon: HomeIcon},
    { href: `#`,id: 2, name: 'Total Bookings', stat: "950", icon: ClipboardListIcon},
    { href: `#`,id: 3, name: 'Available Slots', stat: "1050", icon: HomeIcon},
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
    <div>
      <div className="pt-5" />

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-green-500 rounded-md p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate font-dosis">{item.name}</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900 font-dosis">{item.stat}</p>
              <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <Link to={item.href} className="font-medium text-green-600 hover:text-green-500">
                  <>
                    {' '}
                    View more<span className="sr-only"> {item.name}</span>
                  </>
                  </Link>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
    </>
  )
}
