import CaseStudyLayout from "../components/CaseStudyLayout";
import Quote from "../components/Quote";
import banner from "../assets/images/Hub/banner.png";

// Design Artifacts
import currentStateBlueprint from "../assets/images/Hub/design artifacts/current-state-blueprint.png";

// Lo-fi & Hi-fi
import lofiCapacity from "../assets/images/Hub/lofi/capacity-weekly-hours.png";
import hifiCapacity from "../assets/images/Hub/hifi/capacity-weekly-hours.png";
import intakeAiDraft from "../assets/images/Hub/hifi/intake-ai-draft.png";
import projectStartHere from "../assets/images/Hub/hifi/project-start-here.png";
import capacityRebalance from "../assets/images/Hub/hifi/capacity-ai-rebalance.png";
import spreadHoursAi from "../assets/images/Hub/hifi/spread-hours-ai.png";
import executiveOverview from "../assets/images/Hub/hifi/executive-overview.png";
import rolloutDecision from "../assets/images/Hub/hifi/rollout-decision.png";
import leadershipRollup from "../assets/images/Hub/hifi/leadership-rollup.png";
import rolesPermissions from "../assets/images/Hub/hifi/roles-permissions.png";

const sections = ["Challenge", "Direction", "Design", "Review", "Outcome"];

function ProjectPlatform() {
    const meta = [
        { label: "Role", value: "Sole Product Designer" },
        { label: "Collaborators", value: "Business leaders, project managers, PMO" },
        { label: "Timeline", value: "2 months" },
        { label: "Tools", value: "Figma, Claude Code" },
        { label: "Status", value: "Stakeholder-reviewed prototype" },
    ];

    return (
        <>
            <title>Calvin Ho | AI-Assisted Project Hub</title>
            <meta name="description" content="Designing one project management platform for three business units with different organizational structures and workflows" />
            <meta name="keywords" content="Calvin Ho, Calvin Ho Design, Enterprise UX, Service Blueprint, Project Management, Capacity Planning, AI, UX" />
            <meta name="author" content="Calvin Ho" />

            <CaseStudyLayout
                client="Enterprise Telecommunications"
                title="Designing one project management platform for three different operating models"
                summary="A telecommunications enterprise was expanding its internal project management platform to three teams that worked in very different ways. As the sole product designer, I designed one shared experience that each team can configure, where AI drafts and people decide, and co-developed an interactive prototype with Claude Code."
                note="Business units and identifying details have been anonymized. Visuals use recreated interfaces and fictional data."
                meta={meta}
                heroImage={banner}
                heroAlt="Project Hub shown on a laptop"
                sections={sections}
            >
                {/* Challenge */}
                <section id="Challenge">
                    <span className="label">01 — Challenge</span>
                    <h2>Three teams, one lifecycle, different ways of working</h2>
                    <p>Every team moved projects through the same stages, from intake to closure, but each was organized differently:</p>
                    <div className="cards three">
                        <div className="card">
                            <span className="card-label">Service Operations</span>
                            <h3>Multi-level hierarchy</h3>
                            <p>A traditional, multi-level reporting structure.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">Store Network</span>
                            <h3>Peer directors</h3>
                            <p>Peer directors reporting to a shared executive.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">Partner Channels</span>
                            <h3>Organized by channel</h3>
                            <p>Teams organized around distinct channels and specialties.</p>
                        </div>
                    </div>
                    <p className="mt-4">Those differences changed how work was assigned, who approved it, and how leaders tracked progress. The platform had to support all three without splitting into three disconnected products.</p>
                </section>

                {/* Direction */}
                <section id="Direction">
                    <span className="label">02 — Direction</span>
                    <h2>Where the workflows overlapped, and where they didn't</h2>
                    <p>Working with business leaders, project managers, and PMO stakeholders, I mapped the end-to-end process across all three teams to see what could be shared and what had to flex.</p>
                    <figure>
                        <img src={currentStateBlueprint} alt="Current-state service blueprint across intake, prioritization, execution, and closure" loading="lazy" />
                        <figcaption>Each step is tagged with the team it came from, so shared steps and team-specific ones are easy to tell apart.</figcaption>
                    </figure>
                    <p className="mt-4">One stakeholder summed up the existing tool:</p>
                    <Quote source="Discovery participant">"A tracking system with forms bolted on rather than an actual project management tool."</Quote>
                    <p>I turned the four challenges that came up most into product goals, then into a prioritized feature backlog:</p>
                    <div className="cards">
                        <div className="card">
                            <span className="card-label">Limited capacity visibility</span>
                            <h3>A shared read on capacity</h3>
                            <p>Show leaders who has room before work is assigned.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">Fragmented intake</span>
                            <h3>One front door for work</h3>
                            <p>A consistent intake with a shared decision path.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">Inconsistent governance</span>
                            <h3>Accountability through closure</h3>
                            <p>Explicit approvals, so completion includes confirmation of delivery.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">Unclear ownership</span>
                            <h3>One product, three org charts</h3>
                            <p>A shared core each team can configure to its own structure.</p>
                        </div>
                    </div>
                </section>

                {/* Design */}
                <section id="Design">
                    <span className="label">03 — Design</span>
                    <h2>Designing the experience</h2>
                    <p>One principle runs through every feature: AI drafts and recommends, and people review and decide.</p>

                    <div className="feature">
                        <span className="spotlight-num">01</span>
                        <h3>Capacity and assignment</h3>
                        <p>Capacity was tracked by hand, team by team. A weekly hours plan now compares each person's workload with their planned capacity. When someone is overloaded, AI drafts a rebalance as highlighted changes, and nothing moves until a manager accepts it.</p>
                    </div>
                    <figure className="shot">
                        <img src={capacityRebalance} alt="Weekly hours plan with an AI-drafted rebalance shown as highlighted cells" loading="lazy" />
                        <figcaption>Proposed moves appear as highlighted cells, so a manager can see exactly what would change before accepting.</figcaption>
                    </figure>
                    <figure className="shot">
                        <img src={spreadHoursAi} alt="Spread Hours dialog with an AI-suggested distribution and its reasoning" loading="lazy" />
                        <figcaption>Spread Hours distributes work around freeze periods and says why, so the suggestion can be checked, not just trusted.</figcaption>
                    </figure>

                    <div className="feature">
                        <span className="spotlight-num">02</span>
                        <h3>One front door for intake</h3>
                        <p>Requests used to arrive through emails, meetings, and separate forms. Now requesters describe the work in plain language, and AI drafts the structured fields for them to review. Fields, routing, and approval criteria adapt to each business unit, and the request shows its estimated capacity impact before it's submitted.</p>
                    </div>
                    <figure className="shot">
                        <img src={intakeAiDraft} alt="Intake form with AI-drafted fields awaiting the requester's review" loading="lazy" />
                        <figcaption>AI drafts the request from a plain-language description; the requester reviews each field before submitting.</figcaption>
                    </figure>

                    <div className="feature">
                        <span className="spotlight-num">03</span>
                        <h3>A workspace built for execution</h3>
                        <p>The old tool tracked status but did little to help teams deliver. The workspace brings plans, milestones, dependencies, and risks together. An AI handoff summary cites its sources and stays a draft until the project manager reviews it, so unverified information never reaches leadership.</p>
                    </div>
                    <figure className="shot">
                        <img src={projectStartHere} alt="Project workspace with an AI handoff summary awaiting review" loading="lazy" />
                        <figcaption>Note the "needs PM review" label and the sources under the summary.</figcaption>
                    </figure>

                    <div className="feature">
                        <span className="spotlight-num">04</span>
                        <h3>Portfolio health at a glance</h3>
                        <p>Leaders had to piece together updates to see which projects needed attention. The overview combines decisions waiting on them, team capacity, KPI trends against baselines, and projects at risk. Missing baselines are flagged rather than hidden, so incomplete data can't pass for good performance.</p>
                    </div>
                    <figure className="shot">
                        <img src={executiveOverview} alt="Director overview with decisions waiting, capacity bands, KPI trends, and portfolio risk" loading="lazy" />
                        <figcaption>"Needs your attention" shows only decisions this person can make.</figcaption>
                    </figure>

                    <div className="feature">
                        <span className="spotlight-num">05</span>
                        <h3>One product, three org charts</h3>
                        <p>Executives needed a view across teams that didn't depend on any single reporting structure. The leadership rollup groups teams by director, however they're organized. Underneath, a permissions model is based on what people need to do, not their job titles, since the same responsibility sat with different roles in each business unit.</p>
                    </div>
                    <figure className="shot">
                        <img src={leadershipRollup} alt="Executive rollup grouping team capacity bands by director across business units" loading="lazy" />
                        <figcaption>The same rollup works for a multi-level hierarchy, peer directors, or channel teams.</figcaption>
                    </figure>
                    <figure className="shot">
                        <img src={rolesPermissions} alt="Roles and permissions matrix across five roles" loading="lazy" />
                        <figcaption>Permissions are configurable by business unit, and each screen explains what the current role can see and do.</figcaption>
                    </figure>

                    <div className="feature">
                        <span className="spotlight-num">06</span>
                        <h3>Closure that confirms delivery</h3>
                        <p>Closing a project used to mean changing its status. Tiered closure requirements and readiness gates now include a structured go/no-go for moving from pilot to full launch. The tool presents the evidence, and the steering committee records its decision and rationale.</p>
                    </div>
                    <figure className="shot">
                        <img src={rolloutDecision} alt="Rollout decision with readiness criteria and a pilot versus full rollout comparison" loading="lazy" />
                        <figcaption>Readiness criteria sit beside the pilot and full-rollout options, so the decision is made on evidence.</figcaption>
                    </figure>
                </section>

                {/* Review */}
                <section id="Review">
                    <span className="label">04 — Review</span>
                    <h2>Making the AI's reasoning visible</h2>
                    <p>I walked stakeholders through the interactive prototype to test the proposed workflows and interface direction. These were stakeholder reviews, not formal usability testing. The capacity experience drew the strongest response:</p>
                    <Quote source="Stakeholder, prototype review">"I like what you showed… We don't have that today."</Quote>
                    <p>The most important feedback was about explainability: before acting on an AI recommendation, reviewers wanted to understand why it was made. I made that reasoning more transparent throughout the prototype. Reviews also pointed to reducing information density in the capacity view and better supporting business-specific workflows.</p>
                    <div className="compare">
                        <figure className="small-shot shot">
                            <span className="tag">Lo-fi</span>
                            <img src={lofiCapacity} alt="Low-fidelity weekly capacity view in grayscale" loading="lazy" />
                            <figcaption>The lo-fi set the structure: the hours grid beside a panel of AI insights.</figcaption>
                        </figure>
                        <figure className="shot">
                            <span className="tag final">Hi-fi</span>
                            <img src={hifiCapacity} alt="High-fidelity weekly capacity view with color-coded load and AI insights" loading="lazy" />
                            <figcaption>Color-coded load bands make overloads stand out, and every AI insight states its "why".</figcaption>
                        </figure>
                    </div>
                </section>

                {/* Outcome */}
                <section id="Outcome">
                    <span className="label">05 — Outcome</span>
                    <h2>A proposed platform direction and phased roadmap</h2>
                    <p>The work ended in a steering committee readout covering the proposed platform direction, target capabilities, and a phased three-stage roadmap. I also proposed success measures across capacity planning, intake, assignment, closure, and adoption. These are proposed measures for evaluating the platform once it's built, not realized outcomes.</p>

                    <h3 className="mt-5">What I learned</h3>
                    <p>Enterprise design is less about simplifying individual screens than understanding the organization behind them: deciding what should be shared, what should stay flexible, and where technology genuinely helps.</p>
                </section>
            </CaseStudyLayout>
        </>
    );
}

export default ProjectPlatform;
