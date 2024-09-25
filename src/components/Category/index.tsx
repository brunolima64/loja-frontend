import * as C from "./styles";

type Props = {
    data: CategoryType;
    setCatSelected: (name: string) => void;
    catSelected: string;
}

export const CategoryItem = ({ data, setCatSelected, catSelected }: Props) => {
    return (
        <C.Container
            style={{ backgroundColor: catSelected === data.name ? "#bebebe" : "" }}
            onClick={() => setCatSelected(data.name)}
        >
            <img src={data.img} alt={data.slug} />
            <p>{data.name}</p>
        </C.Container>
    )
}