import * as C from "./styles";

export const SearchAd = () => {
    return (
        <C.Container>
            <C.Input type="text" />
            <select name="selecione um estado" id="">
                <option value="0"></option>
                <option value="1">SP</option>
            </select>
            <C.Button>Pesquisar</C.Button>
        </C.Container>
    )
}