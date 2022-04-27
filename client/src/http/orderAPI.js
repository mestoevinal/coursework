import {$authHost, $host} from "./index";

export const createOrder = async (Order) => {
    const {data} = await $host.post('api/order', Order)
    return data
}

export const fetchOrder = async () => {
    const {data} = await $host.get('api/order',)
    return data
}

export const deleteOrder = async (id) => {
    await $host.delete('api/order',{
        params: {
            id
        }
    })

}

export const fetchMyOrder = async (userId) => {
    const {data} = await $host.get('api/order/oneIdorder',{params: {
            userId
        }
    })
    return data
}




