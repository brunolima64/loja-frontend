import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
`;

export const Container = styled.div`
    width: 1000px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const Title = styled.h1``;

export const InfoUser = styled.div`
    display: flex;
    flex-direction: column;
    margin:  30px 0;
    padding: 40px 30px;
    background-color: #fff;
    border-radius: 10px;
    gap: 15px;
`;

export const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;

export const TitleInfo = styled.p`
    font-size: 17px;
`;

export const Info = styled.p`
    color: #808080;
`;

export const ButtonEditProfile = styled.button`
outline: 0;
border: 0;
padding: 10px 10px;
background-color: #3f21f6;
color: #fff;
border-radius: 6px;
width: 150px;
cursor: pointer;

&:hover {
    background-color: #5833f9;
}
`;

export const AdsUser = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin: 30px 0;
`;