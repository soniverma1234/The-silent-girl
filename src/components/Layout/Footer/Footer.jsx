import footerLetter from '../../../assets/footer-letter.png'
import './Footer.css'

const exploreLinks = [
  { label: 'Home', href: '#home' },
  { label: 'The Story', href: '#story' },
  { label: 'Case Files', href: '#case-files' },
]

const mysteryLinks = [
  { label: 'The Final Secret', href: '#final-secret' },
  { label: 'Final Reveal', href: '#final-reveal' },
]

const resourceLinks = [
  { label: 'Timeline', href: '#story' },
  { label: 'Characters', href: '#story' },
  { label: 'Gallery', href: '#case-files' },
  { label: 'Clues', href: '#case-files' },
  { label: 'Secret Room', href: '#final-secret' },
]

const supportLinks = [
  { label: 'FAQs', href: '#final-secret' },
  { label: 'Contact Us', href: '#home' },
  { label: 'Report a Clue', href: '#case-files' },
  { label: 'Privacy Policy', href: '#home' },
  { label: 'Terms of Use', href: '#home' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <a className="footer-brand" href="#home" aria-label="The Silent Girl, back to home">
            <span className="footer-brand-kicker">THE</span>
            <span className="footer-brand-name">
              SILENT <span>GIRL</span>
            </span>
          </a>
          <p>
            Ye kahani hai khamoshi ki, raaz ki aur us sach ki jo sab kuch badal dega.
          </p>
          <div className="footer-socials" aria-label="Social media">
            <span aria-hidden="true">f</span>
            <span aria-hidden="true">x</span>
            <span aria-hidden="true">◎</span>
            <span aria-hidden="true">▶</span>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Explore">
          <h2>Explore</h2>
          <ul>
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-nav" aria-label="The mystery">
          <h2>The Mystery</h2>
          <ul>
            {mysteryLinks.map((link, index) => (
              <li key={`${link.href}-${index}`}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-nav footer-nav--extra" aria-label="Resources">
          <h2>Resources</h2>
          <ul>
            {resourceLinks.map((link) => (
              <li key={`${link.label}-${link.href}`}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-nav footer-nav--extra" aria-label="Support">
          <h2>Support</h2>
          <ul>
            {supportLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-letter">
          <img
            src={footerLetter}
            alt="A weathered, blood-marked letter sealed with a red wax stamp."
          />
          <p>
            Some secrets
            <br />
            deserve to be
            <br />
            <span>buried forever.</span>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} The Silent Girl. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
