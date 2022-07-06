import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
    height: 80px;
    display: flex;
    align-items: center;
    background-color: var(--primary-color);

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    width: 90px;
    cursor: pointer;
`;

export const LogoImage = styled.img`
    width: 90px;
    height: 60px;
    cursor: pointer;
`;

export const Nav = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
`;

export const NavItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 25px;
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: var(--font-small);
    transition: var(--transition);

    &.adote-agora {
        width: 110px;
        height: 35px;
        background-color: var(--secondary-color);
        border-radius: var(--border-radius);

        &:hover {
            background-color: var(--secondary-color-dark);
        }
    }
`;
