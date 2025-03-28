import { Hotel } from './hotel'
import { Image } from './image'
import { Modal } from './modal'
import { ScheduleGroup } from './scheduleGroup'
export type Travel = {
    id: number;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    title: string;
    memo?: string;
    travel_price?: number;
    first_date?: string;
    last_date?: string;
    count_down_start_time?: string;
    images?: Image[]
    hotels?: Hotel[]
    // schedules?: Schedule[]
    schedule_groups?: ScheduleGroup[]
    modals?: Modal[]
};
