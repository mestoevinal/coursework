import {$host} from "./index";

export const createExursion = async (Exursion) => {
    const {data} = await $host.post('api/exursion', Exursion)
    return data
}

export const fetchExursionCityId = async (cityId) => {
    const {data} = await $host.get('api/exursion', {
        params: {
            cityId
        }
    })
    return data
}

export const fetchExursionId = async (id) => {
    const {data} = await $host.get('api/exursion', {
        params: {
            id
        }
    })
    return data
}

export const deleteExursion = async (id, date = 0) => {
    if (id) {
        await $host.delete('api/exursion', {
            params: {
                id
            }
        })
    }
    if (date){
        await $host.delete('api/exursion', {})
    }

}
