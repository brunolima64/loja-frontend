export type AdType = {
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
}