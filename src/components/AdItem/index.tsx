import * as C from "./styles";

type Props = {
    data: any;
    showUpdateAd: (id: string) => void;
}
export const AdItem = ({ data, showUpdateAd }: Props) => {

    return (
        <C.Container onClick={() => showUpdateAd(data._id)}>
            <C.Image src={data.images[0].url} alt="" />
            <C.Title>{data.title}</C.Title>
            <C.Desc>{data.description}</C.Desc>
            <C.price>{data.price}</C.price>
            <C.price>{data.priceNeg}</C.price>
        </C.Container>
    )
}