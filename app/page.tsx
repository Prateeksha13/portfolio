export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0d0d0d] px-6 text-center">
      <div className="max-w-md">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
          Lead Product Designer
        </p>
        <h1 className="mb-6 text-5xl font-light tracking-tight text-white">
          Prateeksha
        </h1>
        <div className="mx-auto mb-10 h-px w-12 bg-neutral-700" />
        <p className="mb-10 text-sm text-neutral-400">
          Portfolio coming soon
        </p>
        <a
          href="mailto:prateeksha.ink@gmail.com"
          className="text-xs tracking-widest text-neutral-500 transition-colors duration-200 hover:text-white"
        >
          prateeksha.ink@gmail.com
        </a>
      </div>
    </main>
  );
}
