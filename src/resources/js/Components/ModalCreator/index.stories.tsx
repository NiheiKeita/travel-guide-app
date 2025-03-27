import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Schedule } from '@/types/schedule'
import ModalCreator from '.'
import { Modal } from '@/types/modal'

const meta: Meta<typeof ModalCreator> = {
    component: ModalCreator,
    tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        formData: [{
            id: 1,
            type: 1,
            title: 'Example Title',
        }],
        onChange: (value) => console.log(value),
    },
    render(args) {
        const [form, setForm] = React.useState(args.formData)
        const handleChange = (data: Modal[]) => {
            setForm(data)
        }
        return (
            <ModalCreator
                formData={form}
                onChange={handleChange}
            />
        )
    }
}
