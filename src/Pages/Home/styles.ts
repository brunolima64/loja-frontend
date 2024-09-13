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
`;

export const AreaAds = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    gap: 10px;
    margin: 10px 0px;
    animation: ${slideIn} 1s ease-out;
`;

export const Warning = styled.p`
    width: 400px;
`;

export const SearchArea = styled.div`
    width: 1000px;
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #648a64;
    display: flex;
    align-items: center;

    select {
        
    }
`;

export const Select = styled.select`
    width: 100px;
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
`;

export const ShowFilters = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 0;
`;

export const ShowFilter = styled.div` 
    background-color: green;
    color: white;
    margin: 0px 10px;
    padding: 0px 10px;
    padding-bottom: 10px;
    border-radius: 6px;
    text-align: end;
`;

export const Back = styled.div` 
    cursor: pointer;
    margin: 5px 0;
    width: 100%;  
`;