import s from './TechSkills.module.scss';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <span>LaTeX Typesetting</span>
        {/* <span className={s.progress}>90%</span> */}
      </li>
      <li className={s.techIcon}>
      <span>Technical Writing</span>
      </li>
      <li className={s.techIcon}>
      <span>Mathematical Modeling</span>
      </li>
      <li className={s.techIcon}>
      <span>Research & Data Analysis</span>
      </li>
      <li className={s.techIcon}>
      <span>Numerical Methods</span>
      </li>
      <li className={s.techIcon}>
      <span>Freelancing</span>
      </li>
      <li className={s.techIcon}>
      <span>Collaboration</span>
      </li>
     
    </ul>
  );
};

export default TechSkills;
