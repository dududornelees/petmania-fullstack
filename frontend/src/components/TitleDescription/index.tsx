import * as S from "./styles";

type Props = {
    title: string;
    description: string;
};

export const TitleDescription = ({ title, description }: Props) => {
    return (
        <>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
        </>
    );
};
