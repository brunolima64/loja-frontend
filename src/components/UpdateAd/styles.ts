import styled from "styled-components";

export const BackGround = styled.div`
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;   
    background-color: black; 
    position: fixed;
    z-index: 33;
    opacity: .8;
`;

export const Container = styled.div`
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;  
    display: flex;
    justify-content: center;
    align-items: center; 
    position: fixed;   
    z-index: 999;
`;

export const InfoArea = styled.div`
    width: 600px; 
    display: flex;
    justify-content: center; 
    flex-direction: column;
    margin: 60px 0;
    background-color: #fff;
    padding: 20px 40px;
    border-radius: 6px; 
    position: fixed;
    z-index: 999;

    h2 {
        border-bottom: 1px solid #bebebe;
        padding: 10px 0;
        margin-bottom: 10px; 
    }

    @media(max-width: 640px) {
        width: 97%;    
        padding: 15px;
        
        h2 {
            font-size: 17px;
        }
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

    @media(max-width: 640px) {
        input {
            font-size: 13px;
        }

        select {
            font-size: 13px;
        }
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

    @media(max-width: 640px) {
        font-size: 14px;
    }
`;

export const BtnArea = styled.div`
    width: 500px;
    display: flex;
    align-items: end; 
    justify-content: space-between;

    .button {
        cursor: pointer;
        background-color: blue;
        color: #fff;
        padding: 10px 20px;
        border: 0;
        margin-top: 30px;
        width: auto;
        border-radius: 6px;

        &:hover{
            opacity: .8; 
            box-shadow: 1px 1px 10px blue;
        }
    }

    @media(max-width: 640px) {
        width: 100%;  
    }
`;

export const CancelBtn = styled.button`
    cursor: pointer;
    background-color: #fff; 
    padding: 10px 20px;
    border: 0;
    width: 100px;
    border-radius: 6px;

    &:hover{
        opacity: .8;
        box-shadow: 1px 1px 10px black;
    }
`;

export const MsgError = styled.p`
    font-size: 14px;
    color: red;
    margin: 5px 0;
`;