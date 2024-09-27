import axios from "axios";

type UserReqType = {
    _id?: string;
    name?: string;
    email?: string;
    passwordHash?: string;
    state?: string;
    token?: string;
}

type AdReqtype = {
    _id: string;
    idUser?: string;
    title?: string;
    state?: string;
    category?: string;
    description?: string;
    price?: number;
    priceNeg?: boolean;
    images?: FileList | undefined;
    dateCreated?: string;
    views?: number;
    status?: string;
    others?: object[];
}

type CreateAdType = {
    idUser?: string;
    title?: string;
    state?: string;
    category?: string;
    description?: string;
    price?: number;
    priceNeg?: boolean;
    images?: FileList | undefined;
    status?: string;
}

const api = axios.create({
    baseURL: 'https://loja-backend-2-da6b.onrender.com'
});

export const getStates = async () => {
    try {
        const res = await api.get("/state");
        return res.data;
    } catch (error) { return false; }
}

export const getCategories = async () => {
    try {
        const res = await api.get("/category");
        return res.data;
    } catch (error) { return false; }
}

export const getAllAds = async (query?: any) => {
    try {
        const res = await api.get("/item", {
            params: {
                q: query?.q || "",
                skip: query?.skip || 0,
                cat: query?.cat || "",
                sort: "asc",
                limit: query?.limit || 10,
                state: query?.state || ""
            },
        });

        return res.data;

    } catch (error) { return false; }
}

export const getOneAd = async (id: string) => {
    try {
        const res = await api.get("/item/" + id);
        return res.data;
    } catch (error) { return false; }
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

    try {
        const res = await api.post("/item", formData, {
            headers: {
                'authorization': token
            }
        });
        return res.data;

    } catch (error) { return false };
}

export const updateAd = async (data: AdReqtype, token: string) => {

    const formData = new FormData();

    if (data.title) formData.append("title", data.title);
    if (data.category) formData.append("category", data.category);
    if (data.state) formData.append("state", data.state);
    if (data.status) formData.append("status", data.status);
    if (data.description) formData.append("description", data.description);
    if (data.price) formData.append("price", data.price.toString());
    if (data.priceNeg) formData.append("priceNeg", data.priceNeg.toString());

    if (data.images) {
        for (let i = 0; i < data.images.length; i++) {
            formData.append(`images`, data.images[i]);
        }
    }

    try {
        const res = await api.post(`/item/${data._id}`, formData, {
            headers: {
                'authorization': token
            }
        })
        return res.data;

    } catch (error) { return false };
}

export const createUser = async (data: UserReqType) => {
    try {
        const res = await api.post("https://loja-backend-2-da6b.onrender.com/signup/me", data);
        return res.data;
    } catch (error) { return false; }
}

export const getUser = async (data: UserReqType) => {
    try {
        const res = await api.post("https://loja-backend-2-da6b.onrender.com/signin/me", data);
        return res.data;
    } catch (error) { return false; }
}

export const updateUser = async (data: UserReqType, token: string) => {
    try {
        const res = await api.put("/user/me/" + data._id, data, {
            headers: {
                'authorization': token
            }
        });
        return res.data;
    } catch (error) { return false; }
}

export const search = async (query: string) => {
    try {
        const res = await api.get("/item", {
            params: {
                q: query,
            }
        });
        return res.data;
    } catch (error) { return false; }
}


