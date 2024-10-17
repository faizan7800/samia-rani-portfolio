import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        <span className={s.purple}>Why Choose Me?</span>
        <br />
        <ul style={{ marginLeft: 14 }}>
        <li className={s.aboutActivity}>
          - Over 2 years of experience in delivering top-notch LaTeX conversion services.
        </li>
        <li className={s.aboutActivity}>
          - Successfully completed over 50 projects, ranging from research articles to full-length books.
        </li>
        <li className={s.aboutActivity}>
          - Proven track record of published research in high-impact journals.
        </li>
        <li className={s.aboutActivity}>
          - Collaboration with leading international institutes, such as the Institut Mathematik-Coaching in Switzerland.
        </li>
      </ul>
      </p>

<p>
<span className={s.purple}>What I Offer?</span>
      <ul style={{ marginLeft: 14 }}>
        <li className={s.aboutActivity}>
          - LaTeX Document Conversion
        </li>
        <li className={s.aboutActivity}>
          - Research Support
        </li>
        <li className={s.aboutActivity}>
          - Academic Collaboration
        </li>
      </ul>
    </p>
    </div>
  );
};

export default AboutTextCard;
