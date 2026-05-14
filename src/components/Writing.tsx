import { useState, useMemo } from 'react';
import type { WritingEntry } from '../data/writing';

interface EssayProps {
  w: WritingEntry;
}

function EssayEntry({ w }: EssayProps) {
  const [open, setOpen] = useState(false);
  return (
    <article className="essay">
      <div className="essay-meta">
        <span>{w.year}</span>
        <span className="dot">/</span>
        <span>{w.venue}</span>
        {w.impressions && (
          <>
            <span className="dot">/</span>
            <span className="imp">{w.impressions}</span>
          </>
        )}
      </div>
      <h3 className="essay-title">{w.title}</h3>
      <div className="essay-quote">
        <span className="essay-quote-mark">"</span>
        <div className="essay-quote-text">{w.quote}</div>
      </div>
      {w.imageId && (
        <div className="essay-image">
          <img
            src={`/images/${w.imageId}.jpg`}
            alt={w.imagePlaceholder || ''}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      )}
      {open && (
        <div className="essay-body">
          {w.body!.split(/\n\n+/).map((para, i) => <p key={i}>{para}</p>)}
        </div>
      )}
      <div className="essay-foot">
        <button
          className="essay-toggle"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
        >
          {open ? '▴ collapse' : '▾ read in full'}
        </button>
        {w.url && (
          <a className="essay-link" href={w.url} target="_blank" rel="noopener noreferrer">
            ↗ on LinkedIn
          </a>
        )}
      </div>
    </article>
  );
}

function SimpleEntry({ w }: EssayProps) {
  return (
    <div className="entry">
      <div className="entry-meta-l">{w.year}</div>
      <div>
        <div className="entry-title">
          <a href={w.url || '#'} target={w.url ? '_blank' : undefined} rel={w.url ? 'noopener noreferrer' : undefined}>
            {w.title}
          </a>
        </div>
        <div className="entry-sub">{w.venue}</div>
      </div>
      <div className="entry-meta-r">▸ read</div>
    </div>
  );
}

interface Props {
  writing: WritingEntry[];
}

export default function Writing({ writing }: Props) {
  const [active, setActive] = useState('all');

  const topics = useMemo(() => {
    const counts: Record<string, number> = {};
    writing.forEach(w => { counts[w.topic] = (counts[w.topic] || 0) + 1; });
    return [['all', writing.length] as [string, number], ...Object.entries(counts).map(([k, v]) => [k, v] as [string, number])];
  }, [writing]);

  const filtered = active === 'all' ? writing : writing.filter(w => w.topic === active);
  const essays = filtered.filter(w => w.quote);
  const simples = filtered.filter(w => !w.quote);

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

      {essays.length > 0 && (
        <div className="essays">
          {essays.map((w, i) => <EssayEntry key={`e${i}-${w.title}`} w={w} />)}
        </div>
      )}

      {simples.length > 0 && (
        <>
          {essays.length > 0 && (
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)', margin: '40px 0 14px' }}>
              earlier writing
            </div>
          )}
          <div className="entries">
            {simples.map((w, i) => <SimpleEntry key={`s${i}-${w.title}`} w={w} />)}
          </div>
        </>
      )}
    </>
  );
}
