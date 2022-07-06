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
        margin-bottom: 50px;
    }
`;

export const Contact = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin-bottom: 50px;
`;

export const ContactItem = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    &:first-child {
        grid-template-columns: 1fr 1fr;

        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }
`;

export const ContactItemInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 0px 10px;
    outline: none;
    font-weight: 500;
    background-color: #eeeeee;
    border: none;
    border-radius: var(--border-radius);
    font-size: var(--font-small);

    &:focus {
        border: 2px solid var(--primary-color);
    }
`;

export const Submit = styled.button`
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    background-color: var(--primary-color);
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    font-size: var(--font-small);
    border-radius: var(--border-radius);
    transition: var(--transition);

    &:hover {
        background-color: var(--primary-color-dark);
    }
`;
