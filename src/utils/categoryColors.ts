import type { TechnologyCategory } from '../types/technology';

export const CATEGORY_STYLES: Record<TechnologyCategory, string> = {
  Frontend: 'bg-sky-50 text-sky-600',
  Backend: 'bg-emerald-50 text-emerald-600',
  Database: 'bg-orange-50 text-orange-600',
  Language: 'bg-violet-50 text-violet-600',
  Styling: 'bg-cyan-50 text-cyan-600',
  DevOps: 'bg-indigo-50 text-indigo-600',
  Tools: 'bg-rose-50 text-rose-600',
};

export const DIFFICULTY_STYLES: Record<string, string> = {
  'Beginner-Friendly': 'text-emerald-600',
  Intermediate: 'text-amber-600',
  Advanced: 'text-rose-600',
};
