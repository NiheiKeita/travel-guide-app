import { Meta, StoryObj } from '@storybook/react'
import { SchedulesInput } from '.'
import React from 'react'
import { Schedule } from '@/types/schedule'

const meta: Meta<typeof SchedulesInput> = {
    component: SchedulesInput,
    tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        formData: [
            { time: "10:00", title: "朝の会" },
            { time: "12:00", title: "昼の会" },
            { time: "15:00", title: "夕方の会" },
        ],
        modalList: [
            {
                id: 1, type: 1, title: "朝の会",
                cards: [
                    { id: 1, url: "https://www.google.com", title: "朝の会", accessURL: "https://www.google.com" },
                ]
            },
        ],
        // onChange: (value) => console.log(value),
    },
    render(args) {
        const [form, setForm] = React.useState(args.formData)
        const handleChange = (data: Schedule[]) => {
            setForm(data)
        }
        return (
            <SchedulesInput
                formData={form}
                onChange={handleChange}
                modalList={args.modalList}
            />
        )
    }
}
