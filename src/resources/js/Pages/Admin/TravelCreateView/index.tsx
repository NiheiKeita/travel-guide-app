import Button from '@/Components/Button'
import { useTravelCreateView } from './hooks'
import TitleText from '@/Components/TitleText'
import React from 'react'
import AdminLayout from '@/Layouts/AdminLayout'
import { PropertyKeys } from './types'
import InputField from '@/Components/InputField'

export const TravelCreateView = React.memo(function TravelCreateView() {
    const { data, setData, processing, errors, submit } = useTravelCreateView()
    const fields = [
        { label: "旅行タイトル", id: "title", required: true, type: "text" },
        { label: "サンプル", id: "select", required: false, type: "select", list: ["a", "b"] },
        { label: "お金(円)", id: "price", required: true, type: "number" },
        { label: "メモ", id: "memo", required: false, type: "textArea" }
    ] as {
        label: string
        id: PropertyKeys
        required: boolean
        type: string
        list?: any
    }[]
    return (
        <AdminLayout>
            <div className='flex justify-center'>
                <TitleText>旅行の作成</TitleText>
            </div>
            <form onSubmit={submit} className='mt-20'>
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
