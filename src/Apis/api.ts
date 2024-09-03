import { Ad } from "../types/Ad";
import { UserType } from "../types/UserType";

export const getStates = async () => {
    const res = await fetch("https://loja-backend-2-da6b.onrender.com/state")
    const json = await res.json();

    return json;
}

export const getCategories = async () => {
    const res = await fetch("https://loja-backend-2-da6b.onrender.com/category")
    const json = await res.json();

    return json;
}

export const getAllAds = async () => {
    const res = await fetch("https://loja-backend-2-da6b.onrender.com/item")
    const json = await res.json();

    return json;
}

export const getOneAd = async (id: string) => {
    const res = await fetch("https://loja-backend-2-da6b.onrender.com/item/" + id)
    const json = await res.json();

    return json;
}

export const createAd = async (data: Ad, token: string) => {

    const formData = new FormData();

    formData.append("idUser", data.idUser);
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("state", data.state);
    formData.append("description", data.description);
    formData.append("price", data.price.toString());

    for (let i in data.images) {
        formData.append(`images`, data.images[i]);
    }

    const res = await fetch("https://loja-backend-2-da6b.onrender.com/item", {
        method: "POST",
        headers: {
            'authorization': token
        },
        body: formData,
    })

    return await res.json();
}

export const createUser = async (data: UserType) => {

    const res = await fetch("https://loja-backend-2-da6b.onrender.com/signup/me", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return res;
}

export const getUser = async (data: UserType) => {
    const res = await fetch("https://loja-backend-2-da6b.onrender.com/signin/me", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const json = await res.json();

    return json;
}

export const updateUser = async (id: string) => {
    const res = await fetch("https://loja-backend-2-da6b.onrender.com/user/me" + id)
    const json = await res.json();

    return json;
}


