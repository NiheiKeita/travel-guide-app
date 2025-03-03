import { Meta, StoryObj } from '@storybook/react'
import { HotelInput } from '.'

const meta: Meta<typeof HotelInput> = {
    component: HotelInput,
    tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
    }
}
