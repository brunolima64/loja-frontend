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

@media(max-width: 520px) {
    width: 95%;
}
`;

export const Title = styled.h1`
    background-color: #f35038; 
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%; 
    padding: 30px; 
    color: #fff;

    @media(max-width: 520px) {
        font-size: 20px;
        padding: 20px; 
    }
`;

export const Form = styled.form`
width: 500px;
display: flex;
justify-content: center;
align-items: left;
flex-direction: column;
padding: 30px;
margin: 20px 0;


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

@media(max-width: 520px) {
    width: 100%;
    padding: 20px;

    a {
        font-size: 13px;
    }
}
`;

export const InputArea = styled.div``;

export const Input = styled.input`
width: 100%;
border: 0;
outline: 0;
padding: 10px 15px;
border-bottom: 1px solid #a0a0a0;
margin-top: 20px;

@media(max-width: 520px) {
    font-size: 13px; 
}
`;

export const MsgError = styled.p`
    color: red;
    font-size: 13px;
    padding: 5px 15px;
`;

export const SelectArea = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    
    
    label {
        font-size: 14px;
        color: gray;
        margin-bottom: 5px;
        margin-right: 10px;
    }
`;

export const Select = styled.select`
    width: 100px;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #a0a0a0;
`;

export const ButtonArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between; 
    margin-top: 30px;

    .btn {
        width: 100px;
        border: 0;
        background-color: #f35038;
        padding: 10px 15px;
        cursor: pointer;
        border-radius: 6px;
        color: #fff;
        text-align: center;  

        &:hover {
            opacity: .8;
        }
    }

    @media(max-width: 520px) {

        .btn {
            width: auto;
            font-size: 13px;
        }
    }
`;