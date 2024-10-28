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
