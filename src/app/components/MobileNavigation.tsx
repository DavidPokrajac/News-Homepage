"use client";
import { useState } from "react";
import Image from "next/image";
import MobileNavigationMenu from "./MobileNavigationMenu";
import "../css/header.css";

export default function MobileNavigation() {
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    function handleShowMobileMenu() {
        setIsMenuClicked(!isMenuClicked);
    }

    return (
        <>
            <span
                onClick={handleShowMobileMenu}
                className={`[ cursor_pointer ]`}
                tabIndex={0}
                role="button"
            >
                <Image
                    src="/images/icon-menu.svg"
                    width={40}
                    height={17}
                    alt="Hamburger Menu Icon"
                />
            </span>

            <MobileNavigationMenu
                isClicked={isMenuClicked}
                handleClick={handleShowMobileMenu}
            />
        </>
    );
}
