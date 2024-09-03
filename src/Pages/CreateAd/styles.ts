import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100vw; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Container = styled.div`
    width: 600px; 
    display: flex;
    justify-content: center; 
    flex-direction: column;
    margin: 60px 0;
    background-color: #fff;
    padding: 20px 40px;
    border-radius: 6px;

    h2 {
        border-bottom: 1px solid #bebebe;
        padding: 10px 0;
        margin-bottom: 10px; 
    }
`;

export const Form = styled.form`
    display: flex; 
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;

    input {
        padding: 10px 20px;
        border-radius: 6px;
        outline: none;
        border: 1px solid gray;
        width: 100%;
    }

    select {
        padding: 10px 20px;
        border-radius: 6px;
        outline: none;
        border: 1px solid gray;
        width: 150px;
    }
`;

export const InputArea = styled.div`
    display: flex; 
    flex-direction: column;

    label {
        font-size: 14px;
        margin: 5px 0;
    }   
`;

export const Check = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    cursor: pointer;
    
    .checkbox {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        cursor: pointer;
    }

`;

export const BtnArea = styled.div`
    width: 500px;
    display: flex;
    align-items: end; 
    justify-content: end;

    .button {
        cursor: pointer;
        background-color: blue;
        color: #fff;
        padding: 10px 20px;
        border: 0;
        margin-top:20px;
        width: 200px;

        &:hover{
            opacity: .8;
        }
    }
`;

export const MsgError = styled.p`
    font-size: 14px;
    color: red;
    margin: 5px 0;
`;