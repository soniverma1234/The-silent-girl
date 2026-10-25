import case1Image from '../../../assets/case1.png'
import case2Image from '../../../assets/case2.png'
import case3Image from '../../../assets/case3.png'
import case4Image from '../../../assets/case4.png'
import './CaseFilesSection.css'

const caseFiles = [
  {
    number: '01',
    title: 'The Missing Witness',
    detail: 'Woh raat jab sab kuch badal gaya. Ek gawah jo hamesha ke liye gayab ho gaya.',
    image: case1Image,
    alt: 'A lone figure stands beneath a streetlight in a dark, empty street.',
  },
  {
    number: '02',
    title: 'The White Envelope',
    detail: 'Har ghar ke bahar ek safed lifafa. Andar bas ek khaufnaak sach.',
    image: case2Image,
    alt: 'A sealed envelope stained with dark red marks.',
  },
  {
    number: '03',
    title: 'The Last Message',
    detail: 'Ek coding ki hui chitthi jo police bhi nahi samajh payi.',
    image: case3Image,
    alt: 'An aged handwritten note pinned against a dark wall.',
  },
  {
    number: '04',
    title: 'The Vanishing Night',
    detail: 'Ek purani raat... aur subah tak sab nishaan mita diye gaye.',
    image: case4Image,
    alt: 'A gothic mansion stands beneath a full moon.',
  },
]

function CaseFilesSection() {
  return (
    <section className="case-files-section" id="case-files" aria-labelledby="case-files-title">
      <div className="case-files-heading">
        <div>
          <p className="case-files-eyebrow">Case files — unsolved mysteries</p>
          <h2 id="case-files-title">Woh kahaniyan jo abhi adhuri hain</h2>
        </div>
        <a className="case-files-all-link" href="#final-secret">
          <span>View all cases</span>
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
            <path d="M3.5 10h12m-5-5 5 5-5 5" />
          </svg>
        </a>
      </div>

      <div className="case-files-grid">
        {caseFiles.map((caseFile) => (
          <article className="case-file-card" key={caseFile.number}>
            <div className="case-file-image-wrap">
              <img className="case-file-image" src={caseFile.image} alt={caseFile.alt} />
              <span className="case-file-evidence">Evidence</span>
            </div>
            <div className="case-file-copy">
              <p className="case-file-number">Case {caseFile.number}</p>
              <h3>{caseFile.title}</h3>
              <p className="case-file-detail">{caseFile.detail}</p>
              <a className="case-file-link" href="#final-secret">
                <span>View case</span>
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                  <path d="M3.5 10h12m-5-5 5 5-5 5" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CaseFilesSection
