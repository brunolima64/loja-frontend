import styled, { keyframes } from "styled-components";

const skeletonLoading = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #e0e0e0;
  }
`;

export const Container = styled.div`
    width: 80px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 6px;

    .img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        animation: ${skeletonLoading} 1.5s infinite ease-in-out;
    }

    p {
        margin-top: 10px;
        height: 5px;
        animation: ${skeletonLoading} 1.5s infinite ease-in-out;
    }

    @media (max-width: 430px) { 
        img {
            width: 40px;
            height: 40px; 
        }
    }
`;