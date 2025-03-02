


import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import RequiredText from '@/Components/RequiredText'
import TextInput from '@/Components/TextInput'
import React, { useCallback } from 'react'

type Props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    data: string,
    name: string,
    errorText?: string,
    required?: boolean,
    id: string,
    label: string,
}
export const InputNumberArea = React.memo<Props>(function InputNumberArea({
    onChange,
    data,
    name,
    errorText,
    required = false,
    id,
    label
}) {
    const handleKeyDown = useCallback((e: { key: string; preventDefault: () => void }) => {
        if (e.key === 'Enter') {
            e.preventDefault() // エンターキーのデフォルト動作を防ぐ
        }
    }, [])

    return (
        <>
            <div className='flex'>
                <InputLabel value={label} />
                {required &&
                    <RequiredText />
                }
            </div>
            <TextInput
                type="number"
                name={name}
                value={data}
                className="mt-1 block w-full"
                autoComplete={id}
                onChange={onChange}
                required={required}
                onKeyDown={handleKeyDown}
            />
            <InputError message={errorText} className="mt-2" />
        </>
    )
})

export default InputNumberArea
