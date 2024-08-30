import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useRef, useState } from "react";
import * as C from "./styles";

type ErrType = {
    title: string;
    state: string;
    category: string;
    images: string;
}

export const CreateAd = () => {

    const [images, setImages] = useState([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const [state, setState] = useState("");
    const [cat, setCat] = useState("");
    const [priceNeg, setPriceNeg] = useState(false);

    const [err, setErr] = useState<ErrType | null>(null);

    const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let images: any = [];
        let errors: ErrType = {
            title: "",
            images: "",
            category: "",
            state: ""
        };

        if (fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
            const fileItem = fileInputRef.current.files;
            const allowed = ["image/jpeg", "image/jpg", "image/png"];

            for (let i in fileItem) {
                if (allowed.includes(fileItem[i].type)) {
                    images.push(fileItem[i]);
                }
                setImages(images);
            }
        }

        // verificar dados e prencher os possiveis erros
        if (images.length === 0) {
            errors.images = "Pelos menos um arquivo precisa ser enviado!"
        }

        if (!title) {
            errors.title = "Obrigatório!";
        }

        if (!state) {
            errors.state = "Obrigatório!";
        }

        if (!cat) {
            errors.category = "Obrigatório!";
        }

        if (!price && !priceNeg) {
            setPriceNeg(true);
        }

        // setar erros de dados invalidos do form
        setErr({
            title: errors.title,
            images: errors.images,
            category: errors.category,
            state: errors.state
        });
    }

    return (
        <C.PageContainer>
            <Header />
            <C.Container>
                <h2>Adicionar novo post:</h2>
                <form onSubmit={formSubmit}>
                    <C.InputArea>
                        <label>Selecione suas imagens:</label>
                        <input type="file" ref={fileInputRef} multiple />
                        {err && err.images &&
                            <C.MessageError>{err.images}</C.MessageError>}
                    </C.InputArea>
                    <C.InputArea>
                        <label>Titulo:</label>
                        <input
                            placeholder="Digite um titulo"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        {err && err.title !== "" &&
                            <C.MessageError>{err.title}</C.MessageError>}
                    </C.InputArea>
                    <C.InputArea>
                        <label>Descrição:</label>
                        <input
                            placeholder="Digite uma descrição"
                            value={desc}
                            onChange={e => setDesc(e.target.value)}
                        />
                    </C.InputArea>
                    <C.InputArea>
                        <label>Estado:</label>
                        <select name="" id="">
                            <option value="SP">SP</option>
                        </select>
                        {err && err.state &&
                            <C.MessageError>{err.state}</C.MessageError>}
                    </C.InputArea>
                    <C.InputArea>
                        <label>Categoria:</label>
                        <select name="" id="">
                            <option value="0">Esportes</option>
                        </select>
                        {err && err.category &&
                            <C.MessageError>{err.category}</C.MessageError>}
                    </C.InputArea>
                    <C.InputArea>
                        <label>Preço:</label>
                        <input
                            type="number"
                            placeholder="Qual vai ser o preço?"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </C.InputArea>

                    <C.Check>
                        <input
                            className="checkbox"
                            type="checkbox"
                            checked={priceNeg}
                            onChange={() => setPriceNeg(!priceNeg)}
                        />
                        <label>Preço é negociável?</label>
                    </C.Check>

                    <C.BtnArea>
                        <input type="submit" className="button" />
                    </C.BtnArea>
                </form>
            </C.Container>
            <Footer />
        </C.PageContainer>
    )
}