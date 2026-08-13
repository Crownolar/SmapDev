import { Link } from 'react-router-dom'

const footerLinks = {
  explore: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Research Areas', to: '/research-areas' },
    { label: 'Research Outcomes', to: '/research-outcomes' },
    { label: 'Our Team', to: '/team' },
  ],
  connect: [
    { label: 'Collaboration', to: '/collaboration' },
    { label: 'Mentorship', to: '/mentorship' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contact', to: '/contact' },
  ],
}

const FooterLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="inline-block rounded-sm transition-colors hover:text-smap-green-light focus:outline-none focus:ring-2 focus:ring-smap-green-light focus:ring-offset-2 focus:ring-offset-slate-950"
    >
      {children}
    </Link>
  )
}

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-smap-green-light focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="SMAPDEV home"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-smap-green text-lg font-bold text-white">
                S
              </div>

              <div>
                <p className="text-lg font-bold text-white">
                  SMAPDEV
                </p>

                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Research Network
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Sustainable Materials and Process Development research
              network advancing research, collaboration, innovation and
              knowledge exchange.
            </p>

          </div>

          {/* Explore */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h2>

            <ul className="mt-5 space-y-3 text-sm">
              {footerLinks.explore.map((link) => (
                <li key={link.to}>
                  <FooterLink to={link.to}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h2>

            <ul className="mt-5 space-y-3 text-sm">
              {footerLinks.connect.map((link) => (
                <li key={link.to}>
                  <FooterLink to={link.to}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} SMAPDEV. All rights reserved.
          </p>

          <p>
            Sustainable Materials &amp; Process Development
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer