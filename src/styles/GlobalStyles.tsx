import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;        
        box-sizing: border-box;
        --primary-color: #e7ddaa;
        --secondary-color: #523216;
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
