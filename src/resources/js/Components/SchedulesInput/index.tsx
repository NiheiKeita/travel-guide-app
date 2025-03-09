import React, { useState } from "react"
import TextInput from "../TextInput"
import { Button } from "react-ui-components-example"

type Schedule = {
  time: string;
  title: string;
  modalId?: number;
};

type Props = {
  formData: Schedule[];
  onChange: (value: Schedule[]) => void;
};
export const SchedulesInput = React.memo<Props>(function SchedulesInput({
  formData,
  onChange
}) {
  // const [schedules, setSchedules] = useState<Schedule[]>(formData)

  const handleChange = (index: number, key: keyof Schedule, value: string | number) => {
    const newSchedules = formData.map((item, i) =>
      i === index ? { ...item, [key]: value } : item
    )
    // setSchedules(newSchedules)
    onChange(newSchedules)
  }

  const addSchedule = () => {
    const newSchedule = { time: "", title: "" }
    // setSchedules([...schedules, newSchedule])
    onChange([...formData, newSchedule])
  }

  const removeSchedule = (index: number) => {
    const newSchedules = formData.filter((_, i) => i !== index)
    // setSchedules(newSchedules)
    onChange(newSchedules)
  }

  return (
    <div className="space-y-4 rounded-lg border bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold">スケジュール設定</h2>
      {formData?.map((schedule, index) => (
        <div key={index} className="flex items-center gap-2">
          <TextInput
            name={`schedule-time-${index}`}
            className="w-1/3"
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
          {schedule.modalId && (
            <>モーダル情報あり</>
          )}
          <Button variant="default" onClick={() => removeSchedule(index)}>
            削除
          </Button>
        </div>
      ))}
      <Button className="w-full" onClick={addSchedule} variant={"default"}>
        ＋ スケジュールを追加
      </Button>
    </div>
  )
})

export default SchedulesInput
