import { Image } from './image'
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
};
