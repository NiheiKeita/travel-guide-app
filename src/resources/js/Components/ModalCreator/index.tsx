import { useCallback, useState } from "react"
import { Button } from "react-ui-components-example"
import TextInput from "../TextInput"
import React from "react"
import { Modal } from "@/types/modal"
import InputLabel from "../InputLabel"
import UploadImageArea from "../UploadImageArea"
import { Image } from "@/types/image"

type Props = {
    formData: Modal[]
    onChange: (value: Modal[]) => void
}

export const ModalCreator = React.memo<Props>(function ModalCreator({
    formData,
    onChange
}) {
    const [modalList, setModalList] = useState<Modal[]>(formData)

    const updateModal = (id: number, updatedModal: Modal) => {
        const updatedList = modalList.map((m) => (m.id === id ? updatedModal : m))
        setModalList(updatedList)
        onChange(updatedList)
    }

    const addModal = () => {
        const newModal: Modal = {
            id: modalList.length + 1,
            type: 1,
            title: "",
            cards: [],
        }
        setModalList([...modalList, newModal])
        onChange([...modalList, newModal])
    }

    const removeModal = (id: number) => {
        const updatedList = modalList.filter((m) => m.id !== id)
        setModalList(updatedList)
        onChange(updatedList)
    }

    return (
        <div className="space-y-4 rounded border p-4">
            <h2 className="text-lg font-semibold">モーダル情報</h2>
            <Button onClick={addModal} variant="default" type="button">
                モーダルを追加
            </Button>

            {modalList.map((modal) => (
                <ModalItem key={modal.id} modal={modal} onUpdate={updateModal} onRemove={removeModal} />
            ))}
        </div>
    )
})

type ModalItemProps = {
    modal: Modal
    onUpdate: (id: number, updatedModal: Modal) => void
    onRemove: (id: number) => void
}
type Card = {
    id: number
    url: string
    title: string
    accessURL: string
    images?: Image[]
}


const ModalItem: React.FC<ModalItemProps> = ({ modal, onUpdate, onRemove }) => {
    const [card, setCard] = useState<Card>({ id: 0, url: "", title: "", accessURL: "", images: [] })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdate(modal.id, { ...modal, [e.target.name]: e.target.value })
    }

    const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCard({ ...card, [e.target.name]: e.target.value })
    }

    const addCard = () => {
        const newCard = { ...card, id: modal.cards?.length ?? 0 + 1 }
        onUpdate(modal.id, { ...modal, cards: [...(modal.cards ?? []), newCard] })
        setCard({ id: 0, url: "", title: "", accessURL: "", images: [] })
    }

    const removeCard = (id: number) => {
        onUpdate(modal.id, { ...modal, cards: modal.cards?.filter((c) => c.id !== id) })
    }
    const handleChangeImages = useCallback((newImages: { url: string; id: number; }[]) => {
        setCard(prevData => {
            return {
                ...prevData,
                images: newImages
            }
        })
    }, [])
    return (
        <div className="space-y-4 rounded border p-4">
            <div className="flex justify-between">
                <h3 className="text-md font-semibold">モーダル {modal.id}</h3>
                <Button onClick={() => onRemove(modal.id)} variant="default" type="button">
                    削除
                </Button>
            </div>
            <TextInput name="title" value={modal.title} onChange={handleInputChange} placeholder="モーダルタイトル" />
            <TextInput name="type" type="number" value={modal.type} onChange={handleInputChange} placeholder="タイプ" />

            <div className="space-y-2">
                <p className="font-semibold">カード追加</p>
                <TextInput name="title" value={card.title} onChange={handleCardChange} placeholder="カードタイトル" />
                <TextInput name="url" value={card.url} onChange={handleCardChange} placeholder="画像URL" />
                <TextInput name="accessURL" value={card.accessURL} onChange={handleCardChange} placeholder="アクセスURL" />
                <div className="mt-4" >
                    <InputLabel value="画像" />
                    <UploadImageArea
                        images={card["images"] ?? []}
                        onImageChange={handleChangeImages}
                    />
                </div>
                <Button onClick={addCard} type="button" variant="default">
                    カードを追加
                </Button>
            </div>

            <div className="space-y-2">
                <p className="font-semibold">追加されたカード</p>
                {modal.cards?.map((c) => (
                    <div key={c.id} className="flex items-center justify-between rounded border p-2">
                        <div>
                            <p>{c.title}</p>
                            <p className="text-sm text-gray-500">{c.accessURL}</p>
                        </div>
                        <Button onClick={() => removeCard(c.id)} variant="default" type="button">
                            削除
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ModalCreator
