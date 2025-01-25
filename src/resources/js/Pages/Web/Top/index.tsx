import ModalView from "@/Components/ModalView"
import { title } from "process"
import React, { useState } from "react"

export const Top: React.FC = () => {
    const [activeDay, setActiveDay] = useState<number | null>(null)
    const [modals, setModals] = useState([{ id: 1, isOpen: false }, { id: 2, isOpen: false }])
    const modalControl = (id: number, opened: boolean) => {
        console.log(id, opened)
        setModals(prev => {
            const data = [...prev]
            data.find(modal => modal.id === id)!.isOpen = opened
            return data
        })
    }

    const days = [
        {
            title: "1日目",
            schedule: [
                { time: "09:05-13:10", activity: "バス移動(新宿)" },
                { time: "13:10-15:00", activity: "食べ歩き", clickable: true, target: 1 },
                { time: "15:00", activity: "チェックイン" },
                { time: "15:00-17:30", activity: "ゆったりぶらぶら", clickable: true, target: 1 },
                { time: "17:30", activity: "夕食！" },
                { time: "18:30-18:45", activity: "移動" },
                { time: "19:00-21:00", activity: "星空ウォーク", clickable: true, target: 2 },
                { time: "22:00", activity: "夜鳴きそば！" },
            ],
        },
        {
            title: "2日目",
            schedule: [
                { time: "9:00", activity: "朝ごはん！" },
                { time: "11:00", activity: "熱帯園" },
                { time: "14:00-15:00", activity: "陶芸体験" },
                { time: "17:30", activity: "夕食！" },
                { time: "22:00", activity: "夜鳴きそば！" },
            ],
        },
        {
            title: "3日目",
            schedule: [
                { time: "9:00", activity: "朝ごはん！" },
                { time: "11:00", activity: "草津ぶーらぶら", clickable: true, target: 1 },
                { time: "16:00-20:10", activity: "バスで帰り" },
            ],
        },
    ]

    const toggleDay = (index: number) => {
        setActiveDay(activeDay === index ? null : index)
    }
    type Photo = {
        img: string;
        title: string; // 店名
        url: string;   // URL
        mapUrl: string; // 地図URL
    };

    const photos: Photo[] = [
        {
            img: "/img/top/dango.jpg",
            title: "射的茶屋まつりやの前",
            url: "https://www.instagram.com/p/DAo0VYzToeD/?img_index=4&igsh=MWxwM2F6OWVnMmtwMA==",
            mapUrl: "https://maps.app.goo.gl/Q3ThRuwVCWYASPoW6?g_st=com.google.maps.preview.copy"
        },
        {
            img: "/img/top/daibutsu.jpg",
            title: "TOLOSTAND",
            url: "https://urakusatsu-tou.com",
            mapUrl: "https://maps.app.goo.gl/Q3ThRuwVCWYASPoW6?g_st=com.google.maps.preview.copy"
        },
        {
            img: "/img/top/pulin.jpg",
            title: "草津温泉プリン",
            url: "https://www.kusatsuonsen-purin.com",
            mapUrl: "https://maps.app.goo.gl/uaZ6KJbd7euTUBXm7?g_st=com.google.maps.preview.copy"
        },
        {
            img: "/img/top/macha.jpg",
            title: "カフェ花いんげん",
            url: "https://www.instagram.com/hanaingen_seigetsudou?igsh=N2FtbXJmYTR3ZHlq",
            mapUrl: "https://maps.app.goo.gl/qa8tRP3NxJZNQR5x6?g_st=com.google.maps.preview.copy"
        },
        {
            img: "/img/top/tamago.jpg",
            title: "草津ガラス蔵",
            url: "https://932gw.com/",
            mapUrl: "https://maps.app.goo.gl/T8Nrdr7dYJMVcSpL6?g_st=com.google.maps.preview.copy"
        },
        {
            img: "/img/top/onsenmanjuu.jpg",
            title: "山びこ温泉まんじゅう",
            url: "",
            mapUrl: "https://maps.app.goo.gl/JchoGAmwV6zRMnPK8?g_st=com.google.maps.preview.copy"
        },
    ]

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
            </div>
            <ModalView
                isOpen={modals.find(modal => modal.id === 1)?.isOpen ?? false}
                onClose={() => { modalControl(1, false) }}
                title={""}
            >
                <>
                    <div className="mb-4 flex items-center justify-center text-xl font-bold text-gray-800">~食べ歩きグルメ~</div>
                    <div className="grid grid-cols-2 gap-4">
                        {photos.map((photo, index) => (
                            <div key={index} className="cursor-pointer">
                                {/* 画像クリックでURLを新しいタブで開く */}
                                <a
                                    href={photo.url || undefined} // URLがない場合はundefined
                                    target={photo.url ? "_blank" : undefined} // URLがない場合はtargetを無効化
                                    rel={photo.url ? "noopener noreferrer" : undefined} // URLがない場合はrelを無効化
                                >
                                    <img
                                        src={photo.img}
                                        alt={photo.title}
                                        className="h-auto w-full rounded-lg object-cover shadow-lg transition-shadow hover:shadow-xl"
                                    />
                                </a>
                                {/* タイトルクリックでURLを新しいタブで開く */}
                                <a
                                    href={photo.url || undefined} // URLがない場合はundefined
                                    target={photo.url ? "_blank" : undefined} // URLがない場合はtargetを無効化
                                    rel={photo.url ? "noopener noreferrer" : undefined} // URLがない場合はrelを無効化
                                    className={`mt-2 block text-center text-sm font-bold ${photo.url ? "text-gray-800 underline hover:text-blue-500" : "text-gray-800"
                                        }`}
                                    onClick={(e) => {
                                        if (!photo.url) {
                                            e.preventDefault() // URLがない場合のクリックを無効化
                                        }
                                    }}
                                >
                                    {photo.title}
                                </a>
                                <div className="flex items-center justify-center pt-1 text-xs font-bold text-blue-500">地図アプリ</div>
                            </div>
                        ))}
                    </div>
                </>
            </ModalView>
            <ModalView
                isOpen={modals.find(modal => modal.id === 2)?.isOpen ?? false}
                onClose={() => { modalControl(2, false) }}
                title={""}
            >
                <>
                    <div className="mb-4 flex items-center justify-center text-xl font-bold text-gray-800">~星空ウォーク~</div>
                    <div className="grid  gap-4">
                        <div className="cursor-pointer">
                            <a href="https://www.instagram.com/p/DEehsssSnJb/?igsh=MWtkd3J0YzE5ZDRwdg==" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/img/top/star.jpg"
                                    className="h-auto w-full rounded-lg object-cover shadow-lg transition-shadow hover:shadow-xl"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/p/DEehsssSnJb/?igsh=MWtkd3J0YzE5ZDRwdg=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 block text-center text-sm font-bold text-gray-800 underline hover:text-blue-500"
                            >
                                星空ウォーク
                            </a>
                            {/* <div className="flex items-center justify-center pt-1 text-xs font-bold text-blue-500">地図アプリ</div> */}
                        </div>
                    </div>
                </>
            </ModalView>
        </div>
    )
}

export default Top
