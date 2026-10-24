interface HeroProps {
  onReportLost: () => void;
}

export default function Hero({ onReportLost }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-grid">
        {/* --- Copy column --- */}
        <div className="hero-copy">
          <div className="eyebrow">A better way to bring things back</div>
          <h1>
            Lost on campus.
            <br />
            <em>Found by your people.</em>
          </h1>
          <p>
            One calm, trusted place to search campus finds, report a missing
            item, and get it back through a safe handover.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#browse">
              Browse recent finds <span>↓</span>
            </a>
            <button className="btn btn-light" onClick={onReportLost}>
              I lost something
            </button>
          </div>

          <div className="trust-row">
            <div className="avatars">
              <i>✦</i>
              <i>◉</i>
              <i>↗</i>
            </div>
            <span>
              Built for one campus community
              <br />
              <b style={{ color: 'var(--ink)' }}>
                Simple to search. Safer to return.
              </b>
            </span>
          </div>
        </div>

        {/* --- Decorative art column --- */}
        <div className="hero-art">
          <div className="art-glow" />
          <div className="art-circle" />
          <span className="spark s1">✳</span>
          <span className="spark s2">✦</span>
          <div className="art-note">Small things matter</div>

          <div className="orbit-card one">
            <div className="item-icon">🎧</div>
            <b>Black headphones</b>
            <small>Found near the library</small>
          </div>

          <div className="orbit-card two">
            <div style={{ display: 'flex', gap: 11, alignItems: 'center' }}>
              <div
                className="item-icon"
                style={{ margin: 0, background: '#e3edf3' }}
              >
                🪪
              </div>
              <div>
                <b>Looks like a match</b>
                <small>Private claim step next</small>
              </div>
            </div>
          </div>

          <div className="art-bottom">
            A little less lost.
            <br />
            A lot more found.
          </div>
        </div>
      </div>

      {/* --- Stats row --- */}
      <div className="stats">
        <div className="stat">
          <strong>One place</strong>
          <span>Search reports beyond the group chat</span>
        </div>
        <div className="stat">
          <strong>Private claims</strong>
          <span>Keep ownership clues to yourself</span>
        </div>
        <div className="stat">
          <strong>Safe handover</strong>
          <span>Meet at an approved campus point</span>
        </div>
      </div>
    </section>
  );
}
