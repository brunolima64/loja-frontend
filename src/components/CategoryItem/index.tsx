import * as C from "./styles";



type Props = { data: CategoryType; }

export const CategoryItem = ({ data }: Props) => {
    return (
        <C.Container>
            <img src={data.img} alt={data.slug} />
            <p>{data.name}</p>
        </C.Container>
    )
}