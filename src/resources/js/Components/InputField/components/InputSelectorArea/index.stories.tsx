import { Meta, StoryObj } from '@storybook/react'
import { InputSelectorArea } from '.'

const meta: Meta<typeof InputSelectorArea> = {
    component: InputSelectorArea,
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
