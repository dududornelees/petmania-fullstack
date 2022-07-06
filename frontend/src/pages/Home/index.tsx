import { MainTemplate } from "components";
import { TitleDescription } from "components";

import * as S from "./styles";
import * as G from "styles";

export const Home = () => {
    return (
        <MainTemplate>
            <G.Container>
                <S.Banner src="/images/banner.jpg" />

                <TitleDescription
                    title="Confira os pets que podem ser seu!"
                    description="Temos diversos pets que estão anciosos por uma família."
                />
            </G.Container>
        </MainTemplate>
    );
};
