const navItems = [
  { id: "about", label: "01. About" },
  { id: "experience", label: "02. Experience" },
  { id: "projects", label: "03. Projects" },
  { id: "contact", label: "04. Contact" },
];

export default function NavBar() {
  const scrollTo = (id) => {
    const anchor = document.querySelector(`#${id}`);
    if (anchor) anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/40 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-end overflow-x-auto px-4 py-3 font-cousine text-sm sm:text-base md:px-8">
        {navItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`cursor-pointer whitespace-nowrap transition hover:text-blue-600 ${
              index !== navItems.length - 1 ? "mr-6 md:mr-10" : ""
            }`}
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
