import { useForm } from "@inertiajs/react"
import { FormEventHandler } from "react"

export const useTravelCreateView = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        select: '',
        price: '',
        memo: '',
        // images: [] as { url: string; id: string; }[],
    })

    const submit: FormEventHandler = (e) => {
        e.preventDefault()

        post(route('admin.travel.store'))
    }
    return {
        data, setData, post, processing, errors, reset, submit
    }
}
