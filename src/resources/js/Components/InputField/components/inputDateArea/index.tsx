import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import RequiredText from '@/Components/RequiredText'
import TextInput from '@/Components/TextInput'
import React from 'react'

type Props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    data: string;
    name: string;
    errorText?: string;
    required?: boolean;
    id: string;
    label: string;
};

export const InputDateArea = React.memo<Props>(function InputDateArea({
    onChange,
    data,
    name,
    errorText,
    required = false,
    id,
    label
}) {
    return (
        <>
            <div className='flex'>
                <InputLabel value={label} />
                {required && <RequiredText />}
            </div>
            <TextInput
                type="date"
                name={name}
                value={data}
                className="mt-1 block w-full"
                autoComplete={id}
                onChange={onChange}
                required={required}
            />
            <InputError message={errorText} className="mt-2" />
        </>
    )
})

export default InputDateArea
