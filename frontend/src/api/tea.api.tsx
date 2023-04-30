import { TeaItem } from '../types/Tea.type';

export const fetchTeas = async (): Promise<TeaItem[]> => {
    return fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/teas`).then(res => res.json())
}

