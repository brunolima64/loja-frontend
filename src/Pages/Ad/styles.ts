import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Container = styled.section`
    width: 1000px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const ProdInfos = styled.div`
    display: flex;
    margin: 30px 0px;
`;

export const Left = styled.div`
    display: flex;
    flex: 1;
    background-color: #fff;
    box-shadow: 1px 1px 10px gray;
    margin-right: 20px;
`;

export const imageArea = styled.div`
    width: 500px;
    
    img {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }
`;

export const InfoArea = styled.div`
    padding: 20px;

    p {
        margin-top: 10px;
    }
`;

export const Title = styled.div`
    font-size: 22px;
    font-weight: 700;

    p {
        font-size: 14px;
    }
`;

export const Right = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const PriceArea = styled.div`
    font-weight: bold;
    background-color: #FFF;
    padding: 10px;
    border-radius: 10px;

    h1 {
        color: blue;
    }
`;

export const Contact = styled.div`
    background-color: blue;
    padding: 10px 20px;
    border-radius: 6px;
    color: #FFF;
    cursor: pointer;

    &:hover {
        opacity: .8;
    }
`;

export const Suport = styled.div`
    background-color: #FFF;
    padding: 10px;
    border-radius: 10px;

    h3 {
        margin-top: 5px;
    }

    p {
        color: gray;
        font-size: 14px;
        margin-top: 10px;
    }
`;


export const Desc = styled.div`
    margin-bottom: 10px;
    margin-top: 30px;
    font-weight: 500;
`;

export const DateCreated = styled.div`
    opacity: .4;
    font-size: 14px;
    margin-top: 10px;
`;

export const Others = styled.div`
    margin-top: 10px;
`;