import styled from "styled-components";

function Footer({ className }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={className}>
      <div className="footer-inner">
        <h2 className="cta">Want to work together?</h2>

        <div className="contact">
          <a className="email" href="mailto:calvin.kinto.ho@gmail.com">
            calvin.kinto.ho@gmail.com
          </a>
          <ul className="footer-links">
            <li className="link-container">
              <a
                href="https://www.linkedin.com/in/calvin-k-ho/"
                target="_blank"
                rel="noreferrer"
                className="custom-underline"
              >
                LinkedIn
              </a>
            </li>
            <li className="link-container">
              <a
                href="https://github.com/calvin-k-ho"
                target="_blank"
                rel="noreferrer"
                className="custom-underline"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© Designed &amp; Coded with <span role="img" aria-label="Love Letter Emoji">💌</span> by Calvin Ho {currentYear}</span>
      </div>
    </footer>
  );
}

export default styled(Footer)`
  background-color: #f1ece6;
  margin-top: clamp(40px, 6vw, 80px);
  font-family: "Inter", sans-serif;

  .footer-inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: clamp(48px, 7vw, 88px) clamp(24px, 5vw, 64px) clamp(24px, 3vw, 32px);
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
  }

  .cta {
    font-family: "Instrument Serif", Georgia, serif;
    font-weight: 400;
    font-size: clamp(32px, 5vw, 56px);
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: #1a1a1a;
    margin: 0;
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 14px;
    text-align: right;
  }

  .email {
    font-family: "Instrument Serif", Georgia, serif;
    font-size: clamp(20px, 2.4vw, 28px);
    color: #1a1a1a;
    text-decoration: none;
    border-bottom: 2px solid #f8d335;
    transition: all 0.2s ease-in-out;
  }

  .email:hover {
    border-bottom-color: #1a1a1a;
    background: rgba(248, 211, 53, 0.18);
  }

  .footer-links {
    display: flex;
    gap: 16px;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
  }

  .footer-links a {
    color: #6b6b6b;
  }

  .custom-underline {
    position: relative;
    display: inline-block;
    text-decoration: none;
  }

  .custom-underline::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 3%;
    height: 2px;
    width: 0%;
    background-color: #3b6ef6;
    transition: 0.5s ease all 0.3s;
  }

  .link-container:hover .custom-underline::after {
    width: 90%;
    transition: 0.3s ease all;
  }

  .footer-bottom {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(24px, 5vw, 64px) 28px;
    font-size: 0.8em;
    color: gray;
  }

  @media (max-width: 600px) {
    .footer-inner {
      flex-direction: column;
      align-items: flex-start;
    }

    .contact {
      align-items: flex-start;
      text-align: left;
    }
  }
`;
