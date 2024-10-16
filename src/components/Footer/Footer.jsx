import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TbBrandFiverr } from "react-icons/tb";
import s from './Footer.module.scss';

const Footer = () => {

  const handleWhatsapp = ()=>{
    
  }
    // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h1>Made with ❤️ in 2024</h1>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="mailto:samiarani91@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <MdEmail />
              </a>
            </li>
            <li>
              <a
                onClick={handleWhatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="facebook"
              >
                <IoLogoWhatsapp />
              </a>
            </li>
            <li>
              <a
                href="https://www.fiverr.com/samia_cooder"
                target="_blank"
                rel="noreferrer"
                aria-label="TelegramPlane"
              >
                <TbBrandFiverr />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
