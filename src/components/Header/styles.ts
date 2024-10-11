import styled from "styled-components";

type showMenu = {
    variante: boolean;
};

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: center; 

`;

export const Header = styled.div`
    width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        text-decoration: none;
        color: #000;

        @media (max-width: 622px) {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    @media (max-width: 1000px) { 
        width: 100%;
        padding: 0 20px;
    } 
`;

export const Logo = styled.div`
    @media (max-width: 814px) {  
        font-size: 14px;
    }
`;

export const CloseModal = styled.div`
    display: none;

    @media (max-width: 622px) {
        display: flex;
        font-size: 17px; 
        padding: 5px;
        cursor: pointer;
        color: #f35038;
    }
`;

export const Menu = styled.nav<showMenu>`
    ul {
        display: flex;

        li {
            list-style: none;
            margin-left: 10px;
            padding: 10px 20px;
            font-size: 14px;
            cursor: pointer;
            border-bottom: 2px solid #fff;

            &:hover {
                border-bottom: 2px solid #f35038;
            }

            @media (max-width: 814px) {  
                font-size: 12px;
            }
        }

        .post {
            background-color: #f35038;
            color: #fff;
            border-radius: 6px;
            border: 2px solid #fff;
            &:hover {
                opacity: .9;
                border: 2px solid #fff;
            }
        }

        @media (max-width: 622px) { 
            display: ${(props) => props.variante === true ? 'flex' : 'none'};
            height: auto; 
            background-color: #fff; 
            flex-direction: column;  
            position: absolute; 
            right: 0;
            left: 0;
            top:  70px;
            padding: 20px  0px;
            border-bottom: 2px solid #f35038;
        } 
    } 
`;

export const MenuMobile = styled.div` 
    display: none;

    flex-direction: column;
    justify-content: space-around;
    width: 50px;
    height: 50px;
    cursor: pointer;

    div {
        height: 4px;
        background-color: #f35038;
        width: 100%;
    } 

    @media (max-width: 622px) {  
        display: flex;
    }
`;