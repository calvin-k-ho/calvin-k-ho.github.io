import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import PhotoCarousel from "../components/PhotoCarousel";

function About({ className }) {
    return(
        <div className={ className }>
            <Container className="mt-5 pt-5">
                <Row className="mt-5 pt-5 mb-5">
                    <Col lg={6} className="mb-5" data-aos="fade-up" data-aos-delay="150" data-aos-duration="800" data-aos-once="true" >
                        <PhotoCarousel />
                    </Col>
                    <Col lg={6} style={{ margin: "auto", overflowX: "hidden" }} data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" data-aos-once="true" >
                        <h1>Product designer, <em>with a bit of magic</em></h1>
                        <p>Hey there, I'm Calvin! I'm a DMV-based designer working on enterprise and AI products at <a href="https://www.pwc.com/us/en.html" className="links">PwC's Experience Design practice</a>. The short version of how I got here: I was born in Hong Kong, raised in the ever-popular "right outside" Philly area, and followed my older siblings to <a href="https://ist.psu.edu/" className="links">Penn State (We Are!)</a>. I'd never coded before freshman year, but I ended up majoring in Information Science and falling in love with frontend design & interactive computing.</p>
                        <p>What I love about product design is the moment something complicated starts to feel obvious. Behind every simple experience is a lot of untangling: understanding the people, the constraints, and the problem underneath the problem. I'm currently looking for my next adventure in product design, where I can bring this approach to building thoughtful, human-centered experiences.</p>
                        <p>Outside of work, you can find me curled up with a <a href="https://www.goodreads.com/user/show/181754193-calvin" className="links">good ol' book</a>, <a href="https://strava.app.link/DpnVQrcxt7b" className="links">clocking miles in</a>, rock climbing, or trying (with mixed success) to keep my plants alive.</p>
                    </Col>
                </Row>
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