import styled from "styled-components";

export const Banner = styled.img`
    width: 100%;
    height: 240px;
    cursor: pointer;
    border-radius: var(--border-radius);
    object-fit: cover;
    margin-top: 25px;
    margin-bottom: 50px;

    @media screen and (max-width: 768px) {
        height: 150px;
    }
`;
