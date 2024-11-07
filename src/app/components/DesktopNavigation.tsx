import "../css/header.css";
import "../css/exceptions/exceptions.css";
import "../css/composition/flow.css";

export default function DesktopNavigation() {
    return (
        <nav aria-label="Main Menu Navigation" role="navigation">
            <ul className={`[ inline_flex_wrapper ]`}>
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
    );
}
