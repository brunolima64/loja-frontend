import axios from "axios";
import { AdType } from "../types/AdType";
import { CreateAdType } from "../types/CreateAdType";
import { UserType } from "../types/UserType";

const api = axios.create({
    baseURL: 'https://loja-backend-2-da6b.onrender.com'
});

export const getStates = async () => {
    const res = await api.get("/state");
    if (!res.data) return false;

    return res.data;
}

export const getCategories = async () => {
    const res = await api.get("/category");
    if (!res.data) return false;

    return res.data;
}

export const getAllAds = async (query: any) => {
    const res = await api.get("/item", {
        params: {
            q: query.q,
            skip: query.skip,
            cat: query.cat,
            sort: "asc",
            limit: query.limit,
            state: query.state
        },
    });
    if (!res.data) return false;

    return res.data;
}

export const getOneAd = async (id: string) => {
    const res = await api.get("/item/" + id)
    if (!res.data) return false;

    return res.data;
}

export const createAd = async (data: CreateAdType, token: string) => {

    const formData = new FormData();

    if (data.idUser) formData.append("idUser", data.idUser);
    if (data.title) formData.append("title", data.title);
    if (data.category) formData.append("category", data.category);
    if (data.state) formData.append("state", data.state);
    if (data.status) formData.append("status", data.status);
    if (data.description) formData.append("description", data.description);
    if (data.price) formData.append("price", data.price.toString());
    if (data.priceNeg) formData.append("priceNeg", data.priceNeg.toString());

    if (data.images) {
        for (let i in data.images) {
            formData.append(`images`, data.images[i]);
        }
    }

    const res = await api.post("/item", formData, {
        headers: {
            'authorization': token
        }
    })

    if (!res.data) return false;

    return res.data;
}

export const updateAd = async (data: AdType, token: string) => {

    const formData = new FormData();

    if (data.title) formData.append("title", data.title);
    if (data.category) formData.append("category", data.category);
    if (data.state) formData.append("state", data.state);
    if (data.status) formData.append("status", data.status);
    if (data.description) formData.append("description", data.description);
    if (data.price) formData.append("price", data.price.toString());
    if (data.priceNeg) formData.append("priceNeg", data.priceNeg.toString());

    if (data.images) {
        for (let i in data.images) {
            formData.append(`images`, data.images[i]);
        }
    }

    const res = await api.post(`/item/${data._id}`, formData, {
        headers: {
            'authorization': token
        }
    })
    if (!res.data) return false;

    return await res.data;
}

export const createUser = async (data: UserType) => {
    const res = await api.post("https://loja-backend-2-da6b.onrender.com/signup/me", data);
    if (!res.data) return false;

    console.log("newUser: ", res.data);
    return res.data;
}

export const getUser = async (data: UserType) => {
    const res = await api.post("https://loja-backend-2-da6b.onrender.com/signin/me", data);
    if (!res.data) return false;

    return res.data;
}

export const updateUser = async (data: UserType, token: string) => {
    const res = await api.put("/user/me/" + data._id, data, {
        headers: {
            'authorization': token
        }
    });
    if (!res.data) return false;

    return res.data;
}

export const search = async (query: string) => {

    const res = await api.get("/item", {
        params: {
            q: query,
        }
    });

    return res.data;
}


