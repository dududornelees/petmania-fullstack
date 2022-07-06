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

    @media screen and (max-width: 768px) {
        height: 60px;

        > div {
            width: 100%;
        }
    }
`;

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    width: 90px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        width: 60px;
    }
`;

export const LogoImage = styled.img`
    width: 90px;
    height: 60px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        width: 60px;
        height: 40px;
    }
`;

export const Nav = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
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

export const MobileMenu = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;

        svg {
            width: 28px;
            height: 28px;
            cursor: pointer;
            color: var(--secondary-color);
        }
    }
`;

export const NavMobile = styled.nav`
    visibility: hidden;
    position: absolute;
    top: 60px;
    left: -999px;
    right: 0px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: var(--transition);

    &.open {
        visibility: visible;
        left: 0px;
        background-color: var(--secondary-color);
    }
`;

export const NavMobileItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    text-decoration: none;
    font-weight: 500;
    margin-bottom: 10px;
    font-size: var(--font-small);
    transition: var(--transition);

    &.adote-agora {
        width: 110px;
        height: 35px;
        background-color: var(--primary-color);
        border-radius: var(--border-radius);

        &:hover {
            background-color: var(--primary-color-dark);
        }
    }

    &:last-child {
        margin-bottom: 0px;
    }
`;
