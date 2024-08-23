import { Ad } from "../types/Ad";

export const getStates = () => {

}

export const getCategories = () => {

}

export const getAllAds = async () => {
    const ads = await fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
    return ads;
}

export const getOneAd = async (id: string) => {
    const ad = await fetch("https://jsonplaceholder.typicode.com/photos/" + id)
        .then(response => response.json())
    return ad;
}

export const getUser = () => {

}

