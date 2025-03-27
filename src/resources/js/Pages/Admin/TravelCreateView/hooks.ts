import { Hotel } from "@/types/hotel"
import { Modal } from "@/types/modal"
import { Schedule } from "@/types/schedule"
import { ScheduleGroup } from "@/types/scheduleGroup"
import { useForm } from "@inertiajs/react"
import { FormEventHandler, useCallback } from "react"

export const useTravelCreateView = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        travel_price: "",
        memo: '',
        first_date: '',
        last_date: '',
        count_down_start_time: '',
        images: [] as { url: string; id: string; }[],
        hotel: {} as Hotel,
        scheduleGroups: [{
            id: 1,
            title: "",
            schedules: [],
        }] as ScheduleGroup[],
        modals: [] as Modal[]
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post(route('admin.travel.store'))
    }

    const handleChangeImages = useCallback((newImages: { url: any; id: any; }[]) => {
        setData(prevData => ({
            ...prevData,
            images: newImages
        }))
    }, [])
    return {
        data, setData, post, processing, errors, reset, submit, handleChangeImages
    }
}
