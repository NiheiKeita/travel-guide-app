


import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import RequiredText from '@/Components/RequiredText'
import TextArea from '@/Components/TextArea'
import React, { useCallback } from 'react'

type Props = {
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    data: string,
    name: string,
    errorText?: string,
    required?: boolean,
    id: string,
    label: string,
}
export const TextAreaField = React.memo<Props>(function TextAreaField({
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
            e.preventDefault()
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
            <TextArea
                name={name}
                value={data}
                className="mt-1 block w-full"
                autoComplete={id}
                onChange={onChange}
                required={required}
                onKeyDown={handleKeyDown}
                rows={8}
            />
            <InputError message={errorText} className="mt-2" />
        </>
    )
})

export default TextAreaField
