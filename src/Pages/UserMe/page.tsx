import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import * as C from "./styles";

export const UserMe = () => {
    return (
        <C.PageContainer>
            <Header />
            <C.Container>
                <C.InfoUser>
                    <C.ImgArea>
                        <img
                            src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                            alt=""
                        />
                    </C.ImgArea>
                    <C.InfoArea>
                        <p><strong>Usuario:</strong></p>
                        <p><strong>email:</strong> </p>
                        <p><strong>senha:</strong></p>
                    </C.InfoArea>
                </C.InfoUser>
                <C.AdsUser>
                    <h3>Meus posts:</h3>
                    {/* Post do usuario logado */}
                </C.AdsUser>
            </C.Container>
            <Footer />
        </C.PageContainer>
    )
}