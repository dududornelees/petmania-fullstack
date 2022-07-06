import { useState } from "react";

import * as S from "./styles";
import * as G from "styles";

import { IoMdClose, IoMdMenu } from "react-icons/io";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

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

                <S.MobileMenu>
                    {isOpen ? (
                        <IoMdClose onClick={() => setIsOpen(!isOpen)} />
                    ) : (
                        <IoMdMenu onClick={() => setIsOpen(!isOpen)} />
                    )}

                    <S.NavMobile className={isOpen ? "open" : ""}>
                        <S.NavMobileItem to="#home">Home</S.NavMobileItem>
                        <S.NavMobileItem to="#contato">Contato</S.NavMobileItem>
                        <S.NavMobileItem to="#adote-agora" className="adote-agora">
                            Adote agora!
                        </S.NavMobileItem>
                    </S.NavMobile>
                </S.MobileMenu>
            </G.Container>
        </S.Header>
    );
};
