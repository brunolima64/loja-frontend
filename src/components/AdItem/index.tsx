import * as C from "./styles";

type Props = {
    data: any;
    onClick: (id: number) => void;
}
export const AdItem = ({ data, onClick }: Props) => {

    return (
        <C.Container onClick={() => onClick(data.id)}>
            <C.Image src={data.images[0].url} alt="" />
            <C.Title>{data.title}</C.Title>
            <C.Desc>{data.description}</C.Desc>
            <C.price>{data.price}</C.price>
        </C.Container>
    )
}