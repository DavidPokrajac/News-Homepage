import Image from "next/image";
import "../css/header.css";
import "../css/utilities/visually-hidden.css";
import "../css/exceptions/exceptions.css";
import "../css/composition/flow.css";
import { MobileNavigationMenuProps } from "../types/MobileNavigationMenu.type";

export default function MobileNavigationMenu({
    isClicked,
    handleClick,
}: MobileNavigationMenuProps) {
    return (
        <div
            className={`[ mobile_navigation_menu ] ${
                isClicked ? "[ bring_in ]" : ""
            }`}
            aria-label="Mobile Navigation Menu Container"
        >
            <nav aria-label="Mobile Main Menu Navugation" role="navigation">
                <ul className={`[ mobile_navigation_container ]`}>
                    <li className={`[ nav_item ]`} data-type="nav-item-red">
                        <a href="#">Home</a>
                    </li>
                    <li className={`[ nav_item ]`} data-type="nav-item-red">
                        <a href="#">New</a>
                    </li>
                    <li className={`[ nav_item ]`} data-type="nav-item-red">
                        <a href="#">Popular</a>
                    </li>
                    <li className={`[ nav_item ]`} data-type="nav-item-red">
                        <a href="#">Trending</a>
                    </li>
                    <li className={`[ nav_item ]`} data-type="nav-item-red">
                        <a href="#">Categories</a>
                    </li>
                </ul>
            </nav>
            <span
                onClick={handleClick}
                className={`[ menu_close ]`}
                tabIndex={0}
                role="button"
            >
                <Image
                    src="/images/icon-menu-close.svg"
                    width={32}
                    height={31}
                    alt="Close"
                />
            </span>
        </div>
    );
}
