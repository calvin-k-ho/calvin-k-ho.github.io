import CaseStudyLayout from "../components/CaseStudyLayout";
import banner from "../assets/images/TPI/banner.png";

// Design Artifacts
import analysis from "../assets/images/TPI/design artifacts/analysis.png";
import sitemapOriginal from "../assets/images/TPI/design artifacts/sitemap-original.png";
import sitemapFinal from "../assets/images/TPI/design artifacts/sitemap-final.png";
import colorPalette from "../assets/images/TPI/design artifacts/color-palette.png";
import fonts from "../assets/images/TPI/design artifacts/fonts.png";
import uiStyles from "../assets/images/TPI/design artifacts/ui-styles.png";
import donateImpact from "../assets/images/TPI/design artifacts/donate-impact.png";

// LoFi, Mid, and HiFi
import missionWebLofi from "../assets/images/TPI/lofi/mission-w-lofi.png";
import missionWebMid from "../assets/images/TPI/mid/mission-w-mid.png";
import missionWebHifi from "../assets/images/TPI/hifi/mission-w-hifi.png";
import donateWebLofi from "../assets/images/TPI/lofi/donate-w-lofi.png";
import donateWebMid from "../assets/images/TPI/mid/donate-w-mid.png";
import donateWebHifi from "../assets/images/TPI/hifi/donate-w-hifi.png";
import missionMobileLofi from "../assets/images/TPI/lofi/mission-m-lofi.png";
import missionMobileMid from "../assets/images/TPI/mid/mission-m-mid.png";
import missionMobileHifi from "../assets/images/TPI/hifi/mission-m-hifi.png";
import donateMobileLofi from "../assets/images/TPI/lofi/donate-m-lofi.png";
import donateMobileMid from "../assets/images/TPI/mid/donate-m-mid.png";
import donateMobileHifi from "../assets/images/TPI/hifi/donate-m-hifi.png";

// Finalized designs
import home from "../assets/images/TPI/pages/home.png";
import approach from "../assets/images/TPI/pages/approach.png";
import team from "../assets/images/TPI/pages/team.png";
import resources from "../assets/images/TPI/pages/resources.png";
import partner from "../assets/images/TPI/pages/partner.png";

// Future Considerations
import gifts from "../assets/images/TPI/pages/gifts.png";
import volunteer from "../assets/images/TPI/pages/volunteer.png";
import jobs from "../assets/images/TPI/pages/jobs.png";
import reports from "../assets/images/TPI/pages/reports.png";

const sections = ["Problem", "Goals", "Design", "Testing", "Outcome"];

const stages = ["Lo-fi", "Mid-fi", "Hi-fi"];

const progressions = [
    { name: "Our Mission", web: [missionWebLofi, missionWebMid, missionWebHifi], mobile: [missionMobileLofi, missionMobileMid, missionMobileHifi] },
    { name: "Donate", web: [donateWebLofi, donateWebMid, donateWebHifi], mobile: [donateMobileLofi, donateMobileMid, donateMobileHifi] },
];

function TPI() {
    const meta = [
        { label: "Role", value: "Product Designer, Design Team of 3" },
        { label: "Timeline", value: "4 months" },
        { label: "Tools", value: "Figma" },
        { label: "Scope", value: "UX research, information architecture, UX/UI design, prototyping, design system" },
    ];

    return (
        <>
            <title>Calvin Ho | The Pathway Initiative</title>
            <meta name="description" content="Redesigning The Pathway Initiative's website to earn trust and make donating, volunteering, and sponsoring the obvious next step" />
            <meta name="keywords" content="Calvin Ho, Calvin Ho Design, The Pathway Initiative, Develop for Good, Nonprofit, Web Design, Design System, UX" />
            <meta name="author" content="Calvin Ho" />

            <CaseStudyLayout
                client="The Pathway Initiative | Develop for Good"
                title="Redesigning a nonprofit's website to earn trust and make giving the obvious next step"
                summary="The Pathway Initiative (TPI) is a Boston-based nonprofit that mentors minority and disadvantaged students on their path to medicine, from high school through medical residency. Its website wasn't helping it earn the donations, volunteers, and sponsors it needed. Through Develop for Good, which pairs student designers and engineers with nonprofits for pro bono work, I joined a three-person design team over four months. I contributed to the UX/UI design, information architecture, prototyping, and design system for a website redesign focused on communicating TPI's mission and making it easier for visitors to get involved."
                meta={meta}
                heroImage={banner}
                heroAlt="The Pathway Initiative website redesign"
                sections={sections}
            >
                {/* The Problem */}
                <section id="Problem">
                    <span className="label">01 — Problem</span>
                    <h2>A website that couldn't ask for what TPI needed</h2>
                    <p>TPI's most important goals were attracting donors, recruiting volunteers, and securing sponsors. Through client feedback sessions and a review of the existing site, our team identified four gaps getting in the way.</p>
                    <div className="cards">
                        <div className="card">
                            <span className="card-label">01</span>
                            <h3>Important information was hard to find</h3>
                            <p>Careers, resources, and programs were all buried under a single "Careers &amp; Resources" menu.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">02</span>
                            <h3>The primary action lacked visibility</h3>
                            <p>The Donate button competed with other navigation items instead of standing out.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">03</span>
                            <h3>The site wasn't building trust</h3>
                            <p>Broken functionality and limited information about impact left donors unsure where their money would go.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">04</span>
                            <h3>The biggest differentiator was missing</h3>
                            <p>TPI's end-to-end mentorship model, from high school through residency, was barely represented.</p>
                        </div>
                    </div>
                    <div className="aside">
                        <strong>Designing for a growing organization</strong>
                        <p className="mb-0">TPI was still building its internal capacity and wasn't certain it could support a full development team. The redesign needed to make an immediate impact while remaining simple enough for a small team to maintain as the organization grew.</p>
                    </div>
                </section>

                {/* Product Goals */}
                <section id="Goals">
                    <span className="label">02 — Goals</span>
                    <h2>Three goals for the redesign</h2>
                    <div className="cards three">
                        <div className="card">
                            <span className="card-label">01</span>
                            <h3>Tell a compelling story</h3>
                            <p>Communicate TPI's mission, mentorship model, and the impact it hopes to make.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">02</span>
                            <h3>Build trust</h3>
                            <p>Give donors and partners the information they need to feel confident supporting TPI.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">03</span>
                            <h3>Encourage action</h3>
                            <p>Make donating, volunteering, and sponsoring clear and easy to reach.</p>
                        </div>
                    </div>
                </section>

                {/* Designing the Solution */}
                <section id="Design">
                    <span className="label">03 — Design</span>
                    <h2>Designing around the story, not just the donation</h2>
                    <p>Our team began by reviewing nonprofit websites with established donation experiences. We examined where they placed donation actions, how they prompted visitors, how their forms handled payment details, and how they communicated impact.</p>
                    <p>The strongest examples made giving easy to find, kept donation experiences familiar, and introduced the organization's mission before asking visitors to contribute.</p>
                    <figure>
                        <img src={analysis} alt="Competitive analysis of nonprofit donation experiences" loading="lazy" />
                        <figcaption>Competitive analysis of nonprofit donation experiences.</figcaption>
                    </figure>

                    <div className="feature">
                        <span className="spotlight-num">01</span>
                        <h3>A clearer site structure</h3>
                        <p>We restructured the sitemap so About, Student Programs, Get Involved, and Donate each had a dedicated section. This gave visitors a clearer view of TPI's programs and shortened the path from discovering the mission to taking action.</p>
                    </div>
                    <div className="pair">
                        <figure>
                            <span className="tag">Before</span>
                            <img src={sitemapOriginal} alt="The original Pathway Initiative site structure" loading="lazy" />
                            <figcaption>Important information buried under one menu.</figcaption>
                        </figure>
                        <figure>
                            <span className="tag final">After</span>
                            <img src={sitemapFinal} alt="The redesigned Pathway Initiative site structure" loading="lazy" />
                            <figcaption>Dedicated sections for each part of the organization.</figcaption>
                        </figure>
                    </div>

                    <div className="feature">
                        <span className="spotlight-num">02</span>
                        <h3>From wireframes to final pages</h3>
                        <p>The design team used wireframes to establish page structure, hierarchy, and navigation before developing higher-fidelity concepts. Two key pages received particular attention across desktop and mobile: Our Mission and Donate.</p>
                        <p><strong>Our Mission</strong> communicated why TPI exists and what makes its mentorship model meaningful. <strong>Donate</strong> translated that understanding into a clear path to contribute, with the donation request following the organization's story rather than interrupting it.</p>
                    </div>
                    {progressions.map((page) => (
                        <div key={page.name}>
                            <h4 className="mt-4">{page.name}</h4>
                            <p className="source mb-2">Desktop</p>
                            <div className="trio">
                                {page.web.map((image, index) => (
                                    <figure key={stages[index]}>
                                        <span className={index === 2 ? "tag final" : "tag"}>{stages[index]}</span>
                                        <img src={image} alt={`${page.name} on desktop, ${stages[index]}`} loading="lazy" />
                                    </figure>
                                ))}
                            </div>
                            <p className="source mt-4 mb-2">Mobile</p>
                            <div className="trio peek phones">
                                {page.mobile.map((image, index) => (
                                    <figure key={stages[index]}>
                                        <span className={index === 2 ? "tag final" : "tag"}>{stages[index]}</span>
                                        <img src={image} alt={`${page.name} on mobile, ${stages[index]}`} loading="lazy" />
                                    </figure>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="feature">
                        <span className="spotlight-num">03</span>
                        <h3>A brand and design system to grow into</h3>
                        <p>Because TPI was an early-stage organization, the redesign needed more than isolated page designs. The team developed a cohesive visual foundation that could remain consistent as the organization grew.</p>
                        <p>This included a deep purple palette with blue accents, a consistent typography hierarchy, and reusable interface components and responsive layouts.</p>
                    </div>
                    <div className="trio">
                        <figure>
                            <img src={colorPalette} alt="TPI color palette with a deep purple primary color and blue accents" loading="lazy" />
                            <figcaption>Color palette.</figcaption>
                        </figure>
                        <figure>
                            <img src={fonts} alt="TPI typography styles" loading="lazy" />
                            <figcaption>Typography.</figcaption>
                        </figure>
                        <figure>
                            <img src={uiStyles} alt="TPI button styles and reusable interface components" loading="lazy" />
                            <figcaption>Reusable components and interface styles.</figcaption>
                        </figure>
                    </div>
                </section>

                {/* Testing */}
                <section id="Testing">
                    <span className="label">04 — Testing</span>
                    <h2>Testing, then cutting</h2>
                    <p>We kept design cycles short so the team could put an interactive prototype in front of participants early. During small, moderated sessions, participants representative of TPI's audience were asked to find the mission, learn about the organization, and explore ways to get involved.</p>
                    <p>The Donate action stood out, and participants were able to navigate the experience without confusion. Their feedback also revealed opportunities to make the experience clearer.</p>
                    <p>One participant wanted to understand exactly how donations would reach students. In response, we added an impact section to the Donate page explaining what different contribution amounts could support.</p>
                    <p>We also found that most participants didn't use the search bar. The team removed it, along with a Message box that looked like a search field, and moved longer forms to external links.</p>
                    <figure>
                        <img src={donateImpact} alt="Donate page impact section showing what $200, $1,000, $2,800, and $3,000 gifts support" loading="lazy" />
                        <figcaption>Added following testing: a clearer explanation of what different contributions support.</figcaption>
                    </figure>
                    <p className="source">Testing was small and qualitative. It helped identify usability issues, not measure conversion.</p>
                </section>

                {/* Outcome */}
                <section id="Outcome">
                    <span className="label">05 — Outcome</span>
                    <h2>A clearer digital foundation for TPI</h2>
                    <p>The redesign delivered a more cohesive website experience, bringing TPI's mission, programs, and opportunities to get involved into a clearer structure. The work established a foundation with more intentional navigation, story-driven content, a consistent visual identity, and clearer donation pathways.</p>
                    <p>The website was delivered in 2021 and has since evolved. The designs shown in this case study represent the team's original work and may differ from the current live website.</p>
                    <p>Post-launch donation and engagement metrics weren't available to measure the impact.</p>
                    <a href="https://tpwi.org/" className="links" target="_blank" rel="noreferrer">Visit the current TPI website</a>
                    <figure className="mt-4" style={{ maxWidth: 480 }}>
                        <img src={home} alt="The redesigned TPI homepage" loading="lazy" />
                        <figcaption>Homepage design delivered in 2021.</figcaption>
                    </figure>
                    <div className="pair peek">
                        <figure>
                            <img src={approach} alt="The redesigned Our Approach page" loading="lazy" />
                            <figcaption>Our Approach page design delivered in 2021.</figcaption>
                        </figure>
                        <figure>
                            <img src={team} alt="The redesigned Our Team page" loading="lazy" />
                            <figcaption>Our Team page design delivered in 2021.</figcaption>
                        </figure>
                        <figure>
                            <img src={resources} alt="The redesigned Student Resources page" loading="lazy" />
                            <figcaption>Student Resources page design delivered in 2021.</figcaption>
                        </figure>
                        <figure>
                            <img src={partner} alt="The redesigned Partner With Us page" loading="lazy" />
                            <figcaption>Partner With Us page design delivered in 2021.</figcaption>
                        </figure>
                    </div>

                    <h3 className="mt-5">Designed for what's next</h3>
                    <p>Beyond the initial redesign, the team explored additional features TPI could introduce as funding and organizational capacity allowed. These concepts included a matching gifts fundraiser, an expanded volunteer experience, job opportunities, and annual reports.</p>
                    <p>They weren't part of the original launch scope, but could build on the redesigned foundation without requiring another full redesign.</p>
                    <div className="concepts">
                        <figure>
                            <span className="tag">Concept</span>
                            <img src={gifts} alt="Matching Gifts Fundraiser concept" loading="lazy" />
                            <figcaption>Matching Gifts Fundraiser.</figcaption>
                        </figure>
                        <figure>
                            <span className="tag">Concept</span>
                            <img src={volunteer} alt="Volunteer Experience concept" loading="lazy" />
                            <figcaption>Volunteer Experience.</figcaption>
                        </figure>
                        <figure>
                            <span className="tag">Concept</span>
                            <img src={jobs} alt="Job Opportunities concept" loading="lazy" />
                            <figcaption>Job Opportunities.</figcaption>
                        </figure>
                        <figure>
                            <span className="tag">Concept</span>
                            <img src={reports} alt="Annual Reports concept" loading="lazy" />
                            <figcaption>Annual Reports.</figcaption>
                        </figure>
                    </div>

                    <h3 className="mt-5">What I learned</h3>
                    <p>Designing for a nonprofit is designing for trust. Before someone donates, volunteers, or sponsors, they need to understand the organization's purpose and feel confident their contribution matters.</p>
                    <p>This project reinforced the importance of putting the organization's story first, making its impact visible, and creating experiences that help people move from interest to action.</p>
                </section>
            </CaseStudyLayout>
        </>
    );
}

export default TPI;
