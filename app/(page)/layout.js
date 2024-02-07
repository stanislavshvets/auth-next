import Header from "@/components/Header";

const PageLayout = ({ children }) => {

    return (
        <>
            <Header />
           { children }
        </>
    );
};

export default PageLayout;