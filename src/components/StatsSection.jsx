import { useCountUp } from '../hooks/useCountUp';
import './StatsSection.css';

const stats = [
  {
    value: 6,
    suffix: '',
    label: 'Core Business Models',
    icon: (
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="16" r="8" /><circle cx="16" cy="20" r="6" /><circle cx="48" cy="20" r="6" />
        <path d="M12 48 C12 36 24 32 32 32 C40 32 52 36 52 48" />
        <path d="M4 46 C4 38 12 34 16 34" /><path d="M60 46 C60 38 52 34 48 34" />
        <path d="M20 56 L24 52 L28 56" /><path d="M36 56 L40 52 L44 56" />
      </svg>
    ),
  },
  {
    value: 9,
    suffix: '',
    label: 'Export Products',
    icon: (
      <svg viewBox="0 0 64 64">
        <rect x="8" y="12" width="48" height="44" rx="4" />
        <line x1="8" y1="24" x2="56" y2="24" />
        <line x1="20" y1="4" x2="20" y2="16" /><line x1="44" y1="4" x2="44" y2="16" />
        <circle cx="32" cy="40" r="8" /><path d="M32 36 L32 40 L36 42" />
      </svg>
    ),
  },
  {
    value: 20,
    suffix: '+',
    label: 'Global Markets',
    icon: (
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="22" />
        <ellipse cx="32" cy="32" rx="10" ry="22" />
        <line x1="10" y1="32" x2="54" y2="32" />
        <line x1="14" y1="20" x2="50" y2="20" />
        <line x1="14" y1="44" x2="50" y2="44" />
        <path d="M24 14 C28 18 36 18 40 14" />
      </svg>
    ),
  },
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid reveal">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat }) {
  const { count, ref } = useCountUp(stat.value, 2000);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-icon">{stat.icon}</div>
      <div>
        <div className="stat-number">
          {count}{stat.suffix}
        </div>
        <div className="stat-label">{stat.label}</div>
      </div>
    </div>
  );
}
