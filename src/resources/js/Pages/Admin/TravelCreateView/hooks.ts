import { useForm } from "@inertiajs/react"
import { FormEventHandler, useCallback } from "react"

export const useTravelCreateView = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        select: '',
        price: '',
        memo: '',
        date: '',
        images: [] as { url: string; id: string; }[],
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
