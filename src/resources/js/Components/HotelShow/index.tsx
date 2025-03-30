import React, { useState } from 'react'
import { Hotel } from '@/types/hotel'

type Props = {
  hotel: Hotel
}

export const HotelShow = React.memo<Props>(function HotelShow({
  hotel
}) {

  return (
    <div className="mb-8 rounded-lg bg-white bg-opacity-60 p-4 text-center">
      <h2 className="text-3xl font-bold text-[#344699] drop-shadow-md">
        旅館情報
      </h2>
      <>
        <div className="mb-4 mt-2 flex items-center justify-center text-xl font-bold text-gray-800 ">{hotel.name}</div>
        <div className="grid  gap-4">
          <div className="cursor-pointer">
            <a href={hotel?.url} target="_blank" rel="noopener noreferrer">
              <img
                src={hotel.images?.[0]?.url}
                className="h-auto w-full rounded-lg object-cover shadow-lg transition-shadow hover:shadow-xl"
              />
            </a>
            <div className="flex items-center justify-center pt-2 text-xs font-bold text-blue-500">
              <a
                href={hotel?.accessUrl}
                target="_blank" rel="noreferrer"
              >
                アクセス
              </a>
            </div>
          </div>
          {hotel.address && <p className='text-xs'>住所：{hotel.address}</p>}
        </div>
      </>
    </div>
  )
})

export default HotelShow
