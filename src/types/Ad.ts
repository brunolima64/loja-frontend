export type Ad = {
    _id: string;
    idUser: string;
    title: string;
    state: string;
    category: string;
    description: string;
    price: number;
    priceNeg: boolean;
    images: [{
        url: string;
        default: boolean
    }];
    dateCreated: string;
    views: number;
    status: string;
    others: object[];
}