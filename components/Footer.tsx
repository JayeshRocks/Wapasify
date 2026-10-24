export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <a className="brand" href="#top">
          <span
            className="brand-mark"
            style={{ background: 'var(--lime)', color: 'var(--green)' }}
          >
            ↗
          </span>
          <span>
            Wapasify
            <small style={{ color: '#c4d5ca' }}>Lost &amp; found, together</small>
          </span>
        </a>
        <span>Prototype only · Demo records are fictional</span>
        <span>Made for a campus community</span>
      </div>
    </footer>
  );
}
