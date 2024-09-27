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
`;

export const AreaImage = styled.div` 
    height: 250px;
    width: 100%;
    overflow: hidden;
`;

export const AreaInfo = styled.div`
    display: flex;
    flex-direction: column; 
`;

export const Image = styled.img`
    height: 250px;
    width: 100%; 
`;

export const Info = styled.div``;

export const Title = styled.h3`   
    word-wrap: break-word;
    text-align: left;
    margin: 10px 0;

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
    font-size: 18px;
    font-weight: bold;
    margin-top: 30px; 
    text-align: end;
    color: blue;  
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

