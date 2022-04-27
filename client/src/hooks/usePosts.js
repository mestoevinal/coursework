import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if(sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts])

    return sortedPosts;
}

export const usePrice = (posts,price) => {
    const sortedPrice = useMemo(()=>{
        if(price != 0){
            return [...posts].filter(post => post.cost > price)
        }
        return posts
    },[price,posts])
    return sortedPrice
}

export const usePriceBefore = (posts, priceBefore) => {
    const sortedPriceBefore = useMemo(()=>{
        if(priceBefore != 0){
            return [...posts].filter(post => post.cost < priceBefore)
        }
        return posts
    },[priceBefore,posts])
    return sortedPriceBefore
}

export const useFamiliya = (posts, Fio) => {
    const sortedFio = useMemo(()=>{
        if(Fio !=""){
            return [...posts].filter(post =>  post.fio.toLowerCase().includes(Fio.toLowerCase()))
        }
        return posts
    },[Fio,posts])
    return sortedFio
}

export const useAddress = (posts,address) =>{
    const sortedAddress = useMemo(()=>{
        if(address != ""){
            return [...posts].filter(post =>  post.address.toLowerCase().includes(address.toLowerCase()))
        }
        return posts
    },[address,posts])
    return sortedAddress
}

export const usePosts = (posts, sort, query, price, priceBefore, Fio, address) => {
    let sortedPosts = useSortedPosts(posts, sort);
    sortedPosts = usePrice(sortedPosts, price)
    sortedPosts = usePriceBefore(sortedPosts, priceBefore)
    sortedPosts = useFamiliya(sortedPosts, Fio)
    sortedPosts = useAddress(sortedPosts, address)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post =>  post.name.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}
