import styled from "styled-components";

export const Banner = styled.img`
    width: 100%;
    height: 240px;
    cursor: pointer;
    border-radius: var(--border-radius);
    object-fit: cover;
    margin: 25px 0px 50px 0px;

    @media screen and (max-width: 768px) {
        height: 150px;
        margin: 15px 0px;
    }
`;

export const PetCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 50px;
    margin-bottom: 50px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 25px;
    }
`;
