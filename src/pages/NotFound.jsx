import { Link } from "react-router-dom";
import styled from "styled-components";

function NotFound({ className }) {
  return (
    <div className={className}>
      <div className="content" data-aos="fade-in">
        <h5>404</h5>
        <h2>This page doesn't exist</h2>
        <p>
          Whatever you were looking for isn't here. It might've moved, or
          the link might just be wrong.
        </p>
        <Link className="btn" to="/">
          &larr; Back to home
        </Link>
      </div>
    </div>
  );
}

export default styled(NotFound)`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(24px, 5vw, 64px);

  .content {
    max-width: 480px;
    width: 100%;
    text-align: center;
  }

  h5 {
    font-family: "Inter", sans-serif;
    font-size: 0.7em;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #3b6ef6;
    margin: 0 0 12px;
  }

  h2 {
    font-family: "Instrument Serif", Georgia, serif;
    font-weight: 400;
    margin: 0 0 12px;
  }

  p {
    color: #6b6b6b;
    margin: 0 0 28px;
  }

  .btn {
  color: black;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid #266DB6;
  border-radius: 0;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.btn:after {
  content: "";
  background-color: #D5EDF6;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

.btn:hover:after {
  top: 0px;
  left: 0px;
}
`;
