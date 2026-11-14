function Quote({ children, source }) {
    return (
        <figure className="pullquote">
            <blockquote>{children}</blockquote>
            {source && <figcaption>{source}</figcaption>}
        </figure>
    );
}

export default Quote;
