import { FormEvent } from "react";
import { MainTemplate } from "components";
import { TitleDescription, PetCard } from "components";

import * as S from "./styles";
import * as G from "styles";

export const Home = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <MainTemplate>
            <G.Container>
                <S.Banner src="/images/banner.jpg" />

                <TitleDescription
                    title="Confira os pets que podem ser seu!"
                    description="Temos diversos pets que estão anciosos por uma família."
                />

                <S.PetCards>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <PetCard key={index} title="José" description="Porto Alegre - RS" />
                    ))}
                </S.PetCards>

                <TitleDescription
                    title="Entre em contato!"
                    description="Envie um email ou nos acione pelas redes sociais!"
                />

                <S.Contact onSubmit={handleSubmit}>
                    <S.ContactItem>
                        <S.ContactItemInput placeholder="Nome" type="text" />
                        <S.ContactItemInput placeholder="Sobrenome" type="text" />
                    </S.ContactItem>

                    <S.ContactItem>
                        <S.ContactItemInput placeholder="Email" type="email" />
                    </S.ContactItem>

                    <S.ContactItem>
                        <S.ContactItemInput placeholder="Celular" type="number" />
                    </S.ContactItem>

                    <S.Submit type="submit">Enviar!</S.Submit>
                </S.Contact>
            </G.Container>
        </MainTemplate>
    );
};
