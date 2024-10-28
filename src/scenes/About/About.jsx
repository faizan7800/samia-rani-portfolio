import aboutPromoImg from '../../assets/atwork.svg';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './About.module.scss';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import TechSkills from './TechSkills/TechSkills';


const About = () => {
  return (
    <BaseLayout>
      <div className={s.content} id='about'>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
            Hello,  I’m <b className={s.purple}>Samia Rani</b>, a passionate mathematician with a Master's in Mathematics and a focus on Fluid Mechanics. I’ve published research on advanced topics like nanofluids, hybrid nanofluids and magnetohydrodynamics. Alongside my academic achievements, I’ve built a thriving career as a Freelancer, completing over 50 projects on platforms like Fiverr. My expertise lies in converting handwritten notes, research articles, CVs, and books from Word, PDF, and image formats into professionally formatted LaTeX documents. Precision and detail are at the heart of my work, ensuring that each project is delivered to meet the highest academic and professional standards.
            </p>
          </div>
        </div>
      </div>

        <h2 className={s.skills}>
          My <b className={s.purple}>Skills</b>
        </h2>
        <TechSkills />
      </div>
    </BaseLayout>
  );
};

export default About;
