
import heroArtwork from "../../../assets/hero-background.png";
import "./HeroSection.css";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}

function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
        <img
          className="hero-artwork"
          src={heroArtwork}
          alt=""
          aria-hidden="true"
        />

        <div className="hero-copy">
          <p className="hero-eyebrow">
            Some secrets should
            <br />
            stay <span>buried.</span>
          </p>

          <h1 id="hero-title">
            Every smile
            <br />
            hides a <span>secret.</span>
          </h1>

          <p className="hero-description">
            In a city of lies and forgotten truths, one girl's
            silence became everyone's biggest mystery.
            Some secrets were never meant to be discovered.
          </p>

          <div className="hero-story-note">
            <span>01</span>
            <span className="hero-story-line" />
            <span>A mysterious past</span>
            <span className="hero-story-line" />
            <span>One dark secret</span>
          </div>

          <div className="hero-actions">
            <a className="hero-primary-link" href="#story">
              <span>Discover the Story</span>
              <ArrowIcon />
            </a>

            <a className="hero-trailer-link" href="#trailer">
              <span className="play-icon" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="m7.5 5.5 7 4.5-7 4.5v-9Z" />
                </svg>
              </span>

              <span>Watch Trailer</span>
            </a>
          </div>

          <ol className="hero-pagination" aria-label="Featured stories">
            <li className="hero-pagination-active" aria-current="true">
              01
            </li>
            <li>02</li>
            <li>03</li>
          </ol>
        </div>
    </section>
  );
}

export default HeroSection;
