import styled from "styled-components";

export const Container = styled.div`
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer; 
    border-radius: 6px;
    padding: 6px;

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

    @media (max-width: 430px) { 
        img {
            width: 40px;
            height: 40px; 
        }

        p { 
            font-size: 13px;
        }
    }
`;