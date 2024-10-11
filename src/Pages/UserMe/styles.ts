import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    overflow: hidden;
`;

export const Container = styled.div`
    width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0px 15px;

    @media (max-width: 1010px) {
        width: 100%; 
    }
`;

export const Title = styled.h1``;

export const InfoUser = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
    margin:  30px 0;
    padding: 40px 30px;
    background-color: #fff;
    border-radius: 10px;
    gap: 15px;

    @media(max-width: 420px) {
        h1 {
            font-size: 22px;
        } 

        p {
            font-size: 14px;
        }
    }
`;

export const InfoArea = styled.div`
    width: 100%;
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

export const AdsUserArea = styled.div`
     @media(max-width: 420px) {
        h3 {
            font-size: 18px;
        }
    } 
`;

export const AdsUser = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin: 30px 0;

    
    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr); 
    }

    @media(max-width: 780px) {
        grid-template-columns: repeat(2, 1fr); 
    }
`;