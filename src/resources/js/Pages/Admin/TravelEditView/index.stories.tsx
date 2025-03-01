import { Meta, StoryObj } from '@storybook/react'
import { TravelEditView } from '.'

const meta: Meta<typeof TravelEditView> = {
    component: TravelEditView,
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
