import styled from "styled-components";

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
    }
`;

export const Logo = styled.div``;

export const Menu = styled.nav`
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
    }
`;