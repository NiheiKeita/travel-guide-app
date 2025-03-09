import { Meta, StoryObj } from '@storybook/react'
// import { waitFor, within } from '@storybook/testing-library';
import { TravelShowView } from '.'
import { url } from 'inspector'

const meta: Meta<typeof TravelShowView> = {
  component: TravelShowView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    travel: {
      id: 1,
      created_at: "2025-03-02 16:08:25",
      updated_at: "2025-03-02 16:08:25",
      title: "春の京都旅行",
      memo: "桜のシーズンに京都を巡る旅行プラン",
      travel_price: 50000,
      first_date: "2025-03-03 00:00:00",
      last_date: "2025-03-05 00:00:00",
      count_down_start_time: "2025-03-03 00:00:00",
      hotels: [
        {
          name: "ホテル京都",
          url: "https://www.hotel-kyoto.com",
          images: [{ url: "https://img.dormy-hotels.com/resort/hotels/tokinoniwa/images/img_mv2.webp", id: "1" }],
          address: "京都府",
          accessUrl: "https://maps.google.com"
        }
      ]
    }
  },
  play: async ({ canvasElement }) => {
    // const canvas = within(canvasElement)
    // await waitFor(async () => {
    //   canvas.getByText("QuestionListView")
    // })
  },
}
