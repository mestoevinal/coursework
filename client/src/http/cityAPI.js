import {$host} from "./index";

export const createCity = async (City) => {
    const {data} = await $host.post('api/city', City)
    return data
}

export const fetchCity = async () => {
    const {data} = await $host.get('api/city',)
    return data
}

export const deleteExursion = async (id) => {
    await $host.delete('api/city', {params: {
            id
        }})
}


