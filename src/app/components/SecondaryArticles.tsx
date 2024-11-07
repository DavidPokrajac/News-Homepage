import "../css/styles.css";
import "../css/exceptions/exceptions.css";
import "../css/utilities/utilities.css";
import "../css/composition/flow.css";
import Image from "next/image";

export default function SecondaryArticles() {
    return (
        <section className={`[ secondary__articles ]`}>
            <article className={`[ secondary_articles_flow ]`}>
                <Image
                    src="/images/image-retro-pcs.jpg"
                    width={200}
                    height={254}
                    alt="A small lego model of a retro personal computer"
                />
                <div
                    className={`[ block_flex_flow ] [ secondary_articles_text ]`}
                >
                    <span className={`[ counter ]`}>01</span>
                    <h4
                        className={`[ secondary_article_header ] [ text_medium ]`}
                        data-type="tomato_text"
                    >
                        Reviving Retro{" "}
                        <abbr title="Personal Computer">PCs</abbr>
                    </h4>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </div>
            </article>
            <article className={`[ secondary_articles_flow ]`}>
                <Image
                    src="/images/image-top-laptops.jpg"
                    width={200}
                    height={254}
                    alt="A keyboard of a laptop"
                />
                <div className={`[ block_flex_flow ]`}>
                    <span className={`[ counter ]`}>02</span>
                    <h4
                        className={`[ secondary_article_header ] [ text_medium ]`}
                        data-type="tomato_text"
                    >
                        Top 10 Laptops of 2022
                    </h4>
                    <p>Our best picks for various needs and budgets.</p>
                </div>
            </article>
            <article className={`[ secondary_articles_flow ]`}>
                <Image
                    src="/images/image-gaming-growth.jpg"
                    width={200}
                    height={254}
                    alt="A gaming joystick"
                />
                <div className={`[ block_flex_flow ]`}>
                    <span className={`[ counter ]`}>03</span>
                    <h4
                        className={`[ secondary_article_header ] [ text_medium ]`}
                        data-type="tomato_text"
                    >
                        The Growth of Gaming
                    </h4>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </article>
        </section>
    );
}
