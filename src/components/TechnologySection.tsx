import type { Technology } from '../types/technology';
import TechnologyCard from './TechnologyCard';
import StackSidebar from './StackSidebar';

interface TechnologySectionProps {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (technology: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function TechnologySection({
  technologies,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechnologySectionProps) {
  const stackIds = new Set(stack.map((technology) => technology.id));

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="text-center lg:text-left">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
          Explore the <span className="text-brand-gradient">Technologies</span>
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Pick the pieces that fit your project and build your stack as you go.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              isAdded={stackIds.has(technology.id)}
              onAdd={onAdd}
            />
          ))}
        </div>

        <StackSidebar stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
      </div>
    </section>
  );
}
