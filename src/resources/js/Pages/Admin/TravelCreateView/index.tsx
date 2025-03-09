import Button from '@/Components/Button'
import { useTravelCreateView } from './hooks'
import TitleText from '@/Components/TitleText'
import React from 'react'
import AdminLayout from '@/Layouts/AdminLayout'
import { PropertyKeys } from './types'
import InputField from '@/Components/InputField'
import InputLabel from '@/Components/InputLabel'
import UploadImageArea from '@/Components/UploadImageArea'
import HotelInput from '@/Components/HotelInput'
import { Hotel } from '@/types/hotel'
import SchedulesInput from '@/Components/SchedulesInput'
import { Schedule } from '@/types/schedule'

export const TravelCreateView = React.memo(function TravelCreateView() {
    const { data, setData, processing, errors, submit, handleChangeImages } = useTravelCreateView()
    const fields = [
        { label: "旅行タイトル", id: "title", required: true, type: "text" },
        // { label: "サンプル", id: "select", required: false, type: "select", list: ["a", "b"] },
        { label: "旅費(円)", id: "travel_price", required: false, type: "number" },
        { label: "始まる日", id: "first_date", required: false, type: "date" },
        { label: "終わる日", id: "last_date", required: false, type: "date" },
        { label: "タイマー開始日", id: "count_down_start_time", required: false, type: "date" },
        { label: "メモ", id: "memo", required: false, type: "textArea" }
    ] as {
        label: string
        id: PropertyKeys
        required: boolean
        type: string
        list?: string[]
    }[]
    return (
        <AdminLayout>
            <div className='flex justify-center'>
                <TitleText>旅行の作成</TitleText>
            </div>
            <form onSubmit={submit} className='my-20'>
                {fields.map((field) => (
                    <div className="mt-4" key={field.id}>
                        <InputField
                            onChange={(value: string) => setData(field.id, value)}
                            data={data[field.id]}
                            name={field.id}
                            errorText={errors[field.id]}
                            id={field.id}
                            label={field.label}
                            type={field.type}
                            required={field.required}
                            list={field.list}
                        />
                    </div>
                ))}
                <div className="mt-4" >
                    <InputLabel value="画像" />
                    <UploadImageArea
                        images={data["images"]}
                        onImageChange={handleChangeImages}
                    />
                </div>
                <div className="mt-4" >
                    <InputLabel value="ホテル情報" />
                    <HotelInput
                        formData={data["hotel"]}
                        onChange={(value: Hotel) => setData("hotel", value)}
                    />
                </div>
                <div className="mt-4" >
                    <InputLabel value="スケジュール" />
                    <SchedulesInput
                        formData={data["schedules"]}
                        onChange={(value: Schedule[]) => setData("schedules", value)} modalList={[]} />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Button className='w-full' variant='blue' disabled={processing}>
                        登録
                    </Button>
                </div>
            </form>
        </AdminLayout>
    )
})

export default TravelCreateView
