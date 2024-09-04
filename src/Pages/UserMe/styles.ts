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

export const InfoUser = styled.div`
    display: flex;
    margin:  40px 0;
    padding: 30px 0;
    border-bottom: 1px solid #bebebe;
`;

export const ImgArea = styled.div`
    width: 200px;
    box-shadow: 1p 1px 10px gray;
    margin-right: 20px;

    img {
        width: 100%;
        background-size: cover;
        background-position: center;
        border-radius: 50%;
    }
`;

export const InfoArea = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Info = styled.div`

`;

export const AdsUser = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin: 30px 0;
`;