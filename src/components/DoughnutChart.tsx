import React from "react"
import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

export default function DoughnutChart({paymentA, paymentB, paymentALabel, paymentBLabel}) {
  const [chart, setChart] = React.useState({
    labels: [
      `Total Booking: #${paymentA}`,
      `${paymentBLabel}: #${paymentB}`,
    ],
    datasets: [{
      data: [paymentA, paymentB],
      backgroundColor: [
      '#dc2626',
      '#059669',
      ],
      hoverBackgroundColor: [
      '#bb1d1d',
      '#076548',
      ]
    }]
  })
  React.useEffect(()=> {
    setChart({
      labels: [
        `Total Booking: #${paymentA}`,
        `${paymentBLabel}: #${paymentB}`,
      ],
      datasets: [{
        data: [paymentA, paymentB],
        backgroundColor: [
        '#dc2626',
        '#059669',
        ],
        hoverBackgroundColor: [
        '#bb1d1d',
        '#076548',
        ]
      }]
    })
  },[paymentA, paymentALabel, paymentB, paymentBLabel])
  return (
    <>
    <div
      className="relative bg-white p-5 px-4 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden h-auto w-auto"
    >
    <>
      <h2 className="text-xl leading-6 font-medium text-gray-900">Price Chart</h2>
      <Doughnut
        data={chart}
        width={200}
        height={200}
      />
    </>
    </div>
    </>
  )
}
