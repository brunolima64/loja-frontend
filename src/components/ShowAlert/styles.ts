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

type alertMsg = {
    variante: string;
};
export const Container = styled.div` 
    bottom: 30px;
    right: 30px;
    display: flex;
    justify-content: center; 
    position: fixed;
    z-index: 1001;
`;
export const Alert = styled.div<alertMsg>`
    width: 300px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border: 1px solid #bebebe;
    background-color: #fff;
    box-shadow: 1px 1px 20px gray; 
    border-left: 4px solid ${(props) => props.variante === 'success' ? 'green' : 'red'};
    animation: ${slideIn} 1s ease-out;
`;

export const Text = styled.div`
    font-size: 14px;
`;

export const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;