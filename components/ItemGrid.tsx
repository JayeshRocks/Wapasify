'use client';

import { DemoItem } from '@/lib/demo-data';

interface ItemGridProps {
  items: DemoItem[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  onOpenReportFound: () => void;
  onItemClick: (item: DemoItem) => void;
}

const FILTER_OPTIONS = [
  { label: 'Everything', value: 'all' },
  { label: 'Found', value: 'found' },
  { label: 'Lost', value: 'lost' },
  { label: 'Electronics', value: 'electronics' },
];

export default function ItemGrid({
  items,
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
  onOpenReportFound,
  onItemClick,
}: ItemGridProps) {
  const q = searchQuery.trim().toLowerCase();
  const filtered = items.filter((x) => {
    const matchesFilter =
      activeFilter === 'all' ||
      x.kind === activeFilter ||
      x.category === activeFilter;
    const matchesSearch =
      !q || `${x.title} ${x.area} ${x.hint}`.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="listings" id="browse">
      <div className="section-head">
        <div>
          <div className="eyebrow">The campus board</div>
          <h2>Recently reported</h2>
          <p>Browse demo listings or filter down to what you need.</p>
        </div>
        <button className="btn btn-light" onClick={onOpenReportFound}>
          ＋ Post a found item
        </button>
      </div>

      <div className="toolbar">
        <label className="searchbox">
          <span>⌕</span>
          <input
            id="search"
            type="search"
            placeholder="Search items or broad areas…"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search items"
          />
        </label>
        <div className="filterset">
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              className={`chip ${activeFilter === opt.value ? 'active' : ''}`}
              data-filter={opt.value}
              onClick={() => onFilterChange(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="item-grid" id="items">
        {filtered.length > 0 ? (
          filtered.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="item-card"
              tabIndex={0}
              onClick={() => onItemClick(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onItemClick(item);
                }
              }}
              role="button"
              aria-label={`${item.kind}: ${item.title}`}
            >
              <div className={`item-visual ${item.tone}`}>
                <span>{item.icon}</span>
                <span className="visual-sticker">{item.hint}</span>
              </div>
              <div className="item-content">
                <div className="item-title">
                  <h3>{item.title}</h3>
                  <span className={`status ${item.kind}`}>{item.kind}</span>
                </div>
                <p>
                  {item.age} · {item.area}
                </p>
                <div className="item-meta">
                  <span className="location">
                    ⌖ {item.area.split(' · ')[0]}
                  </span>
                  <span>Demo listing ↗</span>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="empty">
            No demo listings match that search. Try another word or clear the
            filters.
          </div>
        )}
      </div>

      <div className="demo-note">
        Demo prototype: every listing is fictional. Reports and claims are
        simulated in this browser only; nothing is sent to a college or saved to
        a server.
      </div>
    </section>
  );
}
