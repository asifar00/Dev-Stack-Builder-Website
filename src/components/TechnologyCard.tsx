import type { Technology } from '../types/technology';
import { CATEGORY_STYLES, DIFFICULTY_STYLES } from '../utils/categoryColors';
import StarRating from './StarRating';

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

export default function TechnologyCard({ technology, isAdded, onAdd }: TechnologyCardProps) {
  const { name, description, icon, rating, difficulty, badge, category } = technology;

  return (
    <article className="shadow-card flex flex-col rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50">
          <img src={icon} alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
        </span>
        <span className="rounded-full bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-500">
          {badge}
        </span>
      </div>

      <h3 className="mt-4 text-base font-bold text-slate-900">{name}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-500">{description}</p>

      <div className="mt-4 flex flex-nowrap items-center justify-between gap-1.5">
        <span className={`shrink-0 whitespace-nowrap rounded-full px-2 py-1 text-xs font-semibold ${CATEGORY_STYLES[category]}`}>
          {category}
        </span>
        <span className={`shrink-0 whitespace-nowrap text-xs font-semibold ${DIFFICULTY_STYLES[difficulty]}`}>
          {difficulty}
        </span>
        <StarRating rating={rating} />
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        aria-pressed={isAdded}
        className={`mt-5 w-full rounded-xl py-2.5 text-sm font-semibold transition ${
          isAdded
            ? 'cursor-not-allowed bg-emerald-50 text-emerald-600'
            : 'bg-ink-900 text-white hover:opacity-90'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  );
}
