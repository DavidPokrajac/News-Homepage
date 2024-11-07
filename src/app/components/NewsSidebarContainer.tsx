import "../css/styles.css";
import "../css/utilities/utilities.css";

export default function NewsSidebarContainer() {
    return (
        <aside
            className={`[ news__aside_container ] [ primary_aside padding_md ]`}
        >
            <h2 className={`[ golden_text ]`}>New</h2>
            <article>
                <h3 className={`[ article_heading ]`} data-type="golden_text">
                    Hydrogen VS Electric Cars
                </h3>
                <p>
                    Will hydrogen-fueled cars ever catch up to{" "}
                    <abbr title="Electric Vehicles">EVs</abbr>?
                </p>
            </article>
            <article>
                <h3 className={`[ article_heading ]`} data-type="golden_text">
                    The Downsides of{" "}
                    <abbr title="Artificial Intelligence">AI</abbr> Artistry
                </h3>
                <p>
                    What are the possible adverse effects of on-demand
                    <abbr title="Artifical Intelligence">AI</abbr> image
                    generation?
                </p>
            </article>
            <article>
                <h3 className={`[ article_heading ]`} data-type="golden_text">
                    Is <abbr title="Venture Capital">VC</abbr> Funding Drying
                    Up?
                </h3>
                <p>
                    Private funding by <abbr title="Venture Capital">VC</abbr>{" "}
                    firms is down 50% <abbr title="Year-over-year">YOY</abbr>.
                    We take a look at what that means.
                </p>
            </article>
        </aside>
    );
}
