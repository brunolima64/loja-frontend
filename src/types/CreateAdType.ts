export type CreateAdType = {
    idUser?: string;
    title?: string;
    state?: string;
    category?: string;
    description?: string;
    price?: number;
    priceNeg?: boolean;
    images?: FileList | undefined;
}