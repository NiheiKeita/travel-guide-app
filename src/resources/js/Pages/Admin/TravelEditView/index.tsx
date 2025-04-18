


import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Button from '@/Components/Button'
import TextInput from '@/Components/TextInput'
import { useTravelEditView } from './hooks'
import TitleText from '@/Components/TitleText'
import React from 'react'
import AdminLayout from '@/Layouts/AdminLayout'

export const TravelEditView = React.memo(function TravelEditView() {
    const { data, setData, post, processing, errors, reset, submit } = useTravelEditView()

    return (
        <AdminLayout>
            <div className='flex justify-center'>
                <TitleText>TravelEditView</TitleText>
            </div>
            <form onSubmit={submit} className='mt-20'>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4 flex items-center justify-end">

                    <Button className='w-full' variant='blue' disabled={processing}>
                        ログイン
                    </Button>
                </div>
            </form>
        </AdminLayout>
    )
})

export default TravelEditView
