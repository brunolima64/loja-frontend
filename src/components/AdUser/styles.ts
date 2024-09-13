import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    width: 240px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    border-radius: 10px;
`;

export const InfoArea = styled.div`
`;

export const Image = styled.img`
    height: 250px;
    width: 100%;
`;

export const Title = styled.h3`
    text-align: left;
    margin-top: 10px;
`;

export const AreaDesc = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    p {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 5px;
    }
`;

export const Desc = styled.p`
    font-size: 15px; 
    color: #959595;
`;

export const price = styled.p`
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px; 
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
`;

export const AreaBtn = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: end;
    align-items: end;
`;

export const Btn = styled.img`
    width: 25px;
    height: 25px;  
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
 
    &:hover { 
        background-color: #e6e6e6;
        border: 1px solid #e6e6e6;
        box-shadow: 1px 1px 10px #e6e6e6;
    }
`;
