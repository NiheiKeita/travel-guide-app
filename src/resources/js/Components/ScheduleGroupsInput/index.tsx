import React from "react"
import TextInput from "../TextInput"
import { Button } from "react-ui-components-example"
import { Schedule } from "@/types/schedule"
import { Modal } from "@/types/modal"
import SchedulesInput from "../SchedulesInput"

type ScheduleGroup = {
    id: number;
    title: string;
    schedules: Schedule[];
};

type Props = {
    scheduleGroups: ScheduleGroup[];
    onChange: (value: ScheduleGroup[]) => void;
    modalList?: Modal[];
};

export const ScheduleGroupsInput = React.memo<Props>(function ScheduleGroupsInput({
    scheduleGroups,
    onChange,
    modalList
}) {
    const handleGroupChange = (index: number, key: keyof ScheduleGroup, value: string | Schedule[]) => {
        const newGroups = scheduleGroups.map((group, i) =>
            i === index ? { ...group, [key]: value } : group
        )
        onChange(newGroups)
    }

    const addGroup = () => {
        const newGroup: ScheduleGroup = { id: Date.now(), title: "", schedules: [] }
        onChange([...scheduleGroups, newGroup])
    }

    const removeGroup = (index: number) => {
        const newGroups = scheduleGroups.filter((_, i) => i !== index)
        onChange(newGroups)
    }

    return (
        <div className="space-y-4 rounded-lg border bg-white p-4 shadow-sm">
            <h2 className="text-lg font-semibold">スケジュールグループ設定</h2>
            {scheduleGroups.map((group, index) => (
                <div key={group.id} className="space-y-2 rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                        <TextInput
                            name={`group-title-${index}`}
                            className="flex-1"
                            placeholder="グループ名"
                            value={group.title}
                            onChange={(e) => handleGroupChange(index, "title", e.target.value)}
                        />
                        <Button variant="default" onClick={() => removeGroup(index)} type="button">
                            削除
                        </Button>
                    </div>
                    <SchedulesInput
                        formData={group.schedules}
                        onChange={(schedules) => handleGroupChange(index, "schedules", schedules)}
                        modalList={modalList}
                    />
                </div>
            ))}
            <Button className="w-full" onClick={addGroup} variant="default" type="button">
                ＋ グループを追加
            </Button>
        </div>
    )
})

export default ScheduleGroupsInput
