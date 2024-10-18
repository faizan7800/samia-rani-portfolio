import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TbBrandFiverr } from "react-icons/tb";
import s from './Footer.module.scss';

const Footer = () => {

  const handleWhatsapp = ()=>{
    const url = `https://wa.me/+923356336535?text=${encodeURIComponent("Hello, Samia Rani. I would like to ask about your Latex Services.")}`;
    window.location.href = url;
  }
    // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h1>Made with ❤️ in 2024 by Samia Rani</h1>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="mailto:samiarani91@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="email"
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
                aria-label="fiverr"
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
