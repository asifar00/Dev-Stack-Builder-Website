import type { Technology } from '../types/technology';
import { CATEGORY_STYLES } from '../utils/categoryColors';

interface StackItemProps {
  technology: Technology;
  onRemove: (id: string) => void;
}

export default function StackItem({ technology, onRemove }: StackItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
        <img src={technology.icon} alt="" aria-hidden="true" className="h-5 w-5 object-contain" />
      </span>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-slate-900">{technology.name}</p>
        <span
          className={`mt-0.5 inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold ${CATEGORY_STYLES[technology.category]}`}
        >
          {technology.category}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onRemove(technology.id)}
        aria-label={`Remove ${technology.name} from your stack`}
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-50 hover:text-slate-600"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
        </svg>
      </button>
    </li>
  );
}
