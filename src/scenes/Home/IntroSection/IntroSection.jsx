import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TbBrandFiverr } from "react-icons/tb";
import s from './IntroSection.module.scss';

const IntroSection = () => {

  
  const handleWhatsapp = ()=>{
    const url = `https://wa.me/+923356336535?text=${encodeURIComponent("Hello, Samia Rani. I would like to ask about your Latex Services.")}`;
    window.location.href = url;
  }
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
            Hello, I’m <b className={s.purple}>Samia Rani</b>, a passionate mathematician with a Master's degree in Mathematics and a specialization in Fluid Mechanics. I have successfully published research articles in internationally renowned journals, exploring advanced topics such as hybrid nanofluids and magnetohydrodynamics. My academic journey has deepened my expertise in computational mathematics and numerical analysis, laying a strong foundation for my future ambitions in research.
            </p>

            <p>
            Alongside my academic achievements, I’ve built a thriving career as a <b className={s.purple}>Freelancer</b>, completing over 50 projects on platforms like Fiverr. My expertise lies in converting handwritten notes, research articles, CVs, and books from Word, PDF, and image formats into professionally formatted LaTeX documents. Precision and detail are at the heart of my work, ensuring that each project is delivered to meet the highest academic and professional standards.
            </p>

            <p>
            Currently, I’m collaborating with the <b className={s.purple}>Institut Mathematik-Coaching Dübendorf, Schweiz</b> on their latest mathematics book, handling its LaTeX conversion. This project showcases my ability to work on complex mathematical texts, aligning formatting with rigorous academic guidelines.
            </p>
          </div>
        </div>
      </div>

      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            MY <span className={s.purple}> FUTURE GOALS </span>{' '}
          </h1>

          <div className={s.description}>
            <p>
            I am eager to expand my expertise both academically and professionally. On the academic front, I am looking forward to pursuing a <b className={s.purple}>PhD</b> in Mathematics, with the aim of contributing innovative research in applied mathematics and computational fluid dynamics. I am particularly passionate about solving complex problems in fluid mechanics and exploring new methodologies in nanofluid dynamics.
            </p>

            <p>
            Professionally, I aspire to further grow my <b className={s.purple}>freelancing career</b> by taking on more advanced projects involving LaTeX and technical writing for academic institutions and researchers worldwide. I aim to build long-term collaborations with universities, research organizations, and publishing houses. Additionally, I plan to continually enhance my skill set in technical documentation and content creation, ensuring that I remain at the forefront of the industry.
            </p>

          </div>
        </div>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          
          <li className={s.socialLink}>
            <a
             onClick={handleWhatsapp}
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="whatsapp"
            >
              <IoLogoWhatsapp />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="mailto:samiarani91@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="email"
            >
              <MdEmail />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.fiverr.com/samia_cooder"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="fiverr"
            >
              <TbBrandFiverr />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
