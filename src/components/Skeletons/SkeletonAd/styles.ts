import styled, { keyframes } from "styled-components";

// Define a animação de skeleton-loading separadamente
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
  background-color: #fff;
  width: 235px;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 540px) {
    width: 160px;
  }

  @media (max-width: 335px) {
    width: 140px;
  }
`;

export const AreaImage = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e0e0e0; /* cor inicial de fundo */
  border-radius: 8px;
  animation: ${skeletonLoading} 1.5s infinite ease-in-out;
`;

export const AreaInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Image = styled.div`
  width: 100%;
  height: 80px;
  background-color: #e0e0e0;
  border-radius: 8px;
  animation: ${skeletonLoading} 1.5s infinite ease-in-out;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  width: 100%;
  height: 20px;
  margin-top: 5px;
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: ${skeletonLoading} 1.5s infinite ease-in-out;
`;

export const Price = styled.p`
  width: 100%;
  height: 20px;
  margin-top: 5px;
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: ${skeletonLoading} 1.5s infinite ease-in-out;
`;

export const State = styled.p`
  width: 100%;
  height: 20px;
  margin-top: 5px;
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: ${skeletonLoading} 1.5s infinite ease-in-out;
`;

export const Category = styled.p`
  width: 100%;
  height: 20px;
  margin-top: 5px;
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: ${skeletonLoading} 1.5s infinite ease-in-out;
`;

