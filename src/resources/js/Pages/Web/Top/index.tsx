import React, { useState } from "react"

export const Top: React.FC = () => {
    const [activeDay, setActiveDay] = useState<number | null>(null)

    const days = [
        {
            title: "1日目",
            schedule: [
                { time: "09:05-13:10", activity: "バス移動(新宿)" },
                { time: "13:10-15:00", activity: "食べ歩き" },
                { time: "15:00", activity: "チェックイン" },
                { time: "15:00-17:30", activity: "ゆったりぶらぶら" },
                { time: "17:30", activity: "夕食！" },
                { time: "18:30-18:45", activity: "移動" },
                { time: "19:00-21:00", activity: "星空ウォーク" },
                { time: "22:00", activity: "夜鳴きそば！" },
            ],
        },
        {
            title: "2日目",
            schedule: [
                { time: "9:00", activity: "朝ごはん！" },
                { time: "11:00", activity: "動物園" },
                { time: "14:00-15:00", activity: "陶芸体験" },
                { time: "17:30", activity: "夕食！" },
                { time: "22:00", activity: "夜鳴きそば！" },
            ],
        },
        {
            title: "3日目",
            schedule: [
                { time: "9:00", activity: "朝ごはん" },
                { time: "11:00", activity: "草津ぶーらぶら" },
                { time: "16:00-20:10", activity: "バスで帰り" },
            ],
        },
    ]

    const toggleDay = (index: number) => {
        setActiveDay(activeDay === index ? null : index)
    }

    return (
        // <div className="min-h-screen bg-[#FBFCFF] bg-cover bg-center p-4 font-sans text-[#2B262E]" style={{ backgroundImage: "https://user0514.cdnw.net/shared/img/thumb/zubo25_DSC08065_TP_V.jpg" }}>
        <div
            className="relative min-h-screen bg-cover bg-center p-4 font-sans text-[#2B262E]"
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('img/top/top.jpg')`,
            }}
        >
            {/* Header */}
            <header className="mb-8 rounded-lg bg-white bg-opacity-60 p-4 text-center">
                <h1 className="text-3xl font-bold text-[#344699] drop-shadow-md">
                    草津冒険の3日間
                </h1>
                <p className="mt-2 text-sm font-medium text-black">
                    草津で過ごす楽しいひとときを、このしおりでサポートします！
                </p>
            </header>

            {/* Schedule */}
            <div className="space-y-4">
                {days.map((day, index) => (
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
                            className={`overflow-hidden transition-all duration-500 ${activeDay === index ? "max-h-[1000px]" : "max-h-0"
                                }`}
                        >
                            <ul className="space-y-2 p-4">
                                {day.schedule.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center justify-between rounded-lg border border-[#344699] bg-[#FBFCFF] p-2 shadow-sm"
                                    >
                                        <span className="text-sm text-[#2B262E]">{item.time}</span>
                                        <span className="font-medium text-[#2B262E]">
                                            {item.activity}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Top
