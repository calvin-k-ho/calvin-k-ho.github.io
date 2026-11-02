import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Home({ className }) {
    return (
        <div className={className}>
            <Container className="mt-5 pt-5 mb-5">
                <Row className="mt-5 pt-5" data-aos="fade-up">
                    <span className="greeting">Hey there <span className="wave" role="img" aria-label="Waving Hand Sign Emoji">👋</span></span>
                    <h1>I'm Calvin, a <em>product designer</em> for enterprise and AI products. I turn complicated workflows into tools teams trust, and I build what I design.</h1>
                    <div className="mt-2 pt-2" />
                    <p><span role="img" aria-label="Writing Hand Emoji">✍️</span> Currently simplifying the complex one design at a time @<a href="https://www.pwc.com/us/en.html" className="links">PricewaterhouseCoopers</a>.</p>
                </Row>
            </Container>
            <Container className="divider-wrap">
                <hr className="divider" />
            </Container>
            <Container className="mt-4 pt-4 mb-5">
                <h2 data-aos="fade-up">Selected Works</h2>
                <div className="featured-wrap" data-aos="fade-up">
                    <ProjectCard {...projects[0]} featured image={projects[0].image} imageAlt="" />
                </div>
                <div className="works-grid">
                    {projects.slice(1).map((project) => (
                        <div key={project.title} data-aos="fade-up" data-aos-delay={project.delay}>
                            <ProjectCard {...project} image={project.image} imageAlt="" />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default styled(Home)`
.greeting {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 0.8em;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #6b6b6b;
    margin-bottom: 16px;
}

h1 {
    font-family: "Instrument Serif", Georgia, serif;
    font-weight: 400;
    font-size: clamp(34px, 5.6vw, 56px);
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: #1a1a1a;
}

h1 em {
    font-style: italic;
    font-family: "Instrument Serif", Georgia, serif;
    color: #3b6ef6;
}

h2 {
    font-family: "Instrument Serif", Georgia, serif;
    font-weight: 400;
    font-size: clamp(32px, 4.5vw, 48px);
    letter-spacing: -0.01em;
    color: #1a1a1a;
}

.featured-wrap {
    margin-top: clamp(24px, 4vw, 40px);
}

.works-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(20px, 3vw, 32px);
    margin-top: clamp(20px, 3vw, 32px);
}

p {
    font-family: "Inter", sans-serif;
    font-size: 1em;
}

a.links {
    color: inherit;
    font-weight: 600;
    text-decoration: none;
    border: 0px solid transparent;
    border-bottom: 2.5px solid #f8d335;
    border-style: inset;
    transition: all 0.2s ease-in-out;

    &:hover {
        border-bottom: 2.5px solid #1a1a1a;
        background: rgba(248, 211, 53, 0.18);
    }
}

.divider-wrapper {
    padding-inline: clamp(24px, 5vw, 64px);
}

 .divider {
    height: 1px;
    margin: 0;
    border: none;
    opacity: 1;
    background: linear-gradient(to right, transparent, #e5e2dc 20%, #e5e2dc 80%, transparent);
}

.wave {
    animation-name: wave-animation;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
}

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(14.0deg) }
    20% { transform: rotate(-8.0deg) }
    30% { transform: rotate(14.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate( 0.0deg) }
    100% { transform: rotate( 0.0deg) }
}

@media (max-width: 680px) {
    .works-grid {
        grid-template-columns: 1fr;
    }
}
`;