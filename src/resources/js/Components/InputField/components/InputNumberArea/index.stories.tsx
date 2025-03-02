import { Meta, StoryObj } from '@storybook/react'
import { InputNumberArea } from '.'

const meta: Meta<typeof InputNumberArea> = {
    component: InputNumberArea,
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
