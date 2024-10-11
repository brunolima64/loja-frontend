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
        opacity: .7;
    }

    @media (max-width: 540px) { 
        width: 160px;   
    }

    @media (max-width: 335px) { 
        width: 140px;   
    }
`;

export const AreaImage = styled.div` 
    height: auto;
    width: 100%;
    overflow: hidden; 
`;

export const AreaInfo = styled.div`
    display: flex;
    flex-direction: column; 
`;

export const Image = styled.img`
    height: auto;
    width: 100%; 
`;

export const Info = styled.div``;

export const Title = styled.h3`   
    word-wrap: break-word;
    text-align: left;
    margin: 10px 0;

    @media (max-width: 630px) { 
        font-size: 17px;
    }
`;

export const price = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-top: 30px; 
    text-align: end;
    color: blue;  

    @media (max-width: 630px) { 
        font-size: 14px; 
    }
`;

export const State = styled.p`
    margin: 5px 0;
    display: flex;
    align-items: center; 
    
    p {
        font-size: 14px;
        font-weight: 500; 
        color: #959595;
    }

    @media (max-width: 630px) { 
        font-size: 14px; 

        p {
            font-size: 13px; 
        }
    }
`;

export const Category = styled.p`
    margin: 5px 0;
    display: flex;
    align-items: center; 

    p {
        font-size: 14px;
        font-weight: 500; 
        color: #959595;
    }

    @media (max-width: 630px) { 
        font-size: 14px; 

        p {
            font-size: 13px; 
        }
    }
`;

export const Status = styled.p`
    margin: 5px 0;
    display: flex;
    align-items: center; 

    p {
        font-size: 14px;
        font-weight: 500; 
        color: #959595;
    }

    @media (max-width: 630px) { 
        font-size: 14px; 

        p {
            font-size: 13px; 
        }
    }
`;

