import styled from "styled-components";

export const Container = styled.div`
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    p {
        margin-top: 10px;
        font-size: 14px;
    }

    &:hover {
        opacity: .8;
    }
`;