import "../app/css/styles.css";
import Header from "@/app/components/Header";
import NewsSidebarContainer from "@/app/components/NewsSidebarContainer";
import SecondaryArticles from "@/app/components/SecondaryArticles";
import MainArticle from "@/app/components/MainArticle";
import { getImageProps } from "next/image";

export default function Home() {
    const {
        props: { srcSet: desktop },
    } = getImageProps({
        width: 1460,
        height: 600,
        quality: 80,
        src: "/images/image-web-3-desktop.jpg",
        alt: "",
    });

    const {
        props: { srcSet: mobile },
    } = getImageProps({
        width: 686,
        height: 600,
        quality: 80,
        src: "/images/image-web-3-mobile.jpg",
        alt: "",
    });

    return (
        <>
            <Header />
            <main className={`[ main ]`}>
                <MainArticle desktopImg={desktop} mobileImg={mobile} />
                <NewsSidebarContainer />
                <SecondaryArticles />
            </main>
        </>
    );
}
