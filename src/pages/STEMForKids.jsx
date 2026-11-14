import CaseStudyLayout from "../components/CaseStudyLayout";
import banner from "../assets/images/STEMForKids/banner.png";

// Design Artifacts
import one from "../assets/images/STEMForKids/design artifacts/persona-1.png";
import two from "../assets/images/STEMForKids/design artifacts/persona-2.png";
import three from "../assets/images/STEMForKids/design artifacts/persona-3.png";
import IA from "../assets/images/STEMForKids/design artifacts/IA.png";

// LoFi Designs
import onboardingLoFi from "../assets/images/STEMForKids/lofi/onboarding-lofi.png";
import friendsLoFi from "../assets/images/STEMForKids/lofi/friends-lofi.png";
import eventsLoFi from "../assets/images/STEMForKids/lofi/events-lofi.png";
import challengesLoFi from "../assets/images/STEMForKids/lofi/challenges-lofi.png";

// HiFi Designs
import onboardingHiFi from "../assets/images/STEMForKids/hifi/onboarding-hifi.png";
import eventsHiFi from "../assets/images/STEMForKids/hifi/events-hifi.png";
import prototypeHiFi from "../assets/images/STEMForKids/hifi/prototype-hifi.png";

const sections = ["Problem", "Goals", "Design", "Testing", "Outcome"];

function STEMForKids() {
    const meta = [
        { label: "Role", value: "UX Designer" },
        { label: "Timeline", value: "10 weeks" },
        { label: "Tools", value: "Balsamiq, Figma" },
        { label: "Scope", value: "UX research, information architecture, wireframing, high-fidelity design, prototyping, testing" },
    ];

    return (
        <>
            <title>Calvin Ho | STEM For Kids</title>
            <meta name="description" content="Designing STEM For Kids, a mobile app concept that personalizes STEM learning for K–12 students through interactive activities, real-world challenges, and events" />
            <meta name="keywords" content="Calvin Ho, Calvin Ho Design, STEM For Kids, Education, Mobile App, User Experience Design, UX" />
            <meta name="author" content="Calvin Ho" />

            <CaseStudyLayout
                client="Academic Project"
                title="Designing a personalized learning experience to make STEM more engaging for students"
                summary="STEM For Kids is a mobile app concept that helps K–12 students discover their interests in science, technology, engineering, and math through personalized recommendations, hands-on challenges, and local STEM events. As part of a three-person academic HCI team, I contributed to the information architecture and early wireframes, then designed all high-fidelity screens in Figma. I also helped test the experience with students and used their feedback to refine the onboarding and event discovery flows."
                meta={meta}
                heroImage={banner}
                heroAlt="STEM For Kids Mobile App Design"
                sections={sections}
            >
                {/* The Problem */}
                <section id="Problem">
                    <span className="label">01 — Problem</span>
                    <h2>One-size-fits-all experiences can miss what motivates students</h2>
                    <p>Students have different interests, confidence levels, and ways of engaging with STEM. A learning experience built around the same content for everyone can make it harder for students to connect classroom concepts to things they genuinely enjoy.</p>
                    <p>I reviewed platforms like Khan Academy Kids and BrainPOP Jr. to understand how existing products presented educational content and encouraged engagement. I also developed student personas around different interests and motivations.</p>
                    <div className="trio mb-3">
                        <figure>
                            <img src={one} alt="Student persona 1" loading="lazy" />
                        </figure>
                        <figure>
                            <img src={two} alt="Student persona 2" loading="lazy" />
                        </figure>
                        <figure>
                            <img src={three} alt="Student persona 3" loading="lazy" />
                        </figure>
                    </div>
                </section>

                {/* Product Goals */}
                <section id="Goals">
                    <span className="label">02 — Goals</span>
                    <h2>Three goals for the experience</h2>
                    <div className="cards three">
                        <div className="card">
                            <span className="card-label">01</span>
                            <h3>Start from the student's interests</h3>
                            <p>Recommend topics and activities based on what each student enjoys.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">02</span>
                            <h3>Learn by doing</h3>
                            <p>Go beyond watching content with challenges and hands-on activities.</p>
                        </div>
                        <div className="card">
                            <span className="card-label">03</span>
                            <h3>Connect learning to the real world</h3>
                            <p>Point students to STEM events and clubs in their community.</p>
                        </div>
                    </div>
                </section>

                {/* Designing the Solution */}
                <section id="Design">
                    <span className="label">03 — Design</span>
                    <h2>Designing the experience</h2>
                    <p>I mapped the app's information architecture around discovery, learning, and community, then explored the core flows as wireframes in Balsamiq.</p>
                    <figure>
                        <img src={IA} alt="Information architecture for STEM For Kids" loading="lazy" />
                        <figcaption>Information architecture.</figcaption>
                    </figure>

                    <div className="feature">
                        <span className="spotlight-num">01</span>
                        <h3>An interest quiz to start</h3>
                        <p>A short onboarding quiz asks students what they enjoy and where they feel less confident, then shapes their recommended videos, activities, and challenges.</p>
                    </div>
                    <figure>
                        <img src={onboardingLoFi} alt="Wireframes of the quiz and onboarding flow" loading="lazy" />
                        <figcaption>Wireframes of the quiz and onboarding flow.</figcaption>
                    </figure>

                    <div className="feature">
                        <span className="spotlight-num">02</span>
                        <h3>STEM events nearby</h3>
                        <p>An events experience helps students find clubs, fairs, and competitions in their community, connecting what they learn on screen to real-world opportunities.</p>
                    </div>
                    <figure>
                        <img src={eventsLoFi} alt="Wireframes of STEM event discovery" loading="lazy" />
                        <figcaption>Wireframes of event discovery, in list and calendar views.</figcaption>
                    </figure>

                    <div className="feature">
                        <span className="spotlight-num">03</span>
                        <h3>Challenges with friends</h3>
                        <p>Students can connect with friends and take on challenges together, adding a social, hands-on reason to keep exploring.</p>
                    </div>
                    <div className="pair">
                        <figure>
                            <img src={friendsLoFi} alt="Wireframes of adding friends and joining groups" loading="lazy" />
                            <figcaption>Friends and groups.</figcaption>
                        </figure>
                        <figure>
                            <img src={challengesLoFi} alt="Wireframes of open challenges" loading="lazy" />
                            <figcaption>Challenges.</figcaption>
                        </figure>
                    </div>
                </section>

                {/* Testing */}
                <section id="Testing">
                    <span className="label">04 — Testing</span>
                    <h2>Learning from younger users</h2>
                    <p>We gathered feedback from approximately 10–12 students, ages 8–12, to understand whether they could navigate the experience and interpret its content. Two recurring points of confusion informed the next design iteration.</p>
                    <div className="decision">
                        <span className="d-label">Design decision</span>
                        <h3>Simpler quiz language</h3>
                        <p>Some students struggled with abstract questions, such as whether they enjoyed continually learning. I rewrote the questions in plainer language and added visual cues.</p>
                    </div>
                    <figure>
                        <img src={onboardingHiFi} alt="High-fidelity quiz and onboarding screens" loading="lazy" />
                        <figcaption>The revised quiz, with simpler questions and illustrations.</figcaption>
                    </figure>
                    <div className="decision">
                        <span className="d-label">Design decision</span>
                        <h3>Event details that are easier to scan</h3>
                        <p>The original event details showed too much at once. I reorganized the hierarchy so the essentials, like when, where, and who it's for, come first.</p>
                    </div>
                    <figure>
                        <img src={eventsHiFi} alt="High-fidelity event details screens with a clearer content hierarchy" loading="lazy" />
                        <figcaption>Event details, reorganized around what students need first.</figcaption>
                    </figure>
                </section>

                {/* Outcome */}
                <section id="Outcome">
                    <span className="label">05 — Outcome</span>
                    <h2>A clickable prototype</h2>
                    <p>The project culminated in a clickable Figma prototype connecting personalized learning recommendations, hands-on challenges, local STEM events, and social experiences in one mobile app.</p>
                    <p>While the concept was not developed into a production product, the prototype demonstrated how a more personalized experience could help students discover and explore STEM beyond the classroom.</p>
                    <figure>
                        <img src={prototypeHiFi} alt="Select high-fidelity screens from the STEM For Kids prototype" loading="lazy" />
                        <figcaption>Select high-fidelity screens.</figcaption>
                    </figure>

                    <h3 className="mt-5">What I learned</h3>
                    <p>Designing for younger students meant designing for how they read and understand, not how adults do. Testing with students showed me that small moments of confusion are often the clearest signals of what to fix.</p>
                </section>
            </CaseStudyLayout>
        </>
    );
}

export default STEMForKids;
