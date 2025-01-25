import ModalView from "@/Components/ModalView"
import React, { useState } from "react"

type Props = {
    onClick: () => void
}

export const ModalCard = React.memo<Props>(function ModalCard(
    onClick
) {

    return (
        <div onClick={() => onClick}>
            <img src="img/top/dango.jpg" alt="top" />
        </div>
    )
})

export default ModalCard
