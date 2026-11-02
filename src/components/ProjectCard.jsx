import styled from "styled-components";

function ProjectCard({
    className,
    to = "#",
    client,
    title,
    summary,
    image,
    imageAlt = "",
    accent = "#1f2937",
    panel = "#eef1f5",
    featured = false,
}) {
    return (
        <div className={`${className}${featured ? " featured" : ""}`} style={{ background: panel }}>
            <div className="text">
                {client && <span className="client"><span className="dot" style={{ background: accent }} /> {client}</span>}
                <h3>{title}</h3>
                {summary && <p className="summary">{summary}</p>}
            </div>
            {image && <img src={image} alt={imageAlt} loading="lazy" />}
        </div>
    );
}

export default styled(ProjectCard)`
  display: flex;
  flex-direction: column;
  min-height: 600px;
  border-radius: 10px;
  overflow: hidden;
  padding: 30px 20px 0;
  text-decoration: none;
  color: inherit;
  transition: all 0.4s ease-in-out;

  &:hover {
    border-radius: 0;
  }

  .client {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #6b6b6b;
    margin-bottom: 10px;
  }

  h3 {
    font-family: "Instrument Serif", Georgia, serif;
    font-weight: 400;
    font-size: clamp(22px, 2.3vw, 30px);
    line-height: 1.15;
    letter-spacing: -0.01em;
    color: #1a1a1a;
    margin: 0 0 10px;
  }

  .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .summary {
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.55;
    color: #4a4a4a;
    margin: 0;
  }

  img {
    margin-top: auto;
    width: 90%;
    align-self: center;
    display: block;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: translateY(-4px) scale(1.01);
  }

  &.featured {
    flex-direction: row;
    align-items: stretch;
    min-height: 360px;
    padding: 0;
  }

  &.featured .text {
    flex: 0 0 44%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 48px;
  }

  &.featured h3 {
    font-size: clamp(30px, 3.4vw, 44px);
    line-height: 1.1;
  }

  &.featured .summary {
    font-size: 16px;
    max-width: 44ch;
  }

  &.featured img {
    width: 56%;
    align-self: flex-end;
    margin: 0 0 0 auto;
  }

  @media (min-width:320px) {
    min-height: 420px;
  }

  @media (max-width: 680px) {
    &.featured {
      flex-direction: column;
      min-height: 420px;
      padding: 30px 20px 0;
    }

    &.featured .text {
      flex: none;
      padding: 0;
    }

    &.featured img {
      width: 90%;
      align-self: center;
      margin: auto auto 0;
    }
  }
`;