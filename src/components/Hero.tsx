import bannerStack from '../assets/banner-stack.png';

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-slate-500 lg:mx-0">
            Browse curated technologies, compare them at a glance, and put together the
            exact stack your next project deserves.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#technologies"
              className="bg-brand w-full rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 sm:w-auto"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="w-full rounded-full border border-slate-200 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerStack}
            alt="Illustration of a layered development stack"
            className="w-56 sm:w-72 lg:w-80"
          />
        </div>
      </div>
    </section>
  );
}
