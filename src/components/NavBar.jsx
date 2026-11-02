import { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar({ className }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (open) {
        setHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className={className}>
      <div className={`nav-bar ${hidden ? "hidden" : ""}`}>
        <Container className="nav-inner">
          <span className="logo">
            <Link to="/">CH</Link>
          </span>

          <ul className="nav-links">
            <li className="link-container">
              <Link to="/" className="custom-underline">
                Work
              </Link>
            </li>
            <li className="link-container">
              <Link to="/about" className="custom-underline">
                About
              </Link>
            </li>
          </ul>
        </Container>
      </div>

      <button
        type="button"
        className={`nav-toggle ${open ? "is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
      <span/>
      <span/>
      </button>

      <div className={`nav-overlay ${open ? "is-open" : ""}`}>
        <Link to="/" onClick={close}>
          Work
        </Link>
        <Link to="/about" onClick={close}>
          About
        </Link>
      </div>
    </div>
  );
}

export default styled(NavBar)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  .nav-bar {
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #e5e2dc;
    transition: transform 0.3s ease;
  }

  .nav-bar.hidden {
    transform: translateY(-100%);
  }

  .nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
  }

  .logo {
    font-family: "Instrument Serif", Georgia, serif;
    font-weight: 400;
    font-size: 1.8em;
    position: relative;
    z-index: 1101;
  }

  .logo a {
    color: #3b6ef6;
  }

  .nav-links {
    display: flex;
    gap: 40px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-links a {
    font-family: "Inter", sans-serif;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 500;
  }

  .custom-underline {
    position: relative;
    display: inline-block;
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

  .nav-toggle {
    display: none;
    position: fixed;
    top: 28px;
    right: clamp(24px, 5vw, 64px);
    z-index: 1101;
    width: 26px;
    height: 18px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  }

  .nav-toggle span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: #1a1a1a;
    transition: transform 0.3s ease, top 0.3s ease, opacity 0.3s ease;
  }

  .nav-toggle span:first-child {
    top: 0;
  }

  .nav-toggle span:last-child {
    top: 16px;
  }

  .nav-toggle.is-open span:first-child {
    top: 8px;
    transform: rotate(45deg);
  }

  .nav-toggle.is-open span:last-child {
    top: 8px;
    transform: rotate(-45deg);
  }

  .nav-overlay {
    display: none;
  }

  @media (max-width: 600px) {
    .nav-links {
      display: none;
    }

    .nav-toggle {
      display: block;
    }

    .nav-overlay {
      display: flex;
      position: fixed;
      inset: 0;
      z-index: 1100;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 20px;
      padding: 32px clamp(24px, 5vw, 64px);
      background: #fff;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-12px);
      transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
    }

    .nav-overlay.is-open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .nav-overlay a {
      font-family: "Instrument Serif", Georgia, serif;
      font-size: clamp(36px, 10vw, 56px);
      font-weight: 400;
      color: #1a1a1a;
    }
  }
`;