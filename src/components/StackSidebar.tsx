import type { Technology } from '../types/technology';
import StackItem from './StackItem';

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function StackSidebar({ stack, onRemove, onRemoveAll }: StackSidebarProps) {
  const count = stack.length;

  return (
    <aside className="shadow-card sticky top-24 rounded-2xl border border-slate-100 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-400">
        {count === 0 ? 'No technologies selected yet.' : `${count} Technology Selected`}
      </p>

      {count === 0 ? (
        <div className="mt-4 flex h-28 items-center justify-center rounded-xl border border-dashed border-slate-200">
          <p className="text-sm text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        <>
          <ul className="mt-4 flex flex-col gap-2.5">
            {stack.map((technology) => (
              <StackItem key={technology.id} technology={technology} onRemove={onRemove} />
            ))}
          </ul>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-xl border border-rose-100 py-2.5 text-sm font-semibold text-rose-500 transition hover:bg-rose-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}
