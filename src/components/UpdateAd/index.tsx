import { useContext, useEffect, useState } from "react";
import * as C from "./styles";
import { getCategories, getStates, updateAd } from "../../Apis/api";
import { StateType } from "../../types/StateType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { z } from "zod";
import { AdType } from "../../types/AdType";
import { AlertContext } from "../../contexts/AlertContext";

const schemaAd = z.object({
    title: z.string().optional(),
    price: z.number().optional(),
    priceNeg: z.boolean().optional(),
    desc: z.string().optional(),
    state: z.string().optional(),
    category: z.string().optional(),
    images: z
        .instanceof(FileList, { message: "O campo deve ser uma lista de arquivos válida" })
        .refine(files => files.length === 0 || Array.from(files).every(file => file instanceof File), {
            message: "Todos os arquivos devem ser válidos ou o campo deve ser vazio.",
        })
        .optional(),
});
type AdChemaType = z.infer<typeof schemaAd>;

type Props = {
    item: AdType;
    setAdSelected: (ad: AdType | undefined) => void;
    setShowModalUpdateAd: (b: boolean) => void;
}
export const UpdateAd = ({ item, setAdSelected, setShowModalUpdateAd }: Props) => {

    const adOriginalValues = {
        title: item.title,
        state: item.state,
        category: item.category,
        price: item.price,
        priceNeg: item.priceNeg,
        desc: item.description,
        images: undefined
    };

    const { handleSubmit, register, formState: { errors } } = useForm<AdChemaType>({
        resolver: zodResolver(schemaAd),
        defaultValues: adOriginalValues
    });

    const userCtx = useContext(UserContext);
    const alertCtx = useContext(AlertContext);

    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [cities, setCities] = useState<StateType[]>([]);
    const [isLoading, setIsLoading] = useState(false);

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

        const updatedAd = await updateAd({
            _id: item._id,
            title: data.title,
            state: data.state,
            category: data.category,
            description: data.desc,
            price: data.price,
            priceNeg: data.priceNeg,
            images: data.images,
        }, token);

        setIsLoading(false);

        // verifica se o item foi adicionado com sucesso e exibe um alert.
        if (!updatedAd) {
            alertCtx?.setAlertMsg("error");
        } else {
            alertCtx?.setAlertMsg("success");
        }

        setShowModalUpdateAd(false); // fecha o modal 
        setAdSelected(undefined); // Limpa o item do modal

        setTimeout(() => {
            alertCtx?.setAlertMsg(""); // limpa a mensagem de alerta
        }, 5000);
    }


    // close the modal
    const closedModalBtn = () => {
        setShowModalUpdateAd(false);
        setAdSelected(undefined); // Limpa o item do modal
    }

    return (
        <C.Container>
            <C.BackGround onClick={closedModalBtn}></C.BackGround>
            <C.InfoArea>
                <h2>Editar post: </h2>
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
                        <C.CancelBtn onClick={closedModalBtn}>cancelar</C.CancelBtn>
                        <input
                            type="submit"
                            className="button"
                            value={isLoading ? "atualizando..." : "atualizar"}
                        />
                    </C.BtnArea>
                </C.Form>
            </C.InfoArea>
        </C.Container>
    )
}