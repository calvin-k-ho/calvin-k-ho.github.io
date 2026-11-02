import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import hogwarts from "../assets/images/hogwarts.png"
import marathon from "../assets/images/marathon.png";
import glory from "../assets/images/glory.mp4";

const photos = [
    { type: "image", src: hogwarts, caption: "In another life, I'm a Ravenclaw student at Hogwarts 🪄" },
    { type: "image", src: marathon, caption: "Making moves. Doing hard things. 1st marathon down 🏃" },
    { type: "video", src: glory, caption: "For the Glory of Old State 🎓" },
];

function PhotoCarousel({ className }) {
    const [index, setIndex] = useState(0);
    const videoRef = useRef(null);

    const next = () => setIndex((i) => (i + 1) % photos.length);

    useEffect(() => {
        if (photos[index].type === "video") {
            const v = videoRef.current;
            if (v) {
                v.currentTime = 0;
                v.play().catch(() => {});
            }
            return;
        }
        const timer = setTimeout(next, 4000);
        return () => clearTimeout(timer);
    }, [index]);

    const current = photos[index] ?? photos[0];

    return (
        <figure className={className}>
            <div className="frame">
                {photos.map((photo, i) =>
                    photo.type === "video" ? (
                        <video
                            key={i}
                            ref={videoRef}
                            src={photo.src}
                            className={i === index ? "active" : ""}
                            muted
                            playsInline
                            onEnded={next}
                        />
                    ) : (
                        <img
                            key={i}
                            src={photo.src}
                            alt={photo.caption}
                            className={i === index ? "active" : ""}
                        />
                    )
                )}
            </div>
            <div className="mt-2 pt-2" />
            <figcaption>{current.caption}</figcaption>
            <div className="dots">
                {photos.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        aria-label={`Show photo ${i + 1}`}
                        className={i === index ? "active" : ""}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </figure>
    );
}

export default styled(PhotoCarousel)`
    max-width: 480px;
    margin: 0 auto;

    .frame {
        position: relative;
        aspect-ratio: 4 / 5;
    }

    .frame img,
    .frame video {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
        box-shadow: 10px 15px black;
        opacity: 0;
        transition: opacity 0.8s ease-in-out;
    }

    .frame img.active,
    .frame video.active {
        opacity: 1;
    }

    figcaption {
        margin-top: 20px;
        text-align: center;
        font-family: "Inter", sans-serif;
        font-size: 14px;
        color: #6b6b6b;
    }

    .dots {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 12px;
    }

    .dots button {
        width: 8px;
        height: 8px;
        padding: 0;
        border: none;
        border-radius: 50%;
        background: #d4d4d4;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.3s ease;
    }

    .dots button.active {
        background: #3b6ef6;
        transform: scale(1.25);
    }

    @media (min-width:320px) {
        .frame img,
        .frame video {
            box-shadow: 5px 10px black;
        }
    }
`;
