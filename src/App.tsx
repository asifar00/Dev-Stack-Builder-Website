import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologySection from './components/TechnologySection';
import Footer from './components/Footer';
import Loading from './components/Loading';
import technologiesData from './data/technologies.json';
import type { Technology } from './types/technology';

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    // The technology list lives in its own JSON file (src/data/technologies.json)
    // rather than a hardcoded array here. It's wrapped in a tiny async delay so the
    // loading state is real and exercised, even though the data itself is local.
    async function loadTechnologies() {
      try {
        const data = await new Promise<Technology[]>((resolve, reject) => {
          setTimeout(() => {
            if (Array.isArray(technologiesData)) {
              resolve(technologiesData as Technology[]);
            } else {
              reject(new Error('Technology data is malformed.'));
            }
          }, 400);
        });
        if (isMounted) setTechnologies(data);
      } catch {
        if (isMounted) setLoadError('Could not load technologies. Please refresh and try again.');
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadTechnologies();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemove = (id: string) => {
    const technology = stack.find((item) => item.id === id);
    setStack((current) => current.filter((item) => item.id !== id));
    if (technology) toast.info(`${technology.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info('Your stack has been cleared.');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />

        {isLoading && <Loading />}

        {!isLoading && loadError && (
          <p role="alert" className="mx-auto max-w-7xl px-4 py-16 text-center text-sm text-rose-500">
            {loadError}
          </p>
        )}

        {!isLoading && !loadError && (
          <TechnologySection
            technologies={technologies}
            stack={stack}
            onAdd={handleAdd}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        )}
      </main>
      <Footer />

      <ToastContainer position="bottom-right" autoClose={2800} newestOnTop hideProgressBar />
    </div>
  );
}