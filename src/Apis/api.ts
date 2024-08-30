export const getStates = async () => {
    const res = await fetch("https://loja-backend-2-da6b.onrender.com/states")
        .then(response => response.json())
    return res;
}

export const getCategories = async () => {
    const res = await fetch("https://loja-backend-2-da6b.onrender.com/category")
        .then(response => response.json())
    return res;
}

export const getAllAds = async () => {
    const res = await fetch("https://loja-backend-2-da6b.onrender.com/item")
        .then(response => response.json())
    return res;
}

export const getOneAd = async (id: string) => {
    const res = await fetch("https://loja-backend-2-da6b.onrender.com/item/" + id)
        .then(response => response.json())
    return res;
}

export const getUser = async (id: string) => {
    const res = await fetch("https://loja-backend-2-da6b.onrender.com/user/me")
        .then(response => response.json())
    return res;
}

export const updateUser = async (id: string) => {
    const res = await fetch("https://loja-backend-2-da6b.onrender.com/user/me" + id)
        .then(response => response.json())
    return res;
}


