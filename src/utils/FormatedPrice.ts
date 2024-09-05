export const FormatedPrice = (price: number) => {
    let newPrice = price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return newPrice;
}