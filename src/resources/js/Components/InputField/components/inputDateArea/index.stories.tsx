import { Meta, StoryObj } from '@storybook/react'
import { InputDateArea } from '.'

const meta: Meta<typeof InputDateArea> = {
    component: InputDateArea,
    tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
    play: async ({ canvasElement }) => {
        // const canvas = within(canvasElement)
        // await waitFor(async () => {
        //   canvas.getByText("QuestionListView")
        // })
    },
}
