import { LazyLoadImage } from 'react-lazy-load-image-component';
import handIcon from '../../../assets/hand.png';
import homeMainIcon from '../../../assets/main-img.png';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import s from './MainSection.module.scss';

const MainSection = () => {
  return (
    <section className={s.content} id='/'>
      <div className={s.header}>
        <div className={s.greetingContainer}>
          <h2 className={s.title}>
            Greetings!
          </h2>
          <img 
            src={handIcon} 
            className={s.handIcon} 
          />
        </div>

        <h1 className={s.mainTitle}>
          I'M
          <strong className={s.mainName}> SAMIA RANI</strong>
        </h1>

        <div className={s.typewriter}>
          <Typewriter
            strings={[
              'Applied Mathematician',
              'Latex Specialist',
            ]}
            wrapperClassName={s.typewriterInner}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <div className={s.spacer} />

      <LazyLoadImage
        className={s.spacerImage}
        alt="home-img"
        effect="blur"
        src={homeMainIcon}
        wrapperClassName={s.homeMainIcon}
        width="500"
        height="400"
      />
    </section>
  );
};

export default MainSection;
