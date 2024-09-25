export const FormateDate = (date?: string) => {
    if (date) {
        let FormatedDate = date.toString().split("-");
        return `${FormatedDate[2].slice(0, 2)}/${FormatedDate[1]}/${FormatedDate[0]}`;
    }
}