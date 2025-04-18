


import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Button from '@/Components/Button'
import TextInput from '@/Components/TextInput'
import { useLogin } from './hooks'
import TitleText from '@/Components/TitleText'
import React from 'react'
import AdminLayout from '@/Layouts/AdminLayout'

export const Login = React.memo(function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset, submit } = useLogin()

    return (
        <AdminLayout>
            <div className='flex justify-center'>
                <TitleText>ログイン</TitleText>
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

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
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

export default Login
