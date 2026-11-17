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
import mobileHome from "../assets/images/SalesComp/hifi/mobile-home.png";
import mobileRateTable from "../assets/images/SalesComp/hifi/mobile-rate-table.png";
import mobileScenarios from "../assets/images/SalesComp/hifi/mobile-scenarios.png";

const sections = ["Challenge", "Direction", "Design", "Review", "Outcome"];

function SalesComp() {
    const meta = [
        { label: "Role", value: "Product Designer (independently initiated)" },
        { label: "Collaborators", value: "Compensation Planning Lead" },
        { label: "Timeline", value: "2 months" },
        { label: "Tools", value: "Figma, Claude Code" },
        { label: "Status", value: "Stakeholder-reviewed prototype; development planned" },
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
                summary="Compensation planning ran on spreadsheets passed between people. Outside the engagement's formal scope, I conceived and designed an AI-assisted planning experience that keeps people in control of every decision, and co-developed an interactive prototype with Claude Code."
                note="This is a real client project. Visuals have been recreated with fictional data and generalized workflows to protect client confidentiality."
                meta={meta}
                heroImage={banner}
                heroAlt="AI-assisted compensation planning dashboard"
                sections={sections}
            >
                {/* Challenge */}
                <section id="Challenge">
                    <span className="label">01 — Challenge</span>
                    <h2>A process held together by spreadsheets</h2>
                    <p>Compensation planning teams set pay rates, model financial scenarios, and route decisions for approval. The work involved interconnected calculations, regional inputs, and several layers of review, and most of it lived in workbooks passed between people. It was hard to know which version was current, what was still outstanding, or how a change affected the budget.</p>
                    <figure>
                        <img src={excelWorkbook} alt="Spreadsheet-based compensation model used before the redesign" loading="lazy" />
                        <figcaption>An illustrative recreation. Note the two "final" versions, status kept in a color key, and scenarios copied into separate tabs.</figcaption>
                    </figure>
                </section>

                {/* Direction */}
                <section id="Direction">
                    <span className="label">02 — Direction</span>
                    <h2>Turning a better process into a product</h2>
                    <p>As part of the broader engagement, I contributed to process discovery. In working sessions with the Compensation Planning Lead, I mapped the workflow: what could be automated, where AI could help, and where human judgment had to stay central.</p>
                    <figure>
                        <img src={agenticBlueprint} alt="Service blueprint separating automated, AI-assisted, and human steps" loading="lazy" />
                        <figcaption>The blueprint sorted each step into automated, AI-assisted, or human decision.</figcaption>
                    </figure>
                    <p className="mt-4">The blueprint described a better process, but not how it should come together as a product. So I independently developed a product concept around three goals:</p>
                    <div className="cards three">
                        <div className="card">
                            <span className="card-label">01</span>
                            <h3>Show where the cycle stands</h3>
                            <p>Progress, outstanding work, and pending decisions in one place, not in inbox updates.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">02</span>
                            <h3>Make every change's impact visible</h3>
                            <p>Show the financial effect of a rate change as planners make it.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">03</span>
                            <h3>AI proposes, people decide</h3>
                            <p>Recommendations with clear explanations, with every decision in human hands.</p>
                        </div>
                    </div>
                </section>

                {/* Design */}
                <section id="Design">
                    <span className="label">03 — Design</span>
                    <h2>Four moments that matter in a planning cycle</h2>

                    <div className="feature">
                        <span className="spotlight-num">01</span>
                        <h3>Cycle overview</h3>
                        <p>Planners had no single view of progress. The overview shows the current stage, key metrics against targets, and who the process is waiting on. An activity feed separates what the system completed from decisions that need a person.</p>
                    </div>
                    <figure className="shot">
                        <img src={cycleOverview} alt="Cycle overview with summary metrics, a staged progress indicator, and an activity feed" loading="lazy" />
                        <figcaption>The first question every planner had, "where are we, and what's waiting on me?", answered on one screen.</figcaption>
                    </figure>

                    <div className="feature">
                        <span className="spotlight-num">02</span>
                        <h3>Rate management with live impact</h3>
                        <p>In the spreadsheet, seeing the effect of a rate change meant recalculating values elsewhere. I put an editable rate table beside a live financial impact panel, with validation checks before changes move forward.</p>
                    </div>
                    <figure className="shot">
                        <img src={rateTable} alt="Editable rate table beside a live financial impact panel showing an off-target result" loading="lazy" />
                        <figcaption>The impact panel flags the plan as off target the moment a change pushes cost past the range.</figcaption>
                    </figure>

                    <div className="feature">
                        <span className="spotlight-num">03</span>
                        <h3>AI recommendations in context</h3>
                        <p>The obvious move was a chatbot off to the side. I put the AI's proposed rates directly in the planning table instead, next to current values, because that's where the decision happens. Planners can accept, adjust, or dismiss each proposal.</p>
                        <p>Every proposal carries its reasoning with it, so planners judge why a rate was suggested instead of trusting the output. Nothing is applied automatically.</p>
                    </div>
                    <figure className="shot">
                        <img src={agentGuided} alt="Rate table with an AI proposal explanation open beside the proposed value" loading="lazy" />
                        <figcaption>Each proposal explains itself in place: why the rate changed, and what it saves.</figcaption>
                    </figure>
                    <figure className="shot">
                        <img src={agentProposed} alt="Rate table with AI-proposed values shown in place beside current values, and the plan back on target" loading="lazy" />
                        <figcaption>Proposed values sit beside current ones, and the impact panel shows the result before anything is accepted.</figcaption>
                    </figure>

                    <div className="feature">
                        <span className="spotlight-num">04</span>
                        <h3>Scenario comparison</h3>
                        <p>Comparing options used to mean duplicating spreadsheet tabs and copying values by hand. Scenarios now sit side by side with cost, attainment, and budget margin, plus an AI analysis of the tradeoffs. The analysis is labeled as analysis, and choosing a scenario stays with the planner.</p>
                    </div>
                    <figure className="shot">
                        <img src={scenariosCards} alt="Three compensation scenarios compared side by side with AI analysis" loading="lazy" />
                        <figcaption>Conservative, balanced, and aggressive options, each with its tradeoffs visible at a glance.</figcaption>
                    </figure>

                    <h3 className="mt-5">Read-only on mobile</h3>
                    <p>I also explored mobile views so leaders could follow progress and review scenarios away from their desks. Editing rates stays on desktop.</p>
                    <div className="trio phones">
                        <figure className="shot">
                            <img src={mobileHome} alt="Cycle overview on mobile, showing progress and outstanding decisions" loading="lazy" />
                        </figure>
                        <figure className="shot">
                            <img src={mobileRateTable} alt="Rate table on mobile with horizontal scrolling" loading="lazy" />
                        </figure>
                        <figure className="shot">
                            <img src={mobileScenarios} alt="Read-only scenario comparison on mobile with AI reasoning" loading="lazy" />
                        </figure>
                    </div>
                </section>

                {/* Review */}
                <section id="Review">
                    <span className="label">04 — Review</span>
                    <h2>Explainability became the design principle</h2>
                    <p>I walked stakeholders through the interactive prototype in a series of review sessions. The Compensation Planning Lead responded:</p>
                    <Quote source="Compensation Planning Lead">"I LOVE THIS. I think you tapped into my brain and showed me what I didn't know I needed."</Quote>
                    <p>The most important feedback was about explainability: before trusting an AI suggestion, the lead wanted to see the reasoning behind it. That became a central principle: recommendations carry their explanations with them, right where the decision is made.</p>
                    <div className="compare">
                        <figure className="small-shot shot">
                            <span className="tag">Lo-fi</span>
                            <img src={lofiRateTable} alt="Low-fidelity rate table with a plain grid and placeholder summary metrics" loading="lazy" />
                            <figcaption>The lo-fi set the structure: the rate grid beside a summary panel.</figcaption>
                        </figure>
                        <figure className="shot">
                            <span className="tag final">Hi-fi</span>
                            <img src={agentProposed} alt="High-fidelity rate table with AI-proposed values and live financial metrics" loading="lazy" />
                            <figcaption>The hi-fi adds what the goals called for: live impact, validation, and AI proposals with their reasoning one hover away.</figcaption>
                        </figure>
                    </div>
                </section>

                {/* Outcome */}
                <section id="Outcome">
                    <span className="label">05 — Outcome</span>
                    <h2>From independent concept to a planned build</h2>
                    <p>What began as an idea outside the engagement's formal scope became a stakeholder-reviewed interactive prototype showing how the future-state process could work as a product. It's planned for development in the next phase of the engagement.</p>

                    <h3 className="mt-5">What I learned</h3>
                    <p>Designing for AI starts with the decisions people need to make, not with the AI itself. The most valuable part wasn't the recommendations alone, but the context and transparency that let people evaluate them with confidence.</p>
                </section>
            </CaseStudyLayout>
        </>
    );
};

export default SalesComp;
