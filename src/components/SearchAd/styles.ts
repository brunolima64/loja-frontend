import styled from "styled-components";

export const Container = styled.div`
    width: 1000px;
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #648a64;
    display: flex;
    align-items: center;

    select {
        width: 100px;
        margin-right: 10px;
        padding: 10px 15px;
        border-radius: 6px;
    }
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
    width: 100px;
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