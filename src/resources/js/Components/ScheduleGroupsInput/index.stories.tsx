import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import ScheduleGroupsInput from '.'
import { Schedule } from '@/types/schedule'

const meta: Meta<typeof ScheduleGroupsInput> = {
    component: ScheduleGroupsInput,
    tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        scheduleGroups: [
            {
                id: 1, title: "朝の会",
                schedules: [
                    { time_text: "08:00", title: "朝の会", modal_id: 1 },
                ]
            },
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
        const [form, setForm] = React.useState(args.scheduleGroups)
        const handleChange = (data: {
            id: number
            title: string
            schedules: Schedule[]
        }[]) => {
            setForm(data)
        }
        return (
            <ScheduleGroupsInput
                scheduleGroups={form}
                onChange={handleChange}
                modalList={args.modalList}
            />
        )
    }
}
