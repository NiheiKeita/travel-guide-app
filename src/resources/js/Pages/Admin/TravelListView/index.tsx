
import Button from '@/Components/Button'
import React from 'react'
import AdminLayout from '@/Layouts/AdminLayout'
import BackButtonAndTitle from '@/Components/BackButtonAndTitle'
import FlashMessage from '@/Components/FlashMessage'
import { router } from '@inertiajs/react'
import { formatStringToDate } from '@/hooks/format'

type Props = {
    flash?: {
        message: string
    },
    travels: {
        id: number,
        title: string,
        created_at: string,
        updated_at: string,
        deleted_at: string,
    }[]
}
export const TravelListView = React.memo<Props>(function TravelListView({
    flash,
    travels
}) {
    const headers = [
        { key: 'detailButton', label: '詳細' },
        // { key: 'created_at', label: '作成日時', format: (value: string) => formatStringToDate(value) },
        // { key: 'updated_at', label: '更新日時', format: (value: string) => formatStringToDate(value) },
        // { key: 'deleted_at', label: '削除日時', format: (value: string) => formatStringToDate(value) },
        { key: 'title', label: 'タイトル' },
        { key: 'travel_price', label: '旅費(円)' },
        { key: 'first_date', label: '始まる日', format: (value: string) => formatStringToDate(value) },
        { key: 'last_date', label: '終わる日', format: (value: string) => formatStringToDate(value) },
        { key: 'count_down_start_time', label: 'タイマー開始日', format: (value: string) => formatStringToDate(value) },
        { key: 'memo', label: 'メモ' },
    ]
    return (
        <AdminLayout>
            <BackButtonAndTitle showBackButton={false}>旅一覧</BackButtonAndTitle>
            {flash?.message &&
                <div className='mt-5'>
                    <FlashMessage>{flash.message}</FlashMessage>
                </div>
            }
            <div className="flex overflow-x-auto">
                <div className="min-w-full flex-none">
                    <table className="mt-2 min-w-full table-auto bg-white shadow-md">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                {headers.map((header, index) => (
                                    <th key={index} className="px-6 py-3 text-left text-sm font-medium">
                                        {header.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {travels.map((travel) => (
                                <tr key={travel.id} className="border-t">
                                    {headers.map((header, headerIndex) => {
                                        if (header.key == "detailButton") {
                                            return (
                                                <td className='px-4 py-2' key={headerIndex}>
                                                    <Button
                                                        onClick={() => router.visit(route("admin.travel.show", travel.id))}
                                                    >
                                                        詳細
                                                    </Button>
                                                </td>
                                            )
                                        } else {
                                            const keys = header.key.split('.')
                                            let value: any = travel
                                            keys.forEach(key => {
                                                value = value?.[key] || 'N/A'
                                            })
                                            if (header.format) {
                                                value = header.format(value)
                                            }

                                            return (
                                                <td key={headerIndex} className="px-6 py-4 text-sm text-gray-900">
                                                    {value}
                                                </td>
                                            )
                                        }
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    )
})

export default TravelListView
