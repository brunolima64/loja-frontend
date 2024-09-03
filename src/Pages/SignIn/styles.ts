import styled from "styled-components";

export const PageContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

export const FormArea = styled.div`
background-color: #fff;
border-radius: 10px;
`;

export const Title = styled.h2`
    background-color: #f35038; 
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%; 
    padding: 30px; 
    color: #fff;
`;

export const Form = styled.form`
width: 500px;
display: flex;
justify-content: center;
align-items: left;
flex-direction: column;
padding: 30px;

a {
    text-align: center;
    text-decoration: none;
    color: #f35038;
    font-size: 14px;
    margin-top: 40px;

    &:hover {
        color: #f98465;
    }
}
`;

export const Input = styled.input`
width: 100%;
border: 0;
outline: 0;
padding: 10px 15px;
border-bottom: 1px solid #a0a0a0;
margin-top: 20px;
margin-bottom: 5px;
`;


export const ButtonArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: end; 
    margin-top: 30px;
`;

export const Button = styled.input`
    width: 100px;
    border: 0;
    background-color: #f35038;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 6px;
    color: #fff;
    text-align: center;

    &:hover {
        opacity: .9;
    }
`;

export const msgError = styled.p`
    padding: 0 10px;
    font-size: 13px;
    color: red;
`;