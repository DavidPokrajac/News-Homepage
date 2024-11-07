import "../../app/css/styles.css";
import "../css/exceptions/exceptions.css";
import "../css/utilities/utilities.css";
import { MainArticleProps } from "../types/MainArticle.type";

export default function MainArticle({
    desktopImg,
    mobileImg,
}: MainArticleProps) {
    return (
        <section className={`[ main__article ]`}>
            <article>
                <figure>
                    <picture>
                        <source
                            srcSet={desktopImg}
                            media="(min-width: 501px)"
                        />
                        <source srcSet={mobileImg} media="(max-width: 500px)" />

                        <img style={{ width: "100%", height: "auto" }} alt="" />
                    </picture>
                </figure>
                <div
                    className={`[ main__article__text_content ]`}
                    role="article"
                >
                    <h1 className={`[ primary_h1 ]`}>
                        The Bright Future of Web 3.0?
                    </h1>
                    <p>
                        {" "}
                        We dive into the next evolution of the web that claims
                        to put the power of the platforms back into the hands of
                        the people. But is it really fulfilling its promise?
                    </p>
                    <button
                        className={`[ primary_button align_self ]`}
                        data-type="primary-inverted"
                    >
                        Read more
                    </button>
                </div>
            </article>
        </section>
    );
}
