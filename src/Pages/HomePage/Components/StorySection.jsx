import storyImage from '../../../assets/Secrets.png'
import './StorySection.css'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  )
}

function StorySection() {
  return (
    <section className="story-section" id="story" aria-labelledby="story-title">
      <div className="story-image-wrap">
        <img
          className="story-image"
          src={storyImage}
          alt="A candlelit notebook, a photograph, and a sealed letter reveal clues from Aarohi's story."
        />
      </div>

      <div className="story-content">
        <p className="story-eyebrow">The Story</p>
        <h2 id="story-title">Kahani ki shuruaat</h2>
        <p className="story-description">
          Aarohi Mehra... ek naam jo kabhi masoomiyat ka prateek tha.
          <br />
          Aaj wahi naam khauf aur khamoshi ka parichay ban chuka hai.
        </p>
        <p className="story-description">
          Ek chhote se shehar mein log gayab ho rahe hain. Har jagah sirf ek
          safed lifafa milta hai, aur usme likha hota hai wohi ek line...
        </p>

        <blockquote className="story-quote">
          <span className="story-quote-mark" aria-hidden="true">
            “
          </span>
          <p>Some secrets deserve to be buried forever.</p>
          <span className="story-quote-mark story-quote-mark--end" aria-hidden="true">
            ”
          </span>
        </blockquote>

        <a className="story-link" href="#case-files">
          <span>Explore the Story</span>
          <ArrowIcon />
        </a>
      </div>
    </section>
  )
}

export default StorySection
