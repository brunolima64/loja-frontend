import styled from "styled-components";

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

    h2 {
        margin-top: 20px;
    }

    h2 {
        margin-top: 20px;
        padding: 10px 0;
        cursor: pointer;

        &:hover {
            opacity: .8;
        }
    }
`;

export const Categories = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 100%;
    background-color: #fff;
    margin-top: 20px;
    border-radius: 10px;
    padding: 30px;
`;

export const recentAds = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    gap: 10px;
    margin: 20px 0px;
`;