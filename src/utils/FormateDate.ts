export const FormateDate = (date: Date) => {
    let FormatedDate = date.toString().split("-");
    return `${FormatedDate[2].slice(0, 2)}/${FormatedDate[1]}/${FormatedDate[0]}`;
}