import Header from '../../components/Header/Header';
import s from './HomeLayout.module.scss';
import MainNavigation from '../../components/Navigation/MainNavigation/MainNavigation';

const HomeLayout = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header>
        <MainNavigation />
      </Header>

      {children}

      
    </div>
  );
};

export default HomeLayout;
