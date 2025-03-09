import { useTravelShowView } from './hooks'
import React, { useState } from 'react'
import CountdownTimer from '@/Pages/Web/Top/components/CountdownTimer'
import { Travel } from '@/types/travel'
import HotelShow from './components/HotelShow'

type Props = {
  travel?: Travel
  days?: any
}

export const TravelShowView = React.memo<Props>(function TravelShowView({
  travel,
  days
}) {
  console.log(travel)
  const { data, setData, post, processing, errors, reset, submit } = useTravelShowView()

  const [activeDay, setActiveDay] = useState<number | null>(null)
  function toggleDay(index: number): void {
    setActiveDay(activeDay === index ? null : index)
  }
  const modalControl = (id: number, opened: boolean) => {
    console.log(id, opened)
    // setModals(prev => {
    //     const data = [...prev]
    //     data.find(modal => modal.id === id)!.isOpen = opened
    //     return data
    // })
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center p-4 font-sans text-[#2B262E]"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${travel?.images?.[0]?.url})`,
      }}
    >
      <header className="mb-8 rounded-lg bg-white bg-opacity-60 p-4 text-center">
        <h1 className="text-3xl font-bold text-[#344699] drop-shadow-md">
          {travel?.title}
        </h1>
        {travel?.memo &&
          <p className="mt-2 text-sm font-medium text-black">
            {travel?.memo}
          </p>
        }
      </header>
      {travel?.count_down_start_time && new Date(travel?.count_down_start_time) > new Date &&
        <div className="mb-8 rounded-lg bg-white bg-opacity-60 p-4 text-center">
          <CountdownTimer targetDate={new Date(travel?.count_down_start_time)} />
        </div>
      }
      <div className="space-y-4">
        {days?.map((day: any, index: number) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg bg-white bg-opacity-60 shadow-lg"
          >
            <button
              className="w-full bg-[#344699] px-4 py-3 text-left font-semibold text-white"
              onClick={() => toggleDay(index)}
            >
              {day.title}
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${activeDay === index ? "max-h-[1000px]" : "max-h-0"}`}
            >
              <ul className="space-y-2 p-4">
                {day.schedule.map((item: any, i: number) => (
                  <li
                    key={i}
                    onClick={() => item.clickable && modalControl(item.target, true)}
                    className="flex items-center justify-between rounded-lg border border-[#344699] bg-[#FBFCFF] p-2 shadow-sm"
                  >
                    <span className="text-sm text-[#2B262E]">{item.time}</span>

                    <div className="flex items-center">
                      <span className="font-medium text-[#2B262E]">
                        {item.activity}
                      </span>
                      {item.clickable && (
                        <img
                          src="/img/top/finger.gif"
                          alt=""
                          className="h-8 w-8 rounded-lg object-cover"
                        />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        {travel?.hotels?.map((hotel, index) => (
          <HotelShow key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  )
})

export default TravelShowView
