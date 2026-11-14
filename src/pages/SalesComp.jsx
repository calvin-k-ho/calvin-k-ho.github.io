import CaseStudyLayout from "../components/CaseStudyLayout";
import Quote from "../components/Quote";
import banner from "../assets/images/SalesComp/banner.png";

// Design Artifacts
import excelWorkbook from "../assets/images/SalesComp/design artifacts/excel-workbook.png";
import agenticBlueprint from "../assets/images/SalesComp/design artifacts/agentic-blueprint.png";

// LoFi Screens
import lofiRateTable from "../assets/images/SalesComp/lofi/rate-table.png";

// HiFi Screens
import cycleOverview from "../assets/images/SalesComp/hifi/cycle-overview.png";
import rateTable from "../assets/images/SalesComp/hifi/rate-table.png";
import agentProposed from "../assets/images/SalesComp/hifi/agent-proposed.png";
import agentGuided from "../assets/images/SalesComp/hifi/agent-guided.png";
import scenariosCards from "../assets/images/SalesComp/hifi/scenarios-cards.png";
import fullComparison from "../assets/images/SalesComp/hifi/full-comparison.png";
import mobileHome from "../assets/images/SalesComp/hifi/mobile-home.png";
import mobileRateTable from "../assets/images/SalesComp/hifi/mobile-rate-table.png";
import mobileScenarios from "../assets/images/SalesComp/hifi/mobile-scenarios.png";

const sections = ["Problem", "Goals", "Design", "Review", "Outcome"];

function SalesComp() {
    const meta = [
        { label: "Role", value: "Product Designer" },
        { label: "Timeline", value: "2 months" },
        { label: "Tools", value: "Figma, Claude Code" },
        { label: "Scope", value: "Process discovery, product concept, UX/UI design, interactive prototyping" },
    ];

    return (
        <>
            <title>Calvin Ho | AI-Assisted Compensation Planning</title>
            <meta name="description" content="Designing an AI-assisted experience for complex compensation workflows, from process discovery to an interactive prototype" />
            <meta name="keywords" content="Calvin Ho, Calvin Ho Design, AI, Agentic UX, Compensation Planning, Enterprise UX, User Experience Design, UX" />
            <meta name="author" content="Calvin Ho" />

            <CaseStudyLayout
                client="Enterprise Telecommunications"
                title="Designing an AI-assisted experience for complex compensation workflows"
                summary="Compensation planning teams manage pay rates, model financial scenarios, and route decisions for approval, often through spreadsheets and manual handoffs. During a broader process redesign engagement, I independently developed a product concept outside the engagement's formal scope: an AI-assisted planning experience that keeps people in control of every decision. I designed the experience and co-developed an interactive prototype using Claude Code. Following stakeholder reviews, the concept is moving into development in the next phase of the engagement."
                note="This is a real client project. Visuals have been recreated with fictional data and generalized workflows to protect client confidentiality."
                meta={meta}
                heroImage={banner}
                heroAlt="AI-assisted compensation planning dashboard"
                sections={sections}
            >
                {/* The Problem */}
                <section id="Problem">
                    <span className="label">01 — Problem</span>
                    <h2>A process held together by spreadsheets</h2>
                    <p>Compensation planning involved interconnected calculations, regional inputs, and multiple layers of review. Much of the process lived in workbooks passed between people, making it difficult to know which version was current, what decisions were outstanding, or how a change affected the overall budget.</p>
                    <figure>
                        <img src={excelWorkbook} alt="Spreadsheet-based compensation model used before the redesign" loading="lazy" />
                        <figcaption>An illustrative recreation of the spreadsheet-based compensation planning process.</figcaption>
                    </figure>
                    <p className="mt-4">As part of the broader engagement, I contributed to process discovery and blueprinting. Through working sessions with the Compensation Planning Lead, I mapped the existing workflow and identified where tasks could be automated, where AI could assist, and where human judgment needed to remain central.</p>
                    <figure>
                        <img src={agenticBlueprint} alt="Service blueprint separating automated, AI-assisted, and human steps" loading="lazy" />
                        <figcaption>The service blueprint separated automated tasks, AI-assisted activities, and decisions requiring human judgment.</figcaption>
                    </figure>
                </section>

                {/* Product Goals */}
                <section id="Goals">
                    <span className="label">02 — Goals</span>
                    <h2>Turning a better process into a product experience</h2>
                    <p>The blueprint outlined opportunities to improve the process, but it didn't define how those improvements should come together in a product. I independently developed a concept around three goals:</p>
                    <div className="cards three">
                        <div className="card">
                            <span className="card-label">01</span>
                            <h3>Show where the cycle stands</h3>
                            <p>Bring progress, outstanding work, and pending decisions into one place instead of relying on inbox updates.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">02</span>
                            <h3>Make every change's impact visible</h3>
                            <p>Show the financial effect of a rate change as planners make it.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">03</span>
                            <h3>AI proposes, people decide</h3>
                            <p>Provide recommendations with clear explanations, while keeping every decision in human hands.</p>
                        </div>
                    </div>
                </section>

                {/* Designing the Solution */}
                <section id="Design">
                    <span className="label">03 — Design</span>
                    <h2>Four core interactions</h2>
                    <p>I organized the concept around four moments that mattered most during a compensation planning cycle.</p>

                    <div className="spotlights">
                        <div className="spotlight">
                            <div className="spotlight-media">
                                <figure>
                                    <img src={cycleOverview} alt="Cycle overview with summary metrics, a staged progress indicator, and an activity feed" loading="lazy" />
                                    <figcaption>The cycle overview brings progress, key metrics, and outstanding decisions together.</figcaption>
                                </figure>
                            </div>
                            <div className="spotlight-text">
                                <span className="spotlight-num">01</span>
                                <h3>Cycle overview</h3>
                                <p>Planners lacked a single view of progress and outstanding work. I designed an overview that surfaces the current cycle stage, key metrics against targets, and who the process is waiting on.</p>
                                <p>An activity feed distinguishes tasks completed by the system from decisions requiring human attention, helping planners focus on what needs action.</p>
                            </div>
                        </div>
                        <div className="spotlight">
                            <div className="spotlight-media">
                                <figure>
                                    <img src={rateTable} alt="Editable rate table beside a live financial impact panel" loading="lazy" />
                                    <figcaption>Rate management pairs editable values with live financial impact.</figcaption>
                                </figure>
                            </div>
                            <div className="spotlight-text">
                                <span className="spotlight-num">02</span>
                                <h3>Rate management</h3>
                                <p>In the spreadsheet-based process, the financial impact of a rate change often required recalculating values elsewhere. I designed an editable rate table alongside a live financial impact panel, allowing planners to see how changes affect the budget as they work.</p>
                                <p>Validation checks provide additional context before changes move forward.</p>
                            </div>
                        </div>
                        <div className="spotlight">
                            <div className="spotlight-media">
                                <figure>
                                    <img src={agentProposed} alt="Rate table with AI-proposed values shown in place beside current values" loading="lazy" />
                                    <figcaption>AI proposals appear alongside current values, with their reasoning available in context.</figcaption>
                                </figure>
                            </div>
                            <div className="spotlight-text">
                                <span className="spotlight-num">03</span>
                                <h3>AI recommendations in context</h3>
                                <p>Rather than separating AI into a standalone assistant, I integrated proposed rates directly into the planning table alongside current values.</p>
                                <p>Planners can accept, adjust, or dismiss each recommendation. Each proposal also includes an explanation of the agent's reasoning, allowing people to evaluate why a rate was suggested rather than simply trusting the output.</p>
                            </div>
                        </div>
                        <div className="spotlight">
                            <div className="spotlight-media">
                                <figure>
                                    <img src={scenariosCards} alt="Three compensation scenarios compared side by side with AI analysis" loading="lazy" />
                                    <figcaption>The comparison brings scenario metrics and AI analysis into one view.</figcaption>
                                </figure>
                            </div>
                            <div className="spotlight-text">
                                <span className="spotlight-num">04</span>
                                <h3>Scenario comparison</h3>
                                <p>Previously, comparing alternatives meant duplicating spreadsheet tabs and manually transferring values. I designed a side-by-side comparison that brings each scenario's cost, attainment, and budget margin into one view, alongside AI-generated analysis of the tradeoffs.</p>
                                <p>Planners can evaluate the alternatives and decide which scenario should move forward.</p>
                            </div>
                        </div>
                    </div>

                    <figure className="mt-5">
                        <img src={fullComparison} alt="Full scenario comparison showing each option's total cost and budget margin" loading="lazy" />
                        <figcaption>A full comparison puts every metric for each option in one table.</figcaption>
                    </figure>

                    <h3 className="mt-5">Extending the experience to mobile</h3>
                    <p>I also explored read-only mobile views so leaders could follow cycle progress and review scenarios away from their desks.</p>
                    <figure>
                        <div className="trio phones mb-3">
                            <figure>
                                <img src={mobileHome} alt="Cycle overview on mobile, showing progress and outstanding decisions" loading="lazy" />
                            </figure>
                            <figure>
                                <img src={mobileRateTable} alt="Rate table on mobile with horizontal scrolling" loading="lazy" />
                            </figure>
                            <figure>
                                <img src={mobileScenarios} alt="Read-only scenario comparison on mobile with AI reasoning" loading="lazy" />
                            </figure>
                        </div>
                        <figcaption>The mobile experience provides access to cycle progress, rate information, and scenario comparisons.</figcaption>
                    </figure>
                </section>

                {/* Review */}
                <section id="Review">
                    <span className="label">04 — Review</span>
                    <h2>Making the agent's reasoning visible</h2>
                    <p>I walked stakeholders through the interactive prototype in a series of review sessions. The Compensation Planning Lead responded:</p>
                    <Quote source="Compensation Planning Lead">"I LOVE THIS. I think you tapped into my brain and showed me what I didn't know I needed."</Quote>
                    <p>The most important feedback centered on explainability. Before trusting an AI-generated suggestion, the lead wanted to understand the reasoning behind it.</p>
                    <p>I made that a central design principle: recommendations should carry their explanations with them, directly alongside the decision. This gives planners the context to evaluate, challenge, or accept a suggestion without surrendering control to the agent.</p>
                    <div className="pair">
                        <figure>
                            <img src={lofiRateTable} alt="Low-fidelity rate table with a plain rate grid and placeholder summary metrics" loading="lazy" />
                            <figcaption>Low-fidelity exploration of the rate table.</figcaption>
                        </figure>
                        <figure>
                            <img src={agentGuided} alt="High-fidelity rate table with AI-proposed values, an explanation of the reasoning, and live financial metrics" loading="lazy" />
                            <figcaption>High-fidelity design with AI-proposed values, explanations, and live financial impact.</figcaption>
                        </figure>
                    </div>
                </section>

                {/* Outcome */}
                <section id="Outcome">
                    <span className="label">05 — Outcome</span>
                    <h2>From independent concept to development</h2>
                    <p>What began as an independently initiated idea outside the engagement's formal scope became an interactive prototype demonstrating how the future-state compensation process could work as a product experience.</p>
                    <p>Following stakeholder reviews, the concept is moving from design into development in the next phase of the engagement.</p>

                    <h3 className="mt-5">What I learned</h3>
                    <p>Designing for AI starts with the decisions people need to make, not with the AI itself. The most valuable part of the experience wasn't the recommendations alone, but the context and transparency that allowed people to evaluate them with confidence.</p>
                </section>
            </CaseStudyLayout>
        </>
    );
};

export default SalesComp;
