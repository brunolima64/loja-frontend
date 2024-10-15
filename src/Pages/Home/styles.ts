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
    flex-direction: column;
    align-items: center;
    padding: 0px 15px;

    h2 {
        margin-top: 20px;
    }

    h2 {
        margin-top: 20px;
        padding: 10px 0;
        cursor: pointer;

        &:hover {
            opacity: .8;
        }
    }

    @media (max-width: 1070px) { 
        width: 90%;
    }
`;

export const Categories = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 100%;
    background-color: #fff;
    margin-top: 20px;
    border-radius: 10px;
    padding: 30px; 

    @media (max-width: 630px) { 
        width: 320px;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    @media (max-width: 430px) { 
        padding: 5px; 
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;

export const AreaAds = styled.div`
    display: grid; 
    grid-template-columns: repeat(4, 1fr);
    width: auto;
    gap: 10px;
    margin: 10px 0px;
    animation: ${slideIn} 1s ease-out;
    padding: 5px;

    @media (max-width: 1070px) {  
        grid-template-columns: repeat(3, 1fr); 
    }

    @media (max-width: 780px) {
        grid-template-columns: repeat(2, 1fr); 
    }
`;

export const Warning = styled.p`
    width: 400px;
`;

export const SearchArea = styled.div`
    width: 100%;
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #648a64;
    display: flex;
    align-items: center;

    
    @media (max-width: 430px) { 
        padding: 10px 10px;
    }
`;

export const Select = styled.select`
    width: auto;
    margin-right: 10px;
    padding: 10px 15px;
    border-radius: 6px; 
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px 15px;
    border-radius: 6px;
    border: 1px solid #eee;
    outline: 0;
    margin-right: 10px;
`;

export const Button = styled.button`
    width: auto;
    border: 0;
    background-color: #335cb8;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 6px;
    color: #fff;
    text-align: center;

    &:hover {
        opacity: .9;
    }

    @media (max-width: 430px) { 
        padding: 10px 7px;
    }
`;

export const ButtonArea = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-right: 5px;
margin-top: 30px;
width: 100%;
gap: 20px;


    div {
        border: 1px solid #bebebe;
        padding: 6px;
        background-color: #fff; 
        border-radius: 6px;
        cursor: pointer;
    }
`;

export const AreaTitle = styled.div` 
    width: 100%;
    padding: 0px 10px;

    h2 {
        text-align: left;
        width: 100%;
        font-size: 18px;
    } 

    @media (max-width: 480px) {
        h2 {
            font-size: 15px;
        }
    }
`;


export const AllAds = styled.div``;