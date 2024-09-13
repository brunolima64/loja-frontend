import * as C from "./styles";

type Props = {
    data: CategoryType;
    setCatSelected: (name: string) => void;
}

export const CategoryItem = ({ data, setCatSelected }: Props) => {
    return (
        <C.Container onClick={() => setCatSelected(data.name)}>
            <img src={data.img} alt={data.slug} />
            <p>{data.name}</p>
        </C.Container>
    )
}