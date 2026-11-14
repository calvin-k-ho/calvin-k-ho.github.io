import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import projects from "../data/projects";

const defaultSections = ["Context", "Problem", "Design", "Test", "Solution"];

function CaseStudyLayout({ className, client, title, summary, note, meta, heroImage, heroAlt, heroColor, sections = defaultSections, children }) {
    const [active, setActive] = useState(sections[0]);

    const { pathname } = useLocation();
    const index = projects.findIndex((project) => project.to === pathname);
    const neighbors = index === -1 ? [] : [
        { label: "Previous", project: projects[(index - 1 + projects.length) % projects.length] },
        { label: "Next", project: projects[(index + 1) % projects.length] },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, [sections]);

    return (
        <main className={className} data-aos="fade-in">
            <header className="intro">
                <p className="client">{client}</p>
                <h1>{title}</h1>
                <p className="summary">{summary}</p>
                {note && <p className="confidential-note">* {note}</p>}
                <div className="meta mt-4 pt-4">
                    {meta.map((item) => (
                        <div key={item.label}>
                            <span>{item.label}</span>
                            {item.value}
                        </div>
                    ))}
                </div>
            </header>

            {heroImage && (
                <div className="hero-banner" style={{ background: heroColor }}>
                    <img src={heroImage} alt={heroAlt} />
                </div>
            )}

            <div className="columns">
                <nav className="side-nav">
                    {sections.map((id) => (
                        <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
                            {id}
                        </a>
                    ))}
                </nav>

                <div className="content">
                    {children}

                    <nav className="keep-reading" aria-label="More case studies">
                        <span className="keep-label">Keep Reading</span>
                        <div className="more-work">
                            {neighbors.map(({ label, project }) => (
                                <Link key={label} to={project.to} className="more-card">
                                    <div className="more-image" style={{ background: project.panel }}>
                                        {project.image && <img src={project.image} alt="" loading="lazy" />}
                                        <span className="more-label">{label}</span>
                                    </div>
                                    <span className="more-client">
                                        {project.client}
                                    </span>
                                    <span className="more-title">{project.title}</span>
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
        </main>
    );
}

export default styled(CaseStudyLayout)`
    .intro {
        max-width: 1140px;
        margin: 0 auto 40px;
        padding: 160px 24px 0;
    }

    .client,
    .label {
        display: block;
        margin-bottom: 16px;
        font-family: "Inter", sans-serif;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.14em;
        color: #3b6ef6;
    }

    h1 {
        max-width: 900px;
        margin: 0 0 32px;
        font-family: "Instrument Serif", Georgia, serif;
        font-size: clamp(34px, 5.4vw, 60px);
        font-weight: 400;
        line-height: 1.12;
        letter-spacing: -0.02em;
        color: #1a1a1a;
    }

    .summary {
        max-width: 760px;
        margin: 0 0 32px;
        font-size: 17px;
    }

    .intro .client {
        margin-bottom: 0;
    }

    .summary:has(+ .confidential-note) {
        margin-bottom: 12px;
    }

    .confidential-note {
        max-width: 760px;
        margin: 0 0 32px;
        font-size: 14px;
        font-style: italic;
        color: #6b6b6b;
    }

    h2 {
        margin: 40px 0 14px;
        font-family: "Instrument Serif", Georgia, serif;
        font-size: clamp(24px, 3vw, 32px);
        font-weight: 400;
        line-height: 1.2;
        color: #1a1a1a;
    }

    h3 {
        margin: 40px 0 14px;
        font-family: "Instrument Serif", Georgia, serif;
        font-size: clamp(20px, 3vw, 28px);
        font-weight: 400;
        line-height: 1.2;
        color: #1a1a1a;
    }

    .label + h2 {
        margin-top: 0;
    }

    .meta {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        font-family: "Inter", sans-serif;
        font-size: 15px;
        color: #1a1a1a;
    }

    .meta span {
        display: block;
        margin-bottom: 6px;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #9a9a9a;
    }

    .hero-banner {
        margin-bottom: clamp(40px, 6vw, 72px);
        padding: clamp(32px, 5vw, 64px) 0;
    }

    .hero-banner img {
        display: block;
        width: 100%;
    }

    .columns {
        display: grid;
        grid-template-columns: 180px minmax(0, 1fr);
        gap: 48px;
        max-width: 1140px;
        margin: 0 auto 80px;
        padding: 0 24px;
    }

    .side-nav {
        position: sticky;
        top: 120px;
        align-self: start;
    }

    .side-nav a {
        display: block;
        padding: 8px 0 8px 16px;
        border-left: 2px solid #e5e2dc;
        font-family: "Inter", sans-serif;
        font-size: 14px;
        color: #9a9a9a;
        text-decoration: none;
    }

    .side-nav a.active {
        border-left-color: #3b6ef6;
        color: #1a1a1a;
    }

    section {
        padding-bottom: clamp(48px, 7vw, 80px);
        scroll-margin-top: 100px;
    }

    p,
    li {
        font-family: "Inter", sans-serif;
        font-size: 16px;
        line-height: 1.7;
        color: #4a4a4a;
    }

    p,
    ul {
        max-width: 760px;
    }

    figure {
        margin: 24px 0 0;
    }

    figure img {
        display: block;
        width: 100%;
    }

    figcaption {
        margin-top: 8px;
        font-family: "Inter", sans-serif;
        font-size: 13px;
        color: #6b6b6b;
    }

    .pair {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-top: 24px;
    }

    .pair figure {
        margin-top: 0;
    }

    .decision {
        max-width: 680px;
        margin-top: 24px;
        padding: 20px 24px;
        border-left: 2px solid #3b6ef6;
        border-radius: 0 8px 8px 0;
        background: #f6f8ff;
    }

    .d-label {
        display: block;
        font-family: Inter, sans-serif;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: rgb(59, 110, 246);
        margin-bottom: 8px;
    }

    .decision h3 {
        margin: 0 0 10px;
        font-family: "Instrument Serif", Georgia, serif;
        font-size: clamp(20px, 2.4vw, 26px);
        font-weight: 400;
        color: #1a1a1a;
    }

    .decision p {
        margin: 0;
        font-size: 15px;
    }

    .decision p + p {
        margin-top: 10px;
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
        max-width: 760px;
        margin-top: 24px;
    }

    .cards.three {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .card {
        padding: 24px;
        border: 1px solid #ece8e1;
        border-radius: 10px;
        background: #fff;
        transition: all 0.4s ease-in-out;
    }

    .card:hover {
        box-shadow: rgba(0, 0, 0, 0.075) 0px 0.5rem 1rem;
        transition: 0.4s ease-out;
    }

    .card-label {
        display: block;
        margin-bottom: 10px;
        font-family: "Inter", sans-serif;
        font-size: 13px;
        color: #9a9a9a;
    }

    .card h3 {
        margin: 0 0 10px;
        font-family: "Instrument Serif", Georgia, serif;
        font-size: 22px;
        font-weight: 400;
        line-height: 1.25;
        color: #1a1a1a;
    }

    .card p {
        margin: 0;
        font-size: 15px;
        line-height: 1.6;
    }

    .card ul {
        margin: 12px 0 0;
        padding-left: 18px;
    }

    .card li {
        margin-bottom: 6px;
        font-size: 15px;
        line-height: 1.55;
    }

    .tag {
        display: inline-block;
        margin-bottom: 10px;
        padding: 2px 10px;
        border: 1px solid #e5e2dc;
        border-radius: 999px;
        background: #fff;
        font-family: "Inter", sans-serif;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #6b6b6b;
    }

    .trio {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
        max-width: 760px;
    }

    .trio figure {
        margin-top: 0;
    }

    .tag.final {
        border-color: #3b6ef6;
        color: #3b6ef6;
    }

    .peek img {
        aspect-ratio: 4 / 5;
        object-fit: cover;
        object-position: top;
        border: 1px solid #ece8e1;
        border-radius: 6px;
    }

    .peek.phones {
        max-width: 480px;
    }

    .peek.phones img {
        aspect-ratio: 9 / 16;
    }

    .concepts {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
        max-width: 760px;
        margin-top: 24px;
    }

    .concepts figure {
        margin-top: 0;
    }

    .concepts img {
        aspect-ratio: 4 / 5;
        object-fit: cover;
        object-position: top;
        border: 1px solid #ece8e1;
        border-radius: 6px;
    }

    .audits {
        display: grid;
        grid-template-columns: 1.34fr 0.82fr 0.88fr;
        gap: 12px;
    }

    .audits figure {
        margin-top: 0;
    }

    .feature {
        margin: 48px 0 8px;
    }

    .feature h3 {
        margin: 0;
        font-family: "Instrument Serif", Georgia, serif;
        font-size: clamp(24px, 3vw, 32px);
        font-weight: 400;
        line-height: 1.2;
        color: #1a1a1a;
    }

    .learned-designed {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-top: 16px;
        max-width: 720px;
    }

    .ld-label {
        display: block;
        font-family: "Inter", sans-serif;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin-bottom: 6px;
    }

    .ld-learned .ld-label {
        color: #9a9a9a;
    }

    .ld-designed .ld-label {
        color: #3b6ef6;
    }

    .learned-designed p {
        margin: 0;
        font-size: 15px;
    }

    .spotlights {
        display: flex;
        flex-direction: column;
        gap: clamp(48px, 6vw, 72px);
        margin-top: 40px;
    }

    .spotlight {
        display: grid;
        grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
        gap: clamp(24px, 3.5vw, 40px);
        align-items: center;
    }

    .spotlight:nth-child(even) {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1.5fr);
    }

    .spotlight:nth-child(even) .spotlight-media {
        order: 2;
    }

    .spotlight-media figure {
        margin: 0;
    }

    .spotlight-media figure + figure {
        margin-top: 20px;
    }

    .spotlight-media img {
        border: 1px solid #ece8e1;
        border-radius: 8px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 12px 32px rgba(0, 0, 0, 0.07);
    }

    .spotlight-num {
        display: block;
        margin-bottom: 8px;
        font-family: "Inter", sans-serif;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: #3b6ef6;
    }

    .spotlight-text > h3 {
        margin: 0 0 12px;
        font-family: "Instrument Serif", Georgia, serif;
        font-size: clamp(24px, 2.6vw, 30px);
        font-weight: 400;
        line-height: 1.2;
        color: #1a1a1a;
    }

    .spotlight-text p {
        font-size: 15px;
    }

    .spotlight-text .learned-designed {
        grid-template-columns: 1fr;
        gap: 14px;
        margin-top: 0;
    }

    .spotlight-text .decision {
        margin-top: 16px;
        padding: 14px 18px;
    }

    .pullquote {
        position: relative;
        max-width: 760px;
        margin: 28px 0 32px;
        padding: 32px 40px 28px 76px;
        border-radius: 14px;
        background: #f6f8ff;
    }

    .pullquote::before {
        content: "“";
        position: absolute;
        top: 10px;
        left: 22px;
        font-family: "Instrument Serif", Georgia, serif;
        font-size: 96px;
        line-height: 1;
        color: #3b6ef6;
        opacity: 0.4;
    }

    .pullquote blockquote {
        margin: 0;
        font-family: "Instrument Serif", Georgia, serif;
        font-size: clamp(22px, 2.4vw, 28px);
        line-height: 1.35;
        color: #1a1a1a;
    }

    .pullquote figcaption {
        margin-top: 14px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #6b6b6b;
    }

    .source {
        margin-top: 16px;
        font-size: 14px;
        font-style: italic;
        color: #9a9a9a;
    }

    .aside {
        background: rgb(250, 247, 242);
        border: 1px solid rgb(236, 232, 225);
        border-radius: 10px;
        padding: 20px 24px;
        margin-top: 24px;
        max-width: 760px;
    }

    .aside strong {
        display: block;
        font-family: "Instrument Serif", Georgia, serif;
        font-weight: 400;
        font-size: 22px;
        color: rgb(26, 26, 26);
        margin-bottom: 6px;
    }

    .hmw {
        margin-top: 32px;
        max-width: 720px;
    }

    .hmw-label {
        display: block;
        font-family: Inter, sans-serif;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.14em;
        color: rgb(59, 110, 246);
        margin-bottom: 12px;
    }

    .hmw p {
        margin: 0px;
        max-width: 720px;
        font-family: "Instrument Serif", Georgia, serif;
        font-size: clamp(24px, 3.2vw, 36px);
        line-height: 1.25;
        color: rgb(26, 26, 26);
    }

    .keep-reading {
        padding-top: 28px;
        border-top: 1px solid #e5e2dc;
    }

    .protected {
        max-width: 760px;
        padding: 32px;
        margin-bottom: clamp(48px, 7vw, 80px);
        border: 1px solid #ece8e1;
        border-radius: 10px;
        background: rgb(250, 247, 242);
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

    .keep-label {
        display: block;
        margin-bottom: 16px;
        font-family: "Inter", sans-serif;
        font-size: 13px;
        letter-spacing: 0.1em;
        color: #9a9a9a;
    }

    .more-work {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 24px;
    }

    .more-card {
        display: block;
        color: inherit;
        text-decoration: none;
    }

    .more-image {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 16 / 10;
        overflow: hidden;
        border-radius: 10px;
    }

    .more-image img {
        width: 85%;
        height: 85%;
        object-fit: contain;
        transition: transform 0.6s ease;
    }

    .more-image::after {
        content: "";
        position: absolute;
        inset: 0;
        background: #fff;
        opacity: 0.8;
        transition: opacity 0.6s ease;
    }

    .more-label {
        position: absolute;
        inset: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Inter", sans-serif;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: #1a1a1a;
        transition: opacity 0.6s ease;
    }

    .more-card:hover .more-image::after,
    .more-card:hover .more-label,
    .more-card:focus-visible .more-image::after,
    .more-card:focus-visible .more-label {
        opacity: 0;
    }

    .more-card:hover .more-image img,
    .more-card:focus-visible .more-image img {
        transform: scale(1.03);
    }

    .more-client {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;
        margin-top: 14px;
        font-family: "Inter", sans-serif;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #6b6b6b;
    }

    .more-title {
        display: inline;
        border-bottom: 2px solid transparent;
        font-family: "Instrument Serif", Georgia, serif;
        font-size: clamp(22px, 2.6vw, 28px);
        line-height: 1.3;
        color: #1a1a1a;
        transition: border-color 0.3s ease;
    }

    .more-card:hover .more-title,
    .more-card:focus-visible .more-title {
        border-bottom-color: #f8d335;
    }

    @media (hover: none) {
        .more-image::after {
            opacity: 0.45;
        }
    }

    @media (max-width: 991px) {
        .columns {
            grid-template-columns: minmax(0, 1fr);
        }

        .side-nav {
            display: none;
        }
    }

    @media (max-width: 760px) {
        .spotlight,
        .spotlight:nth-child(even) {
            grid-template-columns: minmax(0, 1fr);
        }

        .spotlight:nth-child(even) .spotlight-media {
            order: 0;
        }

        .pullquote {
            padding: 56px 24px 24px;
        }

        .cards.three {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (max-width: 600px) {
        .pair,
        .trio,
        .audits,
        .learned-designed,
        .more-work,
        .cards,
        .cards.three {
            grid-template-columns: 1fr;
        }

        .concepts {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .trio.phones {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 8px;
        }
    }
`;