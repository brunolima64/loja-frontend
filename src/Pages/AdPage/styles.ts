import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

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
    margin: 70px 0px;
    width: 100%;
`;

export const Left = styled.div` 
    display: flex; 
    background-color: #fff;
    box-shadow: 1px 1px 10px #bebebe;
    margin-right: 20px;
`;

export const ImageArea = styled.div`  
    img {
        width: 400px;
        height: 100%;
    }
`;

export const InfoArea = styled.div` 
    width: 350px;
    padding: 20px;

    p {
        margin-top: 10px;
    }
`;

export const Infos = styled.div`
    margin: 20px 0;
`;

export const Info = styled.div`
    display: flex;
    align-items: center; 
    color: gray;
    margin-bottom: 10px;

    h4 {  
        color: black;
        margin-right: 5px; 
    }
`;

export const Title = styled.div`
    word-wrap: break-word;
    font-size: 22px;
    font-weight: 700;

    p {
        font-size: 14px;
    }
`;

export const Right = styled.div`
    width: 300px;
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

export const OthersAds = styled.div`
    margin: 30px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    animation: ${slideIn} 1s ease-out;
`;