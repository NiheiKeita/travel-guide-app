import { useCallback, useState } from "react"
import React from "react"
import InputLabel from "../InputLabel"
import TextInput from "../TextInput"
import UploadImageArea from "../UploadImageArea"
import { Hotel } from "@/types/hotel"

const sampleHotels: Hotel[] = [
    { name: "ホテルA", url: "https://hotel-a.com", images: [], address: "東京都", accessUrl: "https://maps.google.com" },
    { name: "ホテルB", url: "https://hotel-b.com", images: [], address: "大阪府", accessUrl: "https://maps.google.com" },
]

type Props = {
    formData: Hotel
    onChange: (e: Hotel) => void
}

export const HotelInput = React.memo<Props>(function HotelInput({
    formData,
    onChange
}) {
    const [searchResults, setSearchResults] = useState<Hotel[]>([])
    const handleHotelNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const results = sampleHotels.filter(hotel => hotel.name?.includes(value))
        onChange({ ...formData, [e.target.name]: e.target.value })
        setSearchResults(results)
    }

    const handleSelectHotel = (hotel: Hotel) => {
        onChange(hotel)
        setSearchResults([])
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ ...formData, [e.target.name]: e.target.value })
    }
    const handleChangeImages = useCallback((newImages: { url: string; id: string; }[]) => {
        onChange({
            ...formData,
            images: newImages
        })
    }, [formData, onChange])

    return (
        <div className="mt-4 w-full max-w-md rounded-lg border p-4">
            <InputLabel value="ホテル情報" />

            <div className="relative mt-2">
                <InputLabel value="ホテルの名前" />
                <TextInput name="name" value={formData?.name} onChange={handleHotelNameChange} placeholder="ホテル名を入力" />
                {searchResults.length > 0 && (
                    <div className="absolute mt-1 w-full border bg-white shadow-md">
                        {searchResults.map((hotel, index) => (
                            <div key={index} className="cursor-pointer p-2 hover:bg-gray-200" onClick={() => handleSelectHotel(hotel)}>
                                {hotel.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="mt-2">
                <InputLabel value="ホテルURL" />
                <TextInput name="url" value={formData?.url} onChange={handleInputChange} placeholder="https://example.com" />
            </div>

            <div className="mt-2">
                <InputLabel value="ホテルの画像" />
                <UploadImageArea
                    images={formData?.images ?? []}
                    onImageChange={handleChangeImages}
                />
            </div>

            <div className="mt-2">
                <InputLabel value="ホテルの住所" />
                <TextInput name="address" value={formData?.address} onChange={handleInputChange} placeholder="住所を入力" />
            </div>

            <div className="mt-2">
                <InputLabel value="ホテルのアクセスURL" />
                <TextInput name="accessUrl" value={formData?.accessUrl} onChange={handleInputChange} placeholder="https://maps.google.com" />
            </div>
        </div>
    )
})

export default HotelInput
