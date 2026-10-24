'use client';

interface TopBarProps {
  onReportLost: () => void;
  onReportFound: () => void;
}

export default function TopBar({ onReportLost, onReportFound }: TopBarProps) {
  return (
    <header className="topbar">
      <a className="brand" href="#top">
        <span className="brand-mark">↗</span>
        <span>
          Wapasify
          <small>Lost &amp; found, together</small>
        </span>
      </a>

      <nav className="nav">
        <a href="#browse">Browse items</a>
        <a href="#how">How it works</a>
        <a href="#safe">Safe returns</a>
      </nav>

      <div className="actions">
        <button className="btn btn-light" onClick={onReportFound}>
          ＋ I found something
        </button>
        <button className="btn btn-primary" onClick={onReportLost}>
          Report an item <span>↗</span>
        </button>
      </div>
    </header>
  );
}
