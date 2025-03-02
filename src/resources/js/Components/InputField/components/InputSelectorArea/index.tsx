


import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PlanSelector from '@/Components/PlanSelector'
import RequiredText from '@/Components/RequiredText'
import React, { useCallback } from 'react'

type Props = {
    onChange: (e: string) => void,
    data: string,
    name: string,
    errorText?: string,
    required?: boolean,
    id: string,
    label: string,
    items: string[]
}
export const InputSelectorArea = React.memo<Props>(function InputSelectorArea({
    onChange,
    data,
    name,
    errorText,
    required = false,
    id,
    label,
    items
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
            <PlanSelector
                items={items}
                name={name}
                value={data}
                className="mt-1 block w-full"
                autoComplete={id}
                onChangeSelect={onChange}
                required={required}
                onKeyDown={handleKeyDown}
            />
            <InputError message={errorText} className="mt-2" />
        </>
    )
})

export default InputSelectorArea
