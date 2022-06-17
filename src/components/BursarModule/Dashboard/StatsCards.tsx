import React from "react"
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import { UserGroupIcon, UsersIcon, OfficeBuildingIcon, HomeIcon, ClipboardListIcon, UserIcon, CashIcon, CheckCircleIcon } from '@heroicons/react/outline'
import {Link} from "react-router-dom"
import DoughnutChart from "components/DoughnutChart"
import { Doughnut } from "react-chartjs-2"
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

export default function StatsCards({data}) {

  const stats = [
    { href: `#`,id: 2, name: 'Sent From Admin', stat: data?.sent, icon: ClipboardListIcon},
    { href: `#`,id: 2, name: 'Verified', stat: data?.verified, icon: CheckCircleIcon},
    { href: `#`,id: 3, name: 'Total Booking Price', stat: `# ${data?.bookingPrice}`, icon: CashIcon},
    { href: `#`,id: 3, name: 'Total Private Room Price', stat: `# ${data?.privatePrice}`, icon: CashIcon},
    { href: `#`,id: 3, name: 'Total General Room Price', stat: `# ${data?.generalPrice}`, icon: CashIcon},
    { href: `#`,id: 3, name: 'Total Price', stat: `# ${data?.totalPrice}`, icon: CashIcon},
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
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden transform transition-all hover:scale-105 duration-500 hover:shadow-lg"
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
    <div className="grid grid-cols-1 gap-5 my-5 sm:grid-cols-2">
    
      <DoughnutChart
        paymentA={data?.bookingPrice}
        paymentB={Number(data?.totalPrice) - Number(data?.bookingPrice)}
        paymentALabel={"Total Booking"}
        paymentBLabel="Revenue To Be Generated"
      />
      <DoughnutChart
        paymentA={data?.privatePrice}
        paymentB={data?.generalPrice}
        paymentALabel={"Total Private Room Price"}
        paymentBLabel="Total General Room Price"
      />
    </div>
    </>
  )
}
