import CaseStudyLayout from "../components/CaseStudyLayout";
import banner from "../assets/images/BoB/banner.png";

// Design artifacts
import callData from "../assets/images/BoB/design artifacts/call-data.png";
import legacyAudit from "../assets/images/BoB/design artifacts/legacy-list-audit.png";

// LoFi Screens
import tableLofi from "../assets/images/BoB/lofi/table-lofi.png";
import statusLofi from "../assets/images/BoB/lofi/status-lofi.png";

// HiFi Screens
import tableHifi from "../assets/images/BoB/hifi/table-hifi.png";
import filteredHifi from "../assets/images/BoB/hifi/filtered-hifi.png";
import rateCalculationHifi from "../assets/images/BoB/hifi/rate-calculation-hifi.png";
import inlineValidationHifi from "../assets/images/BoB/hifi/inline-validation-hifi.png";
import tabletCardsHifi from "../assets/images/BoB/hifi/tablet-cards-hifi.png";
import tabletEditHifi from "../assets/images/BoB/hifi/tablet-edit-hifi.png";

const sections = ["Problem", "Goals", "Design", "Iteration", "Outcome"];

function BoB() {
    const meta = [
        { label: "Role", value: "Associate Software Engineer" },
        { label: "Timeline", value: "4 months" },
        { label: "Tools", value: "Figma, Angular, HTML/CSS" },
        { label: "Scope", value: "UX/UI design, prototyping, responsive design, front-end implementation" },
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
                summary="Insurance agencies manage surety bonds for their clients, but lacked a self-service way to look up bond information. Even routine questions meant calling the bond service center. As an Associate Software Engineer, I built on an existing product concept, took ownership of the UX/UI design, and contributed to front-end development. The result was an MVP of Book of Business, launched in Q4 2020."
                note="Please note this design was completed at a prior company. Data and sensitive information were removed to protect confidentiality."
                meta={meta}
                heroImage={banner}
                heroAlt="Book of Business web app"
                sections={sections}
            >
                {/* The Problem */}
                <section id="Problem">
                    <span className="label">01 — Problem</span>
                    <h2>Agencies had to call just to look up a bond</h2>
                    <div className="aside">
                        <strong>What is a surety bond?</strong>
                        <p className="mb-0">A surety bond is a three-party agreement that guarantees one party will meet an obligation to another, with a surety backing that promise. For example, a contractor may need a bond to qualify for a public project. Agencies manage these bonds on behalf of their clients throughout the bond lifecycle.</p>
                    </div>
                    <p className="mt-4">There was no central place for agencies to check bond information themselves. To understand the scale of the problem, I analyzed 23,239 inquiries to the bond service center. Nearly half were general bond lookups: questions an agency could answer on its own with the right tool.</p>
                    <figure>
                        <img src={callData} alt="Breakdown of bond service center inquiries by type" loading="lazy" />
                        <figcaption>General bond inquiries were the largest share of calls.</figcaption>
                    </figure>
                    <p className="mt-4">I audited the original bond list and edit views. A dense table, competing filters, and crowded navigation made individual records hard to find, and statuses relied on text alone.</p>
                    <figure>
                        <a href={legacyAudit} target="_blank" rel="noreferrer">
                            <img src={legacyAudit} alt="UX audit of the legacy bond list with annotated issues" loading="lazy" />
                        </a>
                        <figcaption>My audit of the legacy bond list, annotated with usability issues.</figcaption>
                    </figure>
                </section>

                {/* Product Goals */}
                <section id="Goals">
                    <span className="label">02 — Goals</span>
                    <h2>What self-service needed to deliver</h2>
                    <div className="cards three">
                        <div className="card">
                            <span className="card-label">01</span>
                            <h3>Enable self-service bond lookups</h3>
                            <p>Let agencies find any bond and its details on their own.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">02</span>
                            <h3>Make bond status and next steps visible</h3>
                            <p>Help agencies spot the bonds that need attention across many clients.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">03</span>
                            <h3>Simplify bond updates and premium calculations</h3>
                            <p>Show how each input affects the premium, and catch errors before saving.</p>
                        </div>
                    </div>
                </section>

                {/* Designing the Solution */}
                <section id="Design">
                    <span className="label">03 — Design</span>
                    <h2>Designing the experience</h2>

                    <div className="feature">
                        <span className="spotlight-num">01</span>
                        <h3>A bond list designed for faster lookups</h3>
                        <p>I simplified the table to the details agencies actually look for, added search and export, and gave the page a clear hierarchy. Bond numbers link directly to individual records, allowing agencies to retrieve bond details without contacting the service center.</p>
                    </div>
                    <div className="pair">
                        <figure>
                            <span className="tag">Lo-fi exploration</span>
                            <img src={tableLofi} alt="Wireframe of the simplified Book of Business table layout" loading="lazy" />
                            <figcaption>Simplifying the layout in a wireframe.</figcaption>
                        </figure>
                        <figure>
                            <span className="tag final">Hi-fi design</span>
                            <img src={tableHifi} alt="Final Book of Business table design with status tabs, search, and color-coded badges" loading="lazy" />
                            <figcaption>The redesigned bond list, with search and clearer information hierarchy.</figcaption>
                        </figure>
                    </div>

                    <div className="feature">
                        <span className="spotlight-num">02</span>
                        <h3>Status at a glance</h3>
                        <p>Text-only statuses blurred together in a long list. I introduced color-coded status badges and status tabs with live counts, so agencies can see how many bonds are open, pending, or cancelled and narrow the list in one step.</p>
                    </div>
                    <div className="pair">
                        <figure>
                            <span className="tag">Lo-fi exploration</span>
                            <img src={statusLofi} alt="Wireframe exploring bond status filters" loading="lazy" />
                            <figcaption>Exploring a clearer hierarchy for statuses and filters.</figcaption>
                        </figure>
                        <figure>
                            <span className="tag final">Hi-fi design</span>
                            <img src={filteredHifi} alt="Final design of color-coded status badges and status tabs" loading="lazy" />
                            <figcaption>Status tabs with live counts, filtered to cancelled bonds.</figcaption>
                        </figure>
                    </div>

                    <div className="feature">
                        <span className="spotlight-num">03</span>
                        <h3>Making premium calculations easier to understand</h3>
                        <p>A premium depends on bond amount, rate, minimum premium, commission, and state surcharges, and it was hard to see how each input contributed. I brought the inputs into one view with a line-by-line breakdown that updates as values change.</p>
                    </div>
                    <figure>
                        <span className="tag final">Hi-fi design</span>
                        <img src={rateCalculationHifi} alt="Rate calculation design with a live premium breakdown" loading="lazy" />
                        <figcaption>Each input's effect on the total premium due, updated live.</figcaption>
                    </figure>

                    <div className="feature">
                        <span className="spotlight-num">04</span>
                        <h3>Catching errors before submission</h3>
                        <p>Errors only appeared after a save attempt, leaving users to hunt for the problem. Inline validation now flags missing or incorrect fields as the form is completed, and saving waits until required information is in place.</p>
                    </div>
                    <figure>
                        <span className="tag final">Hi-fi design</span>
                        <img src={inlineValidationHifi} alt="Inline validation in the bond edit form" loading="lazy" />
                        <figcaption>Required fields are flagged in place before submission.</figcaption>
                    </figure>
                </section>

                {/* Iteration */}
                <section id="Iteration">
                    <span className="label">04 — Iteration</span>
                    <h2>Refining the design with agency users</h2>
                    <p>I reviewed the prototype with insurance agents, the intended users of the self-service experience. Their feedback surfaced usability issues in the early designs, including where filters should live.</p>
                    <div className="decision">
                        <span className="d-label">Design decision</span>
                        <h3>Where should the filters live?</h3>
                        <p>A persistent filter panel made filtering visible, but it took up nearly a third of the screen. I moved filters into the column headers, giving the bond information the room it needed.</p>
                    </div>
                    <div className="feature">
                        <h3>Designing beyond desktop</h3>
                    </div>
                    <p>I also extended the design to tablets with a responsive grid, collapsible navigation, and a card view that makes bonds easy to browse without a wide table.</p>
                    <div className="pair">
                        <figure>
                            <span className="tag final">Tablet design</span>
                            <img src={tabletCardsHifi} alt="Book of Business tablet card layout design" loading="lazy" />
                            <figcaption>On tablet, the table becomes a set of bond cards.</figcaption>
                        </figure>
                        <figure>
                            <span className="tag final">Tablet design</span>
                            <img src={tabletEditHifi} alt="Responsive bond edit form design" loading="lazy" />
                            <figcaption>The responsive edit form preserves access to navigation while adapting to a narrower screen.</figcaption>
                        </figure>
                    </div>
                </section>

                {/* Outcome */}
                <section id="Outcome">
                    <span className="label">05 — Outcome</span>
                    <h2>From concept to a shipped MVP</h2>
                    <p>After I presented the design process and final mockups, the team approved the direction for implementation. I contributed to the front-end build in Angular, and an MVP of Book of Business launched in Q4 2020, giving agencies one place to check bond status, view details, and manage client information.</p>
                    <p>Because nearly half of service center calls were general lookups, that analysis informed a business case projecting a potential <strong>40% reduction in call-center and mailing costs</strong>.</p>
                    <p className="source">Screens shown are my final Figma designs. The launched MVP was built from these designs, and the production application may differ.</p>

                    <h3 className="mt-5">What I took away</h3>
                    <p>I joined as a software engineer, but Book of Business is where I found product design. Working on both the experience and the build showed me how design connects implementation to the people it serves, and that I enjoy figuring out what we should build, and why, as much as building it.</p>
                </section>
            </CaseStudyLayout>
        </div>
    );
};

export default BoB;
