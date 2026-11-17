import CaseStudyLayout from "../components/CaseStudyLayout";
import banner from "../assets/images/BoB/banner.png";

// Design artifacts
import callData from "../assets/images/BoB/design artifacts/call-data.png";
import legacyAudit from "../assets/images/BoB/design artifacts/legacy-list-audit.png";
import legacyList from "../assets/images/BoB/design artifacts/legacy-list.png";

// HiFi Screens
import tableHifi from "../assets/images/BoB/hifi/table-hifi.png";
import filteredHifi from "../assets/images/BoB/hifi/filtered-hifi.png";
import rateCalculationHifi from "../assets/images/BoB/hifi/rate-calculation-hifi.png";
import inlineValidationHifi from "../assets/images/BoB/hifi/inline-validation-hifi.png";
import tabletCardsHifi from "../assets/images/BoB/hifi/tablet-cards-hifi.png";
import tabletEditHifi from "../assets/images/BoB/hifi/tablet-edit-hifi.png";

const sections = ["Challenge", "Direction", "Design", "Outcome"];

function BoB() {
    const meta = [
        { label: "Role", value: "Associate Software Engineer, UX/UI design owner" },
        { label: "Team", value: "2 designers, 4 developers, 1 product manager" },
        { label: "Timeline", value: "4 months" },
        { label: "Tools", value: "Figma, Angular, HTML/CSS" },
        { label: "Status", value: "Shipped MVP, Q4 2020" },
    ];

    return (
        <div>
            <title>Calvin Ho | Book of Business</title>
            <meta name="description" content="Designing a self-service experience that helps insurance agencies find surety bond information, track statuses, and manage clients" />
            <meta name="keywords" content="Calvin Ho, Calvin Ho Design, Book of Business, Surety Bonds, Insurance, User Experience Design, UX" />
            <meta name="author" content="Calvin Ho" />

            <CaseStudyLayout
                client="Global and U.S. Surety Provider"
                title="Turning bond management into a self-service experience"
                summary="Insurance agencies had to call a service center just to look up a surety bond. Building on another designer's product concept, I owned the UX/UI design of a self-service tool and helped build its front end. It launched as an MVP in Q4 2020."
                note="Please note this design was completed at a prior company. Data and sensitive information were removed to protect confidentiality."
                meta={meta}
                heroImage={banner}
                heroAlt="Book of Business web app"
                sections={sections}
            >
                {/* Challenge */}
                <section id="Challenge">
                    <span className="label">01 — Challenge</span>
                    <h2>Agencies had to call just to look up a bond</h2>
                    <div className="aside">
                        <strong>What is a surety bond?</strong>
                        <p className="mb-0">A three-party agreement that guarantees one party will meet an obligation to another, with a surety backing that promise. For example, a contractor may need a bond to qualify for a public project. Agencies manage these bonds for their clients.</p>
                    </div>
                    <p className="mt-4">Agencies had no way to check bond information themselves. I analyzed 23,239 inquiries to the bond service center: nearly half were general bond lookups, questions an agency could answer on its own with the right tool.</p>
                    <figure>
                        <img src={callData} alt="Breakdown of bond service center inquiries by type" loading="lazy" />
                        <figcaption>General bond inquiries were the single largest category of calls, at about 45%.</figcaption>
                    </figure>
                </section>

                {/* Direction */}
                <section id="Direction">
                    <span className="label">02 — Direction</span>
                    <h2>What the existing tool got in the way of</h2>
                    <p>I audited the original bond list and edit views. A dense table, competing filters, and crowded navigation made records hard to find, and statuses relied on text alone.</p>
                    <figure>
                        <a href={legacyAudit} target="_blank" rel="noreferrer">
                            <img src={legacyAudit} alt="UX audit of the legacy bond list with annotated issues" loading="lazy" />
                        </a>
                        <figcaption>Each numbered note marks a usability issue, from clutter and filter usability to status visibility and small click targets. Select to enlarge.</figcaption>
                    </figure>
                    <p className="mt-4">The calls and the audit pointed to three goals:</p>
                    <div className="cards three">
                        <div className="card">
                            <span className="card-label">01</span>
                            <h3>Enable self-service lookups</h3>
                            <p>Let agencies find any bond and its details on their own.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">02</span>
                            <h3>Make status and next steps visible</h3>
                            <p>Help agencies spot the bonds that need attention across many clients.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">03</span>
                            <h3>Simplify updates and premiums</h3>
                            <p>Show how each input affects the premium, and catch errors before saving.</p>
                        </div>
                    </div>
                </section>

                {/* Design */}
                <section id="Design">
                    <span className="label">03 — Design</span>
                    <h2>Designing the experience</h2>

                    <div className="feature">
                        <span className="spotlight-num">01</span>
                        <h3>A bond list built for fast lookups</h3>
                        <p>I cut the table down to the details agencies actually look for, added search and export, and linked bond numbers straight to their records, so a routine lookup no longer needs a call.</p>
                    </div>
                    <div className="compare">
                        <figure className="small-shot shot">
                            <span className="tag">Before</span>
                            <img src={legacyList} alt="Legacy bond list with a long filter panel along the left side and a dense table" loading="lazy" />
                            <figcaption>The legacy list: a long filter panel and dozens of columns squeezed into the remaining space.</figcaption>
                        </figure>
                        <figure className="shot">
                            <span className="tag final">After</span>
                            <img src={tableHifi} alt="Redesigned bond list with status tabs, search, and color-coded badges" loading="lazy" />
                            <figcaption>Fewer columns, one clear page title, and a single primary action: Create New Bond.</figcaption>
                        </figure>
                    </div>
                    <div className="decision">
                        <span className="d-label">Design decision · from agent walkthroughs</span>
                        <h3>Where should the filters live?</h3>
                        <p>In informal walkthroughs, agents found that a persistent filter panel kept filtering visible but took up nearly a third of the screen. I moved filters into the column headers, giving bond information the room it needed.</p>
                    </div>

                    <div className="feature">
                        <span className="spotlight-num">02</span>
                        <h3>Status at a glance</h3>
                        <p>Text-only statuses blurred together in a long list. Color-coded badges and status tabs with live counts let agencies see how many bonds are open, pending, or cancelled, and narrow the list in one step. Every badge keeps its text label, so status never depends on color alone.</p>
                    </div>
                    <figure className="shot">
                        <img src={filteredHifi} alt="Bond list filtered to cancelled bonds using the status tabs, with the active filter shown as a removable chip" loading="lazy" />
                        <figcaption>One tap on "Cancelled" narrows the list, and the active filter shows as a chip that's easy to clear.</figcaption>
                    </figure>

                    <div className="feature">
                        <span className="spotlight-num">03</span>
                        <h3>Fewer surprises when editing a bond</h3>
                        <p>A premium depends on bond amount, rate, minimum premium, commission, and state surcharges, and it was hard to see how each input contributed. A line-by-line breakdown now updates as values change. Errors used to appear only after a save attempt; inline validation now flags missing fields as the form is filled in.</p>
                    </div>
                    <figure className="shot">
                        <img src={rateCalculationHifi} alt="Rate calculation with a live line-by-line premium breakdown" loading="lazy" />
                        <figcaption>The breakdown answers "why is the premium this number?" as each input changes.</figcaption>
                    </figure>
                    <figure className="shot">
                        <img src={inlineValidationHifi} alt="Inline validation flagging required fields in the bond edit form" loading="lazy" />
                        <figcaption>Required fields are flagged in place, before a failed save.</figcaption>
                    </figure>

                    <h3 className="mt-5">Beyond desktop</h3>
                    <p>I extended the design to tablets with a responsive grid, collapsible navigation, and a card view that makes bonds easy to browse without a wide table.</p>
                    <div className="pair">
                        <figure className="shot">
                            <img src={tabletCardsHifi} alt="Book of Business tablet card layout" loading="lazy" />
                            <figcaption>On tablet, the table becomes bond cards.</figcaption>
                        </figure>
                        <figure className="shot">
                            <img src={tabletEditHifi} alt="Responsive bond edit form on tablet" loading="lazy" />
                            <figcaption>The edit form keeps navigation one tap away on a narrower screen.</figcaption>
                        </figure>
                    </div>
                </section>

                {/* Outcome */}
                <section id="Outcome">
                    <span className="label">04 — Outcome</span>
                    <h2>From concept to a shipped MVP</h2>
                    <p>I presented the design process and final mockups, and the team approved the direction for implementation. I contributed to the front-end build in Angular, and an MVP of Book of Business launched in Q4 2020, giving agencies one place to check bond status, view details, and manage client information.</p>
                    <p>The call analysis also informed a business case projecting a potential <strong>40% reduction in call-center and mailing costs</strong>. That figure is a projection, not a measured result.</p>
                    <p className="source">Screens shown are my final Figma designs. The launched MVP was built from these designs, and the production application may differ.</p>

                    <h3 className="mt-5">What I took away</h3>
                    <p>I joined as a software engineer, but Book of Business is where I found product design. Working on both the experience and the build showed me I enjoy figuring out what we should build, and why, as much as building it.</p>
                </section>
            </CaseStudyLayout>
        </div>
    );
};

export default BoB;
