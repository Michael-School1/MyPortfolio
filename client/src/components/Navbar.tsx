import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ]

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-cyan-500/20 bg-slate-950/95 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >

          <div className="relative">

            {/* Main Logo */}
            <div className="flex h-11 w-11 items-center justify-center border border-cyan-400 bg-slate-950 font-mono font-bold text-cyan-400 transition duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">

              MK

            </div>

            {/* Corner Detail */}
            <div className="absolute -bottom-1 -right-1 h-2 w-2 bg-cyan-400" />

          </div>

          <div className="hidden sm:block">

            <p className="font-mono text-sm font-bold tracking-wide text-white">
              MK // DEV
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Game Programming
            </p>

          </div>

        </Link>


        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">

          {navigationLinks.map((link, index) => {

            const isActive = location.pathname === link.path

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`group relative px-4 py-3 font-mono text-xs uppercase tracking-wider transition ${
                  isActive
                    ? "text-cyan-400"
                    : "text-slate-400 hover:text-white"
                }`}
              >

                {/* Navigation Number */}
                <span className="mr-2 text-[9px] text-slate-600">
                  0{index + 1}
                </span>

                {link.name}

                {/* Active Line */}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-px bg-cyan-400 transition duration-300 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />

              </Link>
            )

          })}

        </div>


        {/* System Status */}
        <div className="hidden items-center gap-2 lg:flex">

          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
            System Online
          </span>

        </div>


        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="border border-slate-700 px-3 py-2 font-mono text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>

      </div>


      {/* Mobile Navigation */}
      {menuOpen && (

        <div className="border-t border-cyan-500/20 bg-slate-950 px-6 py-5 md:hidden">

          <div className="flex flex-col">

            {navigationLinks.map((link, index) => {

              const isActive = location.pathname === link.path

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`border-b border-slate-800 py-4 font-mono text-sm uppercase tracking-wider transition ${
                    isActive
                      ? "text-cyan-400"
                      : "text-slate-400 hover:text-white"
                  }`}
                >

                  <span className="mr-3 text-[10px] text-slate-600">
                    0{index + 1}
                  </span>

                  {link.name}

                </Link>
              )

            })}

          </div>

          <div className="mt-5 flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-green-400" />

            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
              System Online
            </span>

          </div>

        </div>

      )}

    </nav>
  )
}

export default Navbar