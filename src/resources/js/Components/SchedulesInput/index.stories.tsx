import { Meta, StoryObj } from '@storybook/react'
import { SchedulesInput } from '.'

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
        onChange: (value) => console.log(value),
    }
}
