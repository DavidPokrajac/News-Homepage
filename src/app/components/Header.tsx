"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "../css/header.css";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
    const [isMobileNav, setIsMobileNav] = useState(false);

    useEffect(() => {
        function resizeViewport() {
            if (window.innerWidth <= 676) {
                setIsMobileNav(true);
            } else {
                setIsMobileNav(false);
            }
        }
        window.addEventListener("resize", resizeViewport);
        return () => {
            window.removeEventListener("resize", resizeViewport);
        };
    }, [isMobileNav]);

    return (
        <header className={`[ news_article__header ]`}>
            <figure>
                <Image
                    src="/images/logo.svg"
                    width={65}
                    height={40}
                    alt="W company's offical logo"
                />
            </figure>

            {isMobileNav ? <MobileNavigation /> : <DesktopNavigation />}
        </header>
    );
}
