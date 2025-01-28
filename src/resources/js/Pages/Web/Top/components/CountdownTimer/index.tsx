
import React, { useEffect, useState } from "react"

export const CountdownTimer = React.memo(function CountdownTimer() {

    const targetDate = new Date("2025-01-31T09:05:00") // 出発日時を設定
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    // 残り時間を計算する関数
    function calculateTimeLeft() {
        const now = new Date()
        const difference = targetDate.getTime() - now.getTime()
        if (difference > 0) {
            return {
                "日": Math.floor(difference / (1000 * 60 * 60 * 24)),
                "時": Math.floor((difference / (1000 * 60 * 60)) % 24),
                "分": Math.floor((difference / 1000 / 60) % 60),
                "秒": Math.floor((difference / 1000) % 60),
            }
        } else {
            return null // タイマー終了後
        }
    }

    // タイマーを更新するEffect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer) // コンポーネントアンマウント時にタイマーをクリア
    }, [])

    if (!timeLeft) {
        return <div className="text-center text-xl font-bold">出発！</div>
    }

    return (
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-bold">旅行まであと</h1>
            <div className="flex space-x-4 text-center">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div
                        key={unit}
                        className="flex flex-col items-center rounded-lg bg-gray-100 p-4 shadow-md"
                    >
                        <span className="text-3xl font-bold text-[#344699]">{value}</span>
                        <span className="text-sm text-gray-800">{unit}</span>
                    </div>
                ))}
            </div>
        </div>
    )
})

export default CountdownTimer
