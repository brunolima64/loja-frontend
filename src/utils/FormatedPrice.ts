export const FormatedPrice = (price?: number) => {
    if (price) {
        let newPrice = price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        return newPrice;
    }

    return false;
}