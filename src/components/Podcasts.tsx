import { useState, useMemo } from 'react';
import type { Podcast } from '../data/podcasts';

interface Props {
  podcasts: Podcast[];
}

export default function Podcasts({ podcasts }: Props) {
  const [active, setActive] = useState('all');

  const topics = useMemo(() => {
    const counts: Record<string, number> = {};
    podcasts.forEach(p => { counts[p.topic] = (counts[p.topic] || 0) + 1; });
    return [['all', podcasts.length] as [string, number], ...Object.entries(counts).map(([k, v]) => [k, v] as [string, number])];
  }, [podcasts]);

  const filtered = active === 'all' ? podcasts : podcasts.filter(p => p.topic === active);

  return (
    <>
      <div className="chips">
        {topics.map(([t, n]) => (
          <button
            key={t}
            className={`chip${active === t ? ' active' : ''}`}
            onClick={() => setActive(t)}
            aria-pressed={active === t}
          >
            {t}<span className="count">{n}</span>
          </button>
        ))}
      </div>
      <div className="entries">
        {filtered.map((p, i) => (
          <a key={i} className="entry podcast-entry" href={p.url} target="_blank" rel="noopener noreferrer">
            <div className="entry-meta-l">{p.show} · {p.ep}</div>
            <div className="entry-title">{p.title}</div>
            <div className="entry-meta-r">▸ listen</div>
          </a>
        ))}
      </div>
    </>
  );
}
