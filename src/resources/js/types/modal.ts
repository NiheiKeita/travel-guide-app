import { Image } from './image'
export type Modal = {
    id: number;
    type: number;
    title: string;
    cards?: {
        id: number;
        url: string;
        title: string;
        accessURL: string;
        images?: Image[];
    }[];
}
