import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const researchLinks = [
  {
    label: "Research Areas",
    description: "Explore our research focus",
    to: "/research-areas",
  },
  {
    label: "Research Outcomes",
    description: "Publications and outcomes",
    to: "/research-outcomes",
  },
];

const primaryLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Our Team", to: "/team" },
  { label: "Collaboration", to: "/collaboration" },
  { label: "Mentorship", to: "/mentorship" },
  { label: "Gallery", to: "/gallery" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResearchOpen, setIsResearchOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsResearchOpen(false);
  };

  const navLinkStyles = ({ isActive }) =>
    `relative rounded-sm py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-smap-green focus:ring-offset-2 ${
      isActive ? "text-smap-green" : "text-slate-700 hover:text-smap-green"
    }`;

  const researchButtonStyles = `
    flex items-center gap-1 rounded-sm py-2 text-sm font-medium
    text-slate-700 transition-colors duration-200
    hover:text-smap-green
    focus:outline-none focus:ring-2 focus:ring-smap-green focus:ring-offset-2
  `;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-smap-green focus:ring-offset-2"
          aria-label="SMAPDEV home"
        >
          {/* <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-smap-green text-lg font-bold text-white">
            S
          </div> */}

          <img
            src="/images/logo/smapdev_logo_w_name copy.png"
            alt="SMAPDEV Research Network"
            className="h-11 w-auto object-contain"
          />

          {/* <div className="leading-none">
            <span className="block text-lg font-bold tracking-tight text-slate-900">
              SMAPDEV
            </span>

            <span className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:block">
              Research Network
            </span>
          </div> */}
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-5 lg:flex"
          aria-label="Main navigation"
        >
          {primaryLinks.slice(0, 2).map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkStyles}>
              {link.label}
            </NavLink>
          ))}

          {/* Research dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsResearchOpen((current) => !current)}
              className={researchButtonStyles}
              aria-expanded={isResearchOpen}
              aria-haspopup="menu"
            >
              Research
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${
                  isResearchOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isResearchOpen && (
              <div
                className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3"
                role="menu"
              >
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10">
                  {researchLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={closeMenu}
                      role="menuitem"
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 transition-colors ${
                          isActive
                            ? "bg-smap-surface text-smap-green"
                            : "text-slate-700 hover:bg-smap-surface hover:text-smap-green"
                        }`
                      }
                    >
                      <span className="block text-sm font-medium">
                        {link.label}
                      </span>

                      <span className="mt-1 block text-xs text-slate-500">
                        {link.description}
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          {primaryLinks.slice(2).map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkStyles}>
              {link.label}
            </NavLink>
          ))}

          {/* Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-smap-green focus:ring-offset-2 ${
                isActive
                  ? "bg-smap-green-dark text-white"
                  : "bg-smap-green text-white hover:bg-smap-green-dark hover:shadow-lg hover:shadow-slate-900/10"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:bg-smap-surface focus:outline-none focus:ring-2 focus:ring-smap-green focus:ring-offset-2 lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <nav
            className="mx-auto max-w-7xl px-4 py-5 sm:px-6"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col">
              {primaryLinks.slice(0, 2).map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={navLinkStyles}
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Mobile Research */}
              <div className="border-y border-slate-100 py-1">
                <button
                  type="button"
                  onClick={() => setIsResearchOpen((current) => !current)}
                  className="flex w-full items-center justify-between rounded-sm py-3 text-left text-sm font-medium text-slate-700 transition-colors hover:text-smap-green focus:outline-none focus:ring-2 focus:ring-smap-green focus:ring-offset-2"
                  aria-expanded={isResearchOpen}
                >
                  <span>Research</span>

                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isResearchOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isResearchOpen && (
                  <div className="mb-2 ml-2 border-l border-slate-200 pl-4">
                    {researchLinks.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `block rounded-sm py-2 text-sm transition-colors ${
                            isActive
                              ? "font-medium text-smap-green"
                              : "text-slate-600 hover:text-smap-green"
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {primaryLinks.slice(2).map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={navLinkStyles}
                >
                  {link.label}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `mt-4 rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-smap-green focus:ring-offset-2 ${
                    isActive
                      ? "bg-smap-green-dark text-white"
                      : "bg-smap-green text-white hover:bg-smap-green-dark"
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
