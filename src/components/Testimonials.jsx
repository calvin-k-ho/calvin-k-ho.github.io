import styled from "styled-components";
import testimonials from "../data/testimonials";

function Testimonials({ className }) {
    if (!testimonials.length) return null;

    return (
        <section className={className} aria-labelledby="testimonials-heading">
            <span className="eyebrow">Testimonials</span>
            <h2 id="testimonials-heading">Kind words from <em>people I've worked with</em></h2>
            <div className="t-grid">
                {testimonials.map((t, i) => (
                    <figure className="t-card" key={t.name} data-aos="fade-up" data-aos-delay={100 + i * 100} data-aos-once="true">
                        <span className="t-mark" aria-hidden="true">“</span>
                        <blockquote>{t.quote}</blockquote>
                        <figcaption>
                            <span className="t-name">{t.name}</span>
                            {t.title && <span className="t-title">{t.title}</span>}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}

export default styled(Testimonials)`
    margin: clamp(24px, 4vw, 48px) 0 clamp(64px, 8vw, 112px);

    .eyebrow {
        display: block;
        font-family: "Inter", sans-serif;
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #6b6b6b;
        margin-bottom: 12px;
    }

    h2 {
        font-family: "Instrument Serif", Georgia, serif;
        font-weight: 400;
        font-size: clamp(30px, 4vw, 44px);
        letter-spacing: -0.01em;
        color: #1a1a1a;
        margin-bottom: clamp(24px, 3vw, 36px);
    }

    h2 em {
        font-style: italic;
        color: #3b6ef6;
    }

    .t-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: clamp(16px, 2.5vw, 28px);
    }

    .t-card {
        position: relative;
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 28px 28px 24px;
        border: 1px solid #ece8e1;
        border-radius: 12px;
        background: #faf8f4;
    }

    .t-mark {
        font-family: "Instrument Serif", Georgia, serif;
        font-size: 64px;
        line-height: 0.6;
        height: 28px;
        color: #3b6ef6;
    }

    blockquote {
        flex: 1;
        margin: 0 0 24px;
        font-family: "Instrument Serif", Georgia, serif;
        font-size: clamp(19px, 1.6vw, 22px);
        line-height: 1.4;
        color: #1a1a1a;
    }

    figcaption {
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding-top: 16px;
        border-top: 1px solid #ece8e1;
        font-family: "Inter", sans-serif;
    }

    .t-name {
        font-size: 15px;
        font-weight: 600;
        color: #1a1a1a;
    }

    .t-title {
        font-size: 13px;
        color: #4a4a4a;
    }
`;
