import { Meta, StoryObj } from '@storybook/react'
import { HotelShow } from '.'

const meta: Meta<typeof HotelShow> = {
    component: HotelShow,
    tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        hotel: {
            name: "ホテル京都",
            url: "https://www.hotel-kyoto.com",
            images: [{ url: "https://img.dormy-hotels.com/resort/hotels/tokinoniwa/images/img_mv2.webp", id: "1" }],
            address: "京都府",
            accessUrl: "https://maps.google.com"
        }
    },
}
