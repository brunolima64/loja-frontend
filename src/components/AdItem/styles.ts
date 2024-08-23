import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    width: 240px;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        opacity: .9;
    }
`;

export const Image = styled.img`
    height: 250px;
    background-size: cover;
    background-position: center;
`;

export const Title = styled.h3`
    text-align: left;
    margin-top: 10px;
`;

export const Desc = styled.p`
    font-size: 15px;
    margin-top: 10px;
`;

export const price = styled.p`
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px;
`;
