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

export const PageContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Container = styled.section`
    width: 1000px;
    display: flex;
    justify-content: center; 
    flex-direction: column;

    @media (max-width: 1000px) { 
        width: 100vw;
        align-items: center; 
    } 
`;

export const ProdInfos = styled.div`
    display: flex;
    justify-content: center;
    margin: 70px 0px;
    width: 100%;  

    @media (max-width: 642px) {
        flex-direction: column;
        align-items: center;  
    }  
`;

export const Left = styled.div` 
    display: flex; 
    background-color: #fff;
    box-shadow: 1px 1px 10px #bebebe;
    margin-right: 20px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }

    @media (max-width: 622px) {
        width: 300px;
        margin-bottom: 20px; 
        margin-right: 0px; 
    } 
`;

export const ImageArea = styled.div`  
    display: flex;
    align-items: center;
    width: 400px; 

    img {
        width: 400px;
        height: 100%; 
        overflow: hidden;
    }

    @media (max-width: 622px) {
        width: 300px; 
    } 
`;

export const ControllerBtns = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 400px; 
position: absolute;

@media (max-width: 622px) {
        width: 300px; 
} 
`;

export const BtnPrev = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 0;
    padding: 5px;
    border: 1px solid #bebebe;
    cursor: pointer; 

    @media (max-width: 1000px) {
        width: 25px;
        height: 25px; 
        padding: 0px;
    }
`;
export const BtnNext = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 0;
    padding: 5px;
    border: 1px solid #bebebe;
    cursor: pointer; 

    @media (max-width: 1000px) {
        width: 25px;
        height: 25px; 
        padding: 0px;
    }
`;

export const InfoArea = styled.div` 
    width: 318px;
    padding: 20px;

    p {
        margin-top: 10px;
    }

    @media (max-width: 1000px) { 
        font-size: 15px;
    }

    @media (max-width: 622px) { 
        width: 300px;
    }
`;

export const Infos = styled.div` 
    margin: 20px 0;
`;

export const Info = styled.div`
    display: flex;
    align-items: center; 
    color: gray;
    margin-bottom: 10px;

    h4 {  
        color: black;
        margin-right: 5px; 
    }

    @media (max-width: 1000px) { 
        h4 {  
            font-size: 15px;
        }
    }
`;

export const Title = styled.div`
    word-wrap: break-word;
    font-size: 22px;
    font-weight: 700;

    @media (max-width: 1000px) {
        font-size: 20px;
    }
`;

export const Right = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px; 

    @media (max-width: 1000px) {
        width: 200px;
    }

    @media (max-width: 624px) {
        width: 300px;
    } 
`;

export const PriceArea = styled.div`
background-color: #FFF;
padding: 10px;
border-radius: 10px; 
box-shadow: 1px 1px 10px #bebebe;

    p {
        font-weight: bold;
        color: blue;
    }

    h3 {
        margin-bottom: 5px;
    }

    @media (max-width: 1000px) {
        
        p {
            color: blue;
            font-size: 15px;
        }

        h3 {
            margin-bottom: 5px;
            font-size: 17px;
        }
    }

    @media (max-width: 622px) {
        width: 100%;
        display: flex;
        align-items: center; 

        h3 {
            margin-right: 5px;  
            margin-bottom: 0px;
        }

    } 
`;

export const Contact = styled.div`
    background-color: blue;
    padding: 10px 20px;
    border-radius: 6px;
    color: #FFF;
    cursor: pointer; 
    box-shadow: 1px 1px 10px #bebebe;

    &:hover {
        opacity: .8;
    }

    @media (max-width: 1000px) {
        font-size: 15px;
    } 
`;

export const Suport = styled.div`
    background-color: #FFF;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #bebebe;

    h3 {
        margin-top: 5px;
    }

    p {
        color: gray;
        font-size: 14px;
        margin-top: 10px;
    }

    @media (max-width: 624px) {
        h3 {
           font-size: 17px;
        }
    } 
`;


export const Desc = styled.div`
    margin-bottom: 10px;
    margin-top: 30px;
    font-weight: 500;
`;

export const DateCreated = styled.div`
    opacity: .4;
    font-size: 14px;
    margin-top: 10px;
`;

export const OthersArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
`;

export const AreaTitle = styled.div`
    width: 100%;
    padding: 0px 10px;

    h2 {
        font-size: 18px;
    } 

    @media (max-width: 422px) { 
        h2 {
            font-size: 15px;
        }; 
    }
`;

export const OthersAds = styled.div`
    width: auto;
    margin: 30px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    animation: ${slideIn} 1s ease-out;

    
    @media (max-width: 1000px) { 
        grid-template-columns: repeat(3, 1fr); 
    }

    @media (max-width: 780px) {  
        grid-template-columns: repeat(2, 1fr);  
    } 
`;