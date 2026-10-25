import { useState } from 'react'
import './Navbar.css'

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'The Story', href: '#story' },
  { label: 'Case Files', href: '#case-files' },
  { label: 'The Final Secret', href: '#final-secret' },
  { label: 'Final Reveal', href: '#final-reveal' },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  )
}

function MenuIcon({ isOpen }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      {isOpen ? (
        <path d="m6 6 12 12M18 6 6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  )
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header" id="home">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="The Silent Girl home">
          <span className="brand-kicker">THE</span>
          <span className="brand-name">
            SILENT <span>GIRL</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <MenuIcon isOpen={isMenuOpen} />
        </button>

        <div
          className={`nav-content${isMenuOpen ? ' nav-content--open' : ''}`}
          id="primary-navigation"
        >
          <ul className="nav-links">
            {navigationLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  className={index === 0 ? 'nav-link nav-link--active' : 'nav-link'}
                  href={link.href}
                  aria-current={index === 0 ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a className="truth-link" href="#final-reveal" onClick={closeMenu}>
            <span>Enter the Truth</span>
            <ArrowIcon />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
