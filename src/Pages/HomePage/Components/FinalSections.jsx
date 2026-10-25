import finalSecretImage from '../../../assets/final-secret.png'
import revealImage from '../../../assets/final-reveal.png'
import './FinalSections.css'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  )
}

function FinalSecretSection() {
  return (
    <section className="final-story-section" id="final-secret" aria-labelledby="final-secret-title">
      <div className="final-story-copy">
        <p className="final-story-eyebrow">The Final Secret</p>
        <h2 id="final-secret-title">Antim raqam, ant ka raaz</h2>
        <p>
          Kya Aarohi ek qaatil hai ya ek shikaar?
          <br />
          Ya phir kahani kuch aur hi kehti hai?
        </p>
        <p>
          Iss raaz ke peeche chhupa hai ek purana waada,
          dhokha, dard aur badla.
        </p>
        <p>
          Darwaza khul chuka hai... kya tum tayyar ho
          us sach ka saamna karne ke liye?
        </p>
        <a className="final-story-link" href="#final-reveal">
          <span>Unlock the Secret</span>
          <ArrowIcon />
        </a>
      </div>

      <div className="final-story-art">
        <img src={finalSecretImage} alt="A secret investigation room covered in maps, clues, and case documents." />
        <span className="final-story-art-title" aria-hidden="true">
          Truth
          <br />
          awaits
          <br />
          inside
        </span>
      </div>
    </section>
  )
}

function FinalRevealSection() {
  return (
    <section className="final-reveal-section" id="final-reveal" aria-labelledby="final-reveal-title">
      <div className="final-reveal-copy">
        <div className="final-reveal-text">
          <p className="final-story-eyebrow">The Final Reveal</p>
          <h2 id="final-reveal-title">Sach jo sabko badal dega</h2>
          <p>
            Har sawaal ka jawaab milega...
            <br />
            Lekin kya tum sach jhel paaoge?
          </p>
        </div>
        <a className="final-reveal-link" href="#final-reveal">
          <span>Reveal the Truth</span>
          <ArrowIcon />
        </a>
      </div>

      <div className="final-reveal-art">
        <img
          src={revealImage}
          alt="A woman faces a wall of case photographs connected by red strings."
        />
      </div>
    </section>
  )
}

function FinalSections() {
  return (
    <>
      <FinalSecretSection />
      <FinalRevealSection />
    </>
  )
}

export default FinalSections
