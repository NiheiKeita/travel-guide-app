import { useForm } from "@inertiajs/react"
import { FormEventHandler, useEffect } from "react"

export const useTravelListView = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
  })

  const submit: FormEventHandler = (e) => {
    e.preventDefault()

    post(route('admin.login'))
  }
  return {
    data, setData, post, processing, errors, reset, submit
  }
}
