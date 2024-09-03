import styled from "styled-components";

export const Container = styled.div`
    height: 90vh;
    width: 100vw;
    display: flex;
    justify-content: center; 
    position: absolute;
`;
export const Alert = styled.div`
    width: 300px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border-radius: 6px;
    border: 1px solid gray;
    background-color: #fff;
    box-shadow: 1px 1px 20px gray;
`;

export const Text = styled.div`
    font-size: 14px;
`;

export const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;