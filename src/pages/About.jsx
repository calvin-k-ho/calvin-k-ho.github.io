import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import PhotoCarousel from "../components/PhotoCarousel";
import Testimonials from "../components/Testimonials";

function About({ className }) {
    return(
        <div className={ className }>
            <title>Calvin Ho | About</title>
            <meta name="description" content="Calvin Ho is a DMV-based product designer working on enterprise and AI products in PwC's Commercial Technology & Innovation practice" />
            <meta name="keywords" content="Calvin Ho, Calvin Ho Design, Product Designer, About, User Experience Design, UX" />
            <meta name="author" content="Calvin Ho" />
            <Container className="mt-5 pt-5">
                <Row className="mt-5 pt-5 mb-5">
                    <Col lg={6} className="mb-5" data-aos="fade-up" data-aos-delay="150" data-aos-duration="800" data-aos-once="true" >
                        <PhotoCarousel />
                    </Col>
                    <Col lg={6} style={{ margin: "auto", overflowX: "hidden" }} data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" data-aos-once="true" >
                        <h1>Product designer <em>with a bit of magic</em></h1>
                        <p>Hey again <span className="wave" role="img" aria-label="Waving Hand Sign Emoji">👋</span> I'm Calvin. I graduated from <a href="https://ist.psu.edu/" className="links">Penn State University</a> (We Are!) with a degree in Information Sciences and Technology and a minor in Psychology. My background sits at the intersection of technology and human behavior which naturally shapes how I approach design. I'm equally interested in understanding the technical complexities behind a problem, defining a product vision, and crafting intuitive experiences that make people's lives easier.</p>
                        <p>Currently, I work at <a href="https://www.pwc.com/us/en.html" className="links">PwC's Commercial Technology &amp; Innovation practice</a> where I've built my experience at the intersection of technology consulting, product strategy, and experience design. I've partnered with cross-functional teams and enterprise clients across industries to explore emerging technologies, shape product visions, rethink complex workflows, and bring new digital experiences to life. As I look towards my next chapter, I'm excited to explore opportunities in product design and product management where I can bring together my design sensibilities, technical foundation, and strategic thinking to build meaningful products.</p>
                        <p>Outside of work, you can find me curled up with a <a href="https://www.goodreads.com/user/show/181754193-calvin" className="links">good ol' book</a>, <a href="https://strava.app.link/DpnVQrcxt7b" className="links">clocking miles in</a>, rock climbing, or trying (with mixed success) to keep my plants alive.</p>
                    </Col>
                </Row>
                <Testimonials />
            </Container>
        </div>
    );
};

export default styled(About)`
h1 {
    font-family: "Instrument Serif", Georgia, serif;
    font-weight: 400;
    font-size: clamp(32px, 4.5vw, 48px);
}

h1 em {
    font-style: italic;
    font-family: "Instrument Serif", Georgia, serif;
    color: #3b6ef6;
}

p {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: #4a4a4a;
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
`;