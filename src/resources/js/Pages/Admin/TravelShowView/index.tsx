import { useTravelShowView } from './hooks'
import React, { useState } from 'react'
import CountdownTimer from '@/Pages/Web/Top/components/CountdownTimer'
import { Travel } from '@/types/travel'
import ModalView from '@/Components/ModalView'
import HotelShow from '@/Components/HotelShow'

type Props = {
    travel?: Travel
}

export const TravelShowView = React.memo<Props>(function TravelShowView({
    travel,
}) {
    console.log(travel)
    const { data, setData, post, processing, errors, reset, submit } = useTravelShowView()

    const [openModals, setOpenModals] = useState(travel?.modals?.map(v => ({ id: v.id, isOpen: false })) ?? [])

    const [activeDay, setActiveDay] = useState<number | null>(null)
    function toggleDay(index: number): void {
        setActiveDay(activeDay === index ? null : index)
    }
    const modalControl = (id: number, opened: boolean) => {
        console.log(id, opened)
        setOpenModals(prev => {
            const data = [...prev]
            data.find(modal => modal.id === id)!.isOpen = opened
            return data
        })
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
                {travel?.schedule_groups?.map((scheduleGroup) => (
                    <div
                        key={scheduleGroup.id}
                        className="overflow-hidden rounded-lg bg-white bg-opacity-60 shadow-lg"
                    >
                        <button
                            className="w-full bg-[#344699] px-4 py-3 text-left font-semibold text-white"
                            onClick={() => toggleDay(scheduleGroup.id)}
                        >
                            {scheduleGroup.title}
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-500 ${activeDay === scheduleGroup.id ? "max-h-[1000px]" : "max-h-0"}`}
                        >
                            <ul className="space-y-2 p-4">
                                {scheduleGroup?.schedules?.map((schedules, i: number) => (
                                    <li
                                        key={i}
                                        onClick={() => schedules.modal_id !== null && schedules.modal_id !== undefined && modalControl(schedules.modal_id, true)}
                                        className="flex items-center justify-between rounded-lg border border-[#344699] bg-[#FBFCFF] p-2 shadow-sm"
                                    >
                                        <span className="text-sm text-[#2B262E]">{schedules.time_text}</span>

                                        <div className="flex items-center">
                                            <span className="font-medium text-[#2B262E]">
                                                {schedules.title}
                                            </span>
                                            {schedules.modal_id !== null && (
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
            {travel?.modals?.map((modal) => (
                <ModalView
                    key={modal.id}
                    isOpen={openModals.find(openModal => modal.id === openModal.id)?.isOpen ?? false}
                    onClose={() => { modalControl(modal.id, false) }}
                    title={""}
                >
                    <div className="mb-4 flex items-center justify-center text-xl font-bold text-gray-800">{modal.title}</div>
                    <div className="grid grid-cols-2 gap-4">
                        {modal?.cards?.map((card, index) => (
                            <div key={index} className="cursor-pointer">
                                {/* 画像クリックでURLを新しいタブで開く */}
                                <a
                                    href={card.url || undefined} // URLがない場合はundefined
                                    target={card.url ? "_blank" : undefined} // URLがない場合はtargetを無効化
                                    rel={card.url ? "noopener noreferrer" : undefined} // URLがない場合はrelを無効化
                                >
                                    <img
                                        src={card.images?.[0]?.url}
                                        alt={card.title}
                                        className="h-auto w-full rounded-lg object-cover shadow-lg transition-shadow hover:shadow-xl"
                                    />
                                </a>
                                {/* タイトルクリックでURLを新しいタブで開く */}
                                <a
                                    href={card.url || undefined} // URLがない場合はundefined
                                    target={card.url ? "_blank" : undefined} // URLがない場合はtargetを無効化
                                    rel={card.url ? "noopener noreferrer" : undefined} // URLがない場合はrelを無効化
                                    className={`mt-2 block text-center text-sm font-bold ${card.url ? "text-gray-800 underline hover:text-blue-500" : "text-gray-800"}`}
                                    onClick={(e) => {
                                        if (!card.url) {
                                            e.preventDefault() // URLがない場合のクリックを無効化
                                        }
                                    }}
                                >
                                    {card.title}
                                </a>
                                <div className="flex items-center justify-center pt-1 text-xs font-bold text-blue-500">
                                    <a
                                        href={card.accessURL || undefined} // URLがない場合はundefined
                                        target={card.accessURL ? "_blank" : undefined} // URLがない場合はtargetを無効化
                                        rel={card.accessURL ? "noopener noreferrer" : undefined} // URLがない場合はrelを無効化
                                        onClick={(e) => {
                                            if (!card.accessURL) {
                                                e.preventDefault() // URLがない場合のクリックを無効化
                                            }
                                        }}
                                    >
                                        地図アプリ
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </ModalView>
            ))}
        </div>
    )
})

export default TravelShowView
