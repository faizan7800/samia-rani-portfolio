import { Link } from 'react-router-dom';
import { routes } from '../../routes/RootRoutes';
import s from './Logo.module.scss';
import logo from "../../assets/logo.png"
import { useThemeContext } from '../../hooks/themeHook/themeHook';
import { useEffect, useState } from 'react';

const Logo = ({ className }) => {
  const {dark} = useThemeContext()

  console.log(dark)

  return (
    <div className={className}>
      <Link to={routes.Home} aria-label="site logo">
       {dark ? <h1 className={s.logoName}>SAMIA RANI</h1> : <img className={s.logoImage} src={logo} alt='Logo'/>}
      </Link>
    </div>
  );
};

export default Logo;
