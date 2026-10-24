'use client';

interface MatchBannerProps {
  onShowMatches: () => void;
}

export default function MatchBanner({ onShowMatches }: MatchBannerProps) {
  return (
    <section className="match-banner" id="safe">
      <div>
        <div className="eyebrow">Thoughtful by design</div>
        <h2>Could a found item be yours?</h2>
        <p>
          Describe a few details and the demo will suggest possible matches.
          Keep one unique detail private for verification.
        </p>
      </div>
      <button className="btn btn-white" onClick={onShowMatches}>
        See suggested matches <span>↗</span>
      </button>
    </section>
  );
}
