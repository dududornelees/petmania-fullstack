import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    height: 270px;
    cursor: pointer;
    background-color: #eeeeee;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
`;

export const CardImage = styled.img`
    width: 100%;
    height: 75%;
    object-fit: cover;
    border-radius: var(--border-radius);
`;

export const CardContent = styled.div`
    width: 100%;
    height: 20%;
    padding: 0px 15px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
`;

export const CardContentTitle = styled.div`
    color: var(--secondary-color);
    font-size: var(--font-medium);
`;

export const CardContentDescription = styled.div`
    color: #909090;
    font-size: var(--font-small);
`;
