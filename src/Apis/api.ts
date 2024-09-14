import axios from "axios";
import { AdType } from "../types/AdType";
import { CreateAdType } from "../types/CreateAdType";
import { UserType } from "../types/UserType";

const api = axios.create({
    baseURL: 'https://loja-backend-2-da6b.onrender.com'
});

export const getStates = async () => {
    const res = await api.get("/state");
    return res.data;
}

export const getCategories = async () => {
    const res = await api.get("/category")
    return res.data;
}

export const getAllAds = async () => {
    const res = await api.get("/item")
    return res.data;
}

export const getOneAd = async (id: string) => {
    const res = await api.get("/item/" + id)

    return res.data;
}

export const createAd = async (data: CreateAdType, token: string) => {

    const formData = new FormData();

    if (data.idUser) formData.append("idUser", data.idUser);
    if (data.title) formData.append("title", data.title);
    if (data.category) formData.append("category", data.category);
    if (data.state) formData.append("state", data.state);
    if (data.description) formData.append("description", data.description);
    if (data.price) formData.append("price", data.price.toString());
    if (data.priceNeg) formData.append("priceNeg", data.priceNeg.toString()); // corrijir

    if (data.images) {
        for (let i in data.images) {
            formData.append(`images`, data.images[i]);
        }
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

export const updateAd = async (data: AdType, token: string) => {

    const formData = new FormData();

    if (data.title) formData.append("title", data.title);
    if (data.category) formData.append("category", data.category);
    if (data.state) formData.append("state", data.state);
    if (data.description) formData.append("description", data.description);
    if (data.price) formData.append("price", data.price.toString());
    if (data.priceNeg) formData.append("priceNeg", data.priceNeg.toString());

    if (data.images) {
        for (let i in data.images) {
            formData.append(`images`, data.images[i]);
        }
    }

    const res = await fetch(`https://loja-backend-2-da6b.onrender.com/item/${data._id}`, {
        method: "POST",
        headers: {
            'authorization': token
        },
        body: formData,
    })

    return await res.json();
}

export const createUser = async (data: UserType) => {
    const res = await api.post("https://loja-backend-2-da6b.onrender.com/signup/me", data);
    console.log("newUser: ", res.data);
    return res.data;
}

export const getUser = async (data: UserType) => {
    const res = await api.post("https://loja-backend-2-da6b.onrender.com/signin/me", data);
    return res.data;
}

export const updateUser = async (id: string) => {
    // const res = await api.get("/user/me" + id)

    // return res.data;
}

export const search = async (query: any) => {

    const res = await api.get("/item", {
        params: {
            q: query.q,
            skip: query.skip,
            cat: query.cat,
            sort: "asc",
            limit: query.limit,
            state: query.state
        }
    });

    return res.data;
}


