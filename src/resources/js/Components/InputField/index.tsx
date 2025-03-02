import React from 'react'
import InputNumberArea from './components/InputNumberArea'
import InputSelectorArea from './components/InputSelectorArea'
import InputTextArea from './components/InputTextArea'
import TextAreaField from './components/TextAreaField'
import InputDateArea from './components/inputDateArea'

type Props = {
    onChange: (e: string) => void,
    data: string,
    name: string,
    errorText?: string,
    required?: boolean,
    id: string,
    label: string,
    type: string,
    list?: string[]
}
export const InputField = React.memo<Props>(function InputField({
    onChange,
    data,
    name,
    errorText,
    required = false,
    id,
    label,
    type,
    list = []
}) {
    return (
        <>
            {type === "date" && (
                <InputDateArea
                    onChange={(e) => onChange(e.target.value)}
                    data={data}
                    name={name}
                    errorText={errorText}
                    id={id}
                    label={label}
                    required={required}
                />
            )}
            {type === "select" && (
                <InputSelectorArea
                    onChange={onChange}
                    data={data}
                    name={name}
                    errorText={errorText}
                    id={id}
                    label={label}
                    items={list}
                    required={required}
                />
            )}
            {type === "text" && (
                <InputTextArea
                    onChange={(e) => onChange(e.target.value)}
                    data={data}
                    name={name}
                    errorText={errorText}
                    id={id}
                    label={label}
                    required={required}
                />
            )}
            {type === "number" && (
                <InputNumberArea
                    onChange={(e) => onChange(e.target.value)}
                    data={data}
                    name={name}
                    errorText={errorText}
                    id={id}
                    label={label}
                    required={required}
                />
            )}
            {type === "textArea" && (
                <TextAreaField
                    onChange={(e) => onChange(e.target.value)}
                    data={data}
                    name={name}
                    errorText={errorText}
                    id={id}
                    label={label}
                    required={required}
                />
            )}
        </>
    )
})

export default InputField
