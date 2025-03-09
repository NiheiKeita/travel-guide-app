import React from "react"
import TextInput from "../TextInput"
import { Button } from "react-ui-components-example"
import { Schedule } from "@/types/schedule"


type Modal = {
  id: number;
  type: number;
  title: string;
  cards: {
    id: number;
    url: string;
    title: string;
    accessURL: string;
  }[];
};

type Props = {
  formData: Schedule[];
  onChange: (value: Schedule[]) => void;
  modalList?: Modal[];
};

export const SchedulesInput = React.memo<Props>(function SchedulesInput({
  formData,
  onChange,
  modalList
}) {
  const handleChange = (index: number, key: keyof Schedule, value: string | number | undefined) => {
    const newSchedules = formData.map((item, i) =>
      i === index ? { ...item, [key]: value } : item
    )
    onChange(newSchedules)
  }

  const addSchedule = () => {
    const newSchedule: Schedule = { time: "", title: "" }
    onChange([...formData, newSchedule])
  }

  const removeSchedule = (index: number) => {
    const newSchedules = formData.filter((_, i) => i !== index)
    onChange(newSchedules)
  }

  return (
    <div className="space-y-4 rounded-lg border bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold">スケジュール設定</h2>
      {formData?.map((schedule, index) => (
        <div key={index} className="flex items-center gap-2">
          <TextInput
            name={`schedule-time-${index}`}
            className="w-1/4"
            placeholder="時間"
            value={schedule.time}
            onChange={(e) => handleChange(index, "time", e.target.value)}
          />
          <TextInput
            name={`schedule-title-${index}`}
            className="flex-1"
            placeholder="タイトル"
            value={schedule.title}
            onChange={(e) => handleChange(index, "title", e.target.value)}
          />
          <select
            name={`schedule-modal-${index}`}
            className="w-1/4"
            value={schedule.modalId ?? ""}
            onChange={(e) =>
              handleChange(index, "modalId", e.target.value ? Number(e.target.value) : undefined)
            }
          >
            <option value="">未選択</option>
            {modalList?.map((modal) => (
              <option key={modal.id} value={modal.id}>
                {modal.cards[0]?.title || `モーダル ${modal.id}`}
              </option>
            ))}
          </select>
          <Button variant="default" onClick={() => removeSchedule(index)} type="button">
            削除
          </Button>
        </div>
      ))}
      <Button className="w-full" onClick={addSchedule} variant={"default"} type="button">
        ＋ スケジュールを追加
      </Button>
    </div>
  )
})

export default SchedulesInput
