import * as S from "./styles";
import * as G from "styles";

export const Header = () => {
    return (
        <S.Header>
            <G.Container>
                <S.Logo to="/">
                    <S.LogoImage src="/images/logo.jpg" alt="Logo - PetMania" />
                </S.Logo>

                <S.Nav>
                    <S.NavItem to="#home">Home</S.NavItem>
                    <S.NavItem to="#contato">Contato</S.NavItem>
                    <S.NavItem to="#adote-agora" className="adote-agora">
                        Adote agora!
                    </S.NavItem>
                </S.Nav>
            </G.Container>
        </S.Header>
    );
};
