import { AiOutlineFundProjectionScreen } from '@react-icons/all-files/ai/AiOutlineFundProjectionScreen';
import { AiOutlineHome } from '@react-icons/all-files/ai/AiOutlineHome';
import { AiOutlineUser } from '@react-icons/all-files/ai/AiOutlineUser';
import { CgFileDocument } from '@react-icons/all-files/cg/CgFileDocument';
import { BsPersonWorkspace } from "react-icons/bs";
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { usePreload } from '../../../hooks/usePreload';
import { routes as r } from '../../../routes/RootRoutes';
import s from './NavLinks.module.scss';

const scenes = {
  Home: () => import('../../../scenes/Home/Home'),
  About: () => import('../../../scenes/About/About'),
  Services: () => import('../../../scenes/Services/Services'),
  Projects: () => import('../../../scenes/Projects/Projects'),
  Resume: () => import('../../../scenes/Resume/Resume'),
};

const icons = {
  Home: <AiOutlineHome />,
  About: <AiOutlineUser />,
  Services: <BsPersonWorkspace/>,
  Projects: <AiOutlineFundProjectionScreen />,
  Resume: <CgFileDocument />,
};

const Link = (props) => {
  const ref = useRef();
  usePreload(ref, props.scene);
  return (
    <NavLink ref={ref} to={props.to} end={props.end}>
      {props.icon || null}
      {props.name}
    </NavLink>
  );
};

const NavLinks = () => {
  return (
    <ul className={s.navBar}>
      {Object.entries(scenes).map(([name, scene], idx) => {
        return (
          <li key={idx}>
            <a
              href={r[name]}
            >{icons[name]} {name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
