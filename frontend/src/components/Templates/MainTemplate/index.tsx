import { Header, Footer } from "components";

type Props = {
    children: React.ReactNode;
};

export const MainTemplate = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};
