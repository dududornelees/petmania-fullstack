import { Header } from "components/Header";

type Props = {
    children: React.ReactNode;
};

export const MainTemplate = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};
