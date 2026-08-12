export default function NavBar() {
  const links = [
    ["About", "#about"],
    ["Stack", "#stack"],
    ["Projects", "/projects"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-[#090a0f]/75 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">
        <a href="#intro" className="text-sm font-bold tracking-wider text-white">
          GK<span className="text-violet-400">.</span>
        </a>
        <div className="flex items-center gap-1 overflow-x-auto sm:gap-2">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs text-zinc-400 transition hover:bg-white/8 hover:text-white sm:px-4 sm:text-sm"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
