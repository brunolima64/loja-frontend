import * as C from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { createAd, getCategories, getStates } from "../../Apis/api";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StateType } from "../../types/StateType";
import { AlertContext } from "../../contexts/AlertContext";

const schemaAd = z.object({
    title: z.string().min(1, { message: "Obrigatório" }),
    price: z.number({ message: "Obrigatório" }),
    priceNeg: z.boolean().optional(),
    desc: z.string().optional(),
    state: z.string().min(1, { message: "Selecione um estado válido" }),
    category: z.string().min(1, { message: "Selecione uma categoria válida" }),
    images: z.instanceof(FileList, { message: "O campo deve ser uma lista de arquivos válida" })
        .refine((files) => Array.from(files).length > 0, {
            message: "Por favor, selecione pelo menos uma imagem.",
        })
        .refine((files) => Array.from(files).every(file => file instanceof File), {
            message: "Todos os arquivos devem ser válidos.",
        })
});
type AdChemaType = z.infer<typeof schemaAd>;

export const CreateAd = () => {
    const userCtx = useContext(UserContext);
    const alertCtx = useContext(AlertContext);

    // bloqueia o acesso, caso o usuario não esteja logado.
    if (!userCtx?.userLogged) {
        window.location.href = "/";
        return false;
    };

    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [cities, setCities] = useState<StateType[]>([]);

    const [isLoading, setIsLoading] = useState(false);

    const { handleSubmit, register, formState: { errors } } = useForm<AdChemaType>({
        resolver: zodResolver(schemaAd)
    });

    // Pegar categories
    useEffect(() => {
        const getCats = async () => {
            const res = await getCategories();
            setCategories(res.categories);
        }
        getCats();
    }, []);

    // Pegar states
    useEffect(() => {
        const getCities = async () => {
            const res = await getStates();
            setCities(res.states);
        }
        getCities();
    }, []);

    // formulario
    const formSubmit = async (data: AdChemaType) => {
        setIsLoading(true);
        const token = userCtx?.userLogged.token;

        const newAd = await createAd({
            idUser: userCtx?.userLogged._id,
            title: data.title,
            state: data.state,
            category: data.category,
            description: data.desc,
            price: data.price,
            priceNeg: data.priceNeg,
            images: data.images,
        }, token);

        setIsLoading(false);

        // verifica se o item foi adicionado com sucesso
        if (!newAd) {
            alertCtx?.setAlertMsg("error");
        } else {
            alertCtx?.setAlertMsg("success");
        }

        setTimeout(() => {
            alertCtx?.setAlertMsg("");
        }, 5000);
    }

    return (
        <C.PageContainer>
            <Header />
            <C.Container>
                <h2>Adicionar novo post:</h2>
                <C.Form onSubmit={handleSubmit(formSubmit)}>
                    <C.InputArea>
                        <label>Selecione suas imagens:</label>
                        <input type="file" multiple {...register("images")} />
                        {errors.images && <C.MsgError>{errors.images.message as string}</C.MsgError>}
                    </C.InputArea>

                    <C.InputArea>
                        <label>Titulo:</label>
                        <input
                            placeholder="Digite um titulo"
                            {...register("title")}
                        />
                        {errors.title && <C.MsgError>{errors.title.message as string}</C.MsgError>}
                    </C.InputArea>

                    <C.InputArea>
                        <label>Descrição:</label>
                        <input
                            placeholder="Digite uma descrição"
                            {...register("desc")}
                        />
                    </C.InputArea>

                    <C.InputArea>
                        <label>Estado:</label>
                        <select id="state" {...register("state")}>
                            <option value=""></option>
                            {cities && cities.map((it) => (
                                <option key={it._id} value={it.name}>{it.name}</option>
                            ))}
                        </select>
                        {errors.state && <C.MsgError>{errors.state.message as string}</C.MsgError>}
                    </C.InputArea>

                    <C.InputArea>
                        <label>Categoria:</label>
                        <select id="category" {...register("category")}>
                            <option value=""></option>
                            {categories && categories.map((it) => (
                                <option key={it._id} value={it.name}>{it.name}</option>
                            ))}
                        </select>
                        {errors.category && <C.MsgError>{errors.category.message as string}</C.MsgError>}
                    </C.InputArea>

                    <C.InputArea>
                        <label>Preço:</label>
                        <input
                            type="number"
                            placeholder="Qual vai ser o preço?"
                            {...register("price", { valueAsNumber: true })}
                        />
                    </C.InputArea>

                    <C.Check>
                        <input
                            className="checkbox"
                            type="checkbox"
                            {...register("priceNeg")}
                        />
                        <label>Preço é negociável?</label>
                    </C.Check>

                    <C.BtnArea>
                        <input
                            type="submit"
                            className="button"
                            value={isLoading ? "adicionando..." : "adicionar"}
                        />
                    </C.BtnArea>
                </C.Form>
            </C.Container>
            <Footer />
        </C.PageContainer>
    )
}