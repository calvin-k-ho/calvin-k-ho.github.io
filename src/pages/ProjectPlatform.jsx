import CaseStudyLayout from "../components/CaseStudyLayout";
import Quote from "../components/Quote";
import banner from "../assets/images/Hub/banner.png";

// Design Artifacts
import currentStateBlueprint from "../assets/images/Hub/design artifacts/current-state-blueprint.png";
import featureBacklog from "../assets/images/Hub/design artifacts/feature-backlog.png";

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

const sections = ["Problem", "Goals", "Design", "Review", "Outcome"];

function ProjectPlatform() {
    const meta = [
        { label: "Role", value: "Sole Product Designer" },
        { label: "Timeline", value: "2 months" },
        { label: "Tools", value: "Figma, Claude Code" },
        { label: "Scope", value: "Discovery, service blueprinting, product definition, UX/UI design, interactive prototyping" },
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
                summary="A telecommunications enterprise was expanding an internal project management platform beyond its original business unit. The challenge was to support three teams with different structures and workflows without creating three disconnected products. As the sole Product Designer, I translated discovery into a shared experience with configurable workflows, clearer ownership, and greater visibility into capacity and execution. I designed the experience in Figma and co-developed an interactive prototype using Claude Code."
                note="Business units and identifying details have been anonymized. Visuals use recreated interfaces and fictional data."
                meta={meta}
                heroImage={banner}
                heroAlt="Project management platform"
                sections={sections}
            >
                {/* Understanding the Problem */}
                <section id="Problem">
                    <span className="label">01 — Problem</span>
                    <h2>Three teams, one lifecycle, different ways of working</h2>
                    <p>I worked with business leaders, project managers, and PMO stakeholders to understand how projects moved through each organization. Although the teams shared similar lifecycle stages, their operating models differed:</p>
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
                    <p className="mt-4">These differences affected how work was assigned, who approved it, and how leaders monitored progress. The platform needed to accommodate those variations without fragmenting the underlying project lifecycle.</p>
                    <p>I mapped the end-to-end process, from intake and prioritization through execution and closure, to identify where workflows overlapped and where they diverged.</p>
                    <figure>
                        <img src={currentStateBlueprint} alt="Current-state service blueprint" loading="lazy" />
                        <figcaption>Current-state service blueprint across intake, prioritization, execution, and closure.</figcaption>
                    </figure>

                    <h3 className="mt-5">Four recurring challenges</h3>
                    <div className="cards">
                        <div className="card">
                            <span className="card-label">01</span>
                            <h3>Limited capacity visibility</h3>
                            <p>Leaders struggled to understand workload and availability across teams.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">02</span>
                            <h3>Fragmented intake</h3>
                            <p>Requests relied on manual forms and inconsistent processes.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">03</span>
                            <h3>Unclear ownership</h3>
                            <p>Responsibilities varied across organizational structures.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">04</span>
                            <h3>Inconsistent governance</h3>
                            <p>Updates, approvals, and project closure lacked consistency.</p>
                        </div>
                    </div>
                    <p className="mt-4">One stakeholder described the existing tool as:</p>
                    <Quote source="Discovery participant">"A tracking system with forms bolted on rather than an actual project management tool."</Quote>
                </section>

                {/* Product Goals */}
                <section id="Goals">
                    <span className="label">02 — Goals</span>
                    <h2>From findings to product goals</h2>
                    <p>I translated discovery findings into a prioritized feature backlog, organizing capabilities by business need and implementation dependency. Four product goals emerged:</p>
                    <div className="cards">
                        <div className="card">
                            <span className="card-label">01</span>
                            <h3>A shared read on capacity</h3>
                            <p>Show leaders who has room before work is assigned, rather than relying on manual checks with individual teams.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">02</span>
                            <h3>One front door for work</h3>
                            <p>Bring requests into a consistent intake experience with a shared decision path.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">03</span>
                            <h3>Accountability through closure</h3>
                            <p>Make ownership and approvals explicit, so project completion includes confirmation of delivery.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">04</span>
                            <h3>One product, three org charts</h3>
                            <p>Maintain a shared core experience while allowing each team to configure the structures, workflows, and reporting it depends on.</p>
                        </div>
                    </div>
                    <figure>
                        <img src={featureBacklog} alt="Prioritized feature backlog" loading="lazy" />
                        <figcaption>The prioritized backlog connected proposed capabilities to business needs and the teams that needed them.</figcaption>
                    </figure>
                </section>

                {/* Designing the Experience */}
                <section id="Design">
                    <span className="label">03 — Design</span>
                    <h2>Designing the experience</h2>
                    <p>I organized the solution into six capability areas, each addressing a challenge identified during discovery. Across the experience, AI drafts and recommends, while people remain responsible for reviewing and making decisions.</p>

                    <div className="feature">
                        <span className="spotlight-num">01</span>
                        <h3>Project intake</h3>
                        <p>Requests previously arrived through emails, meetings, and separate forms. I designed a unified intake experience where requesters describe work in plain language and AI drafts the corresponding structured fields for review.</p>
                        <p>Fields, routing, and approval criteria adapt to each business unit. The experience also surfaces estimated capacity impact before a request is submitted.</p>
                        <figure>
                            <img src={intakeAiDraft} alt="Intake form with AI-drafted fields awaiting the requester's review" loading="lazy" />
                            <figcaption>AI drafts the request; the requester reviews each field before submitting.</figcaption>
                        </figure>
                    </div>

                    <div className="feature">
                        <span className="spotlight-num">02</span>
                        <h3>Project workspace</h3>
                        <p>The existing tool tracked project status but offered little support for execution. I designed a workspace that brings plans, milestones, dependencies, and risks together.</p>
                        <p>An AI-generated handoff summary cites its sources and remains a draft until the project manager reviews it, preventing unverified information from reaching leadership.</p>
                        <figure>
                            <img src={projectStartHere} alt="Project workspace with an AI handoff summary awaiting review" loading="lazy" />
                            <figcaption>The handoff summary stays a draft until the project manager reviews it.</figcaption>
                        </figure>
                    </div>

                    <div className="feature">
                        <span className="spotlight-num">03</span>
                        <h3>Capacity and assignment</h3>
                        <p>Capacity was tracked manually across teams. I designed a weekly hours plan that compares each person's workload against planned capacity.</p>
                        <p>AI flags potential overloads and drafts a proposed rebalance as highlighted changes. A separate Spread Hours feature suggests how to distribute work around freeze periods and explains its recommendations. Managers remain in control: nothing changes until they accept the proposal.</p>
                        <figure>
                            <img src={capacityRebalance} alt="Weekly hours plan with an AI-drafted rebalance shown as highlighted cells" loading="lazy" />
                            <figcaption>An AI-drafted rebalance appears as highlighted cells for the manager to accept or discard.</figcaption>
                        </figure>
                        <figure>
                            <img src={spreadHoursAi} alt="Spread Hours dialog with an AI-suggested distribution and its reasoning" loading="lazy" />
                            <figcaption>Spread Hours explains the reasoning behind each suggested distribution.</figcaption>
                        </figure>
                    </div>

                    <div className="feature">
                        <span className="spotlight-num">04</span>
                        <h3>Portfolio monitoring</h3>
                        <p>Leaders had to consolidate updates to understand portfolio health and identify projects needing attention.</p>
                        <p>I designed an executive overview that brings together pending decisions, team capacity bands, KPI trends against established baselines, and projects at risk. Missing baselines are explicitly flagged rather than hidden, so incomplete data cannot be mistaken for positive performance.</p>
                        <figure>
                            <img src={executiveOverview} alt="Director overview with decisions waiting, capacity bands, KPI trends, and portfolio risk" loading="lazy" />
                            <figcaption>A director's overview, from decisions waiting to risk across the portfolio.</figcaption>
                        </figure>
                    </div>

                    <div className="feature">
                        <span className="spotlight-num">05</span>
                        <h3>Closure and governance</h3>
                        <p>Closing a project previously meant changing its status. I designed tiered closure requirements and readiness gates, including a structured go/no-go process for moving from pilot to full launch.</p>
                        <p>The experience presents the supporting evidence and available options, while the steering committee records its decision and rationale.</p>
                        <figure>
                            <img src={rolloutDecision} alt="Rollout decision with readiness criteria and a pilot versus full rollout comparison" loading="lazy" />
                            <figcaption>Readiness criteria and options for a pilot-to-launch decision.</figcaption>
                        </figure>
                    </div>

                    <div className="feature">
                        <span className="spotlight-num">06</span>
                        <h3>Leadership rollup</h3>
                        <p>Executives needed visibility across teams without relying on a single organizational hierarchy.</p>
                        <p>I designed a leadership rollup that groups teams by director regardless of their reporting structure. It surfaces team-level capacity bands while keeping individual activity within the teams responsible for managing it.</p>
                        <figure>
                            <img src={leadershipRollup} alt="Executive rollup grouping team capacity bands by director across business units" loading="lazy" />
                            <figcaption>An executive rollup across business units, at the team level.</figcaption>
                        </figure>
                    </div>

                    <h3 className="mt-5">A foundation for role-based access</h3>
                    <p>A shared platform also needed to accommodate differences in responsibility. I defined a permissions model based on what people needed to do rather than their job titles, since equivalent responsibilities could sit with different roles across business units.</p>
                    <p>Each screen includes a concise explanation of what the current role can see and do, with permissions configurable by business unit.</p>
                    <figure>
                        <img src={rolesPermissions} alt="Roles and permissions matrix across five roles" loading="lazy" />
                        <figcaption>The permissions matrix defines what each role can see and do across the platform.</figcaption>
                    </figure>
                </section>

                {/* Reviewing and Refining */}
                <section id="Review">
                    <span className="label">04 — Review</span>
                    <h2>Reviewing and refining</h2>
                    <p>I walked stakeholders through the interactive prototype to evaluate the proposed workflows and interface direction. These were stakeholder reviews, not formal usability testing.</p>
                    <p>The capacity experience generated particularly positive feedback:</p>
                    <Quote source="Stakeholder, prototype review">"I like what you showed… We don't have that today."</Quote>
                    <p>Reviews also highlighted opportunities to reduce information density in the capacity experience and better accommodate business-specific workflows. I used that feedback to refine the interface and demonstrate how the shared platform could adapt without losing consistency.</p>
                    <div className="pair">
                        <figure>
                            <img src={lofiCapacity} alt="Low-fidelity wireframe of the weekly capacity view" loading="lazy" />
                            <figcaption>Low-fidelity exploration of the weekly capacity view.</figcaption>
                        </figure>
                        <figure>
                            <img src={hifiCapacity} alt="High-fidelity prototype of the weekly capacity view" loading="lazy" />
                            <figcaption>High-fidelity prototype of the refined capacity experience.</figcaption>
                        </figure>
                    </div>
                </section>

                {/* Outcome */}
                <section id="Outcome">
                    <span className="label">05 — Outcome</span>
                    <h2>A proposed platform direction and phased roadmap</h2>
                    <p>The work culminated in a steering committee readout covering the proposed platform direction, target capabilities, and a phased three-stage roadmap.</p>
                    <p>I also proposed success measures across capacity planning, intake, assignment, closure, and adoption. These measures established how the proposed experience could eventually be evaluated; they are not realized product outcomes.</p>

                    <h3 className="mt-5">What I learned</h3>
                    <p>Enterprise design is less about simplifying individual screens than understanding the organization behind them: deciding what should be shared, what should stay flexible, and where technology genuinely helps.</p>
                </section>
            </CaseStudyLayout>
        </>
    );
}

export default ProjectPlatform;
