import s from './ServicesCard.module.scss';
import { useLocation } from 'react-router-dom';

const ProjectCard = ({ image, icon, title, description }) => {
  return (
    <li className={s.card}>
      <div className={s.cardWrapper}>
        <div className={s.cardBody}>
          <img src={image} alt="" className={s.cardImage} /> 
          <h3 className={s.title}>{title}</h3>
          {/* <p className={s.description}>{description?.length > 150 ? description.trim().slice(0,150) + "..." : description}</p> */}
          <p className={s.description}>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
