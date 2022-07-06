import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;        
        box-sizing: border-box;

        /* Variables */
        --primary-color: #e7ddaa;
        --primary-color-dark: #b09f7f;
        --secondary-color: #523216;
        --secondary-color-dark: #3f2b0e;
        --font-large: 22px;
        --font-medium: 18px;
        --font-small: 14px;
        --border-radius: 12px;
        --transition: all 0.3s ease-in-out;

        @media screen and (max-width: 768px) {
            --font-large: 16px;
            --font-medium: 14px;
            --font-small: 12px;
        }
    }

    body {
        font-family: 'Poppins', sans-serif;      
    }
`;

export const Container = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 768px) {
        width: 750px;
    }

    @media (min-width: 992px) {
        width: 970px;
    }
`;
