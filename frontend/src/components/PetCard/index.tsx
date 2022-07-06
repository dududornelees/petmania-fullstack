import * as S from "./styles";

type Props = {
    title: string;
    description: string;
};

export const PetCard = ({ title, description }: Props) => {
    return (
        <S.Card>
            <S.CardImage src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />

            <S.CardContent>
                <S.CardContentTitle>{title}</S.CardContentTitle>
                <S.CardContentDescription>{description}</S.CardContentDescription>
            </S.CardContent>
        </S.Card>
    );
};
