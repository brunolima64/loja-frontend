import styled from "styled-components";

export const PageContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

export const TitleArea = styled.div`
    width: 300px;
    margin-bottom: 20px;
    
    h1 {
        color: #2e292e;
    }
`;

export const InputArea = styled.div`
width: 400px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #fff;
border-radius: 10px;
padding: 30px 10px;

a {
    text-decoration: none;
    color: #f35038;
    font-size: 14px;
    margin-top: 20px;

    &:hover {
        color: #f98465;
    }
}
`;

export const Input = styled.input`
    width: 300px;
    padding: 10px 15px;
    border-radius: 6px;
    border: 1px solid #eee;
    outline: 0;
    margin: 10px 0px;
`;

export const ButtonArea = styled.div`
    width: 300px;
    display: flex;
    justify-content: end;
`;

export const Button = styled.button`
    width: 100px;
    margin-top: 20px;
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