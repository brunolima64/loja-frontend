import * as C from "./styles";

export const SkeletonAd = () => {
    return (
        <C.Container>
            <C.AreaImage>
                <C.Image></C.Image>
            </C.AreaImage>
            <C.AreaInfo>
                <C.Title></C.Title>

                <C.Info>
                    <C.State></C.State>
                    <C.Category></C.Category>
                </C.Info>
            </C.AreaInfo>
        </C.Container >
    )
}