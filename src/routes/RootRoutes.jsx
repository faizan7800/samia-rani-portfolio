import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Preloader from '../components/UIElements/Preloader/Preloader';
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';

export const routes = {
  Home: '/',
  About: '#about',
  Services: '#services',
  Projects: '#projects',
  Project: '/project/:id',
  Resume: '#resume',
};

const scenes = {
  Home: lazy(() => import('../scenes/Home/Home')),
  About: lazy(() => import('../scenes/About/About')),
  Projects: lazy(() => import('../scenes/Projects/Projects')),
  Resume: lazy(() => import('../scenes/Resume/Resume')),
  Services: lazy(()=> import('../scenes/Services/Services'))
};

function LazyScene({ name }) {
  const Scene = scenes[name];
  return (
    <Suspense fallback={<Preloader />}>
      <Scene />
    </Suspense>
  );
}

function RootRoutes() {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route
          path={routes.Home}
          element={
          <>
        <LazyScene name="Home" />
       <LazyScene name="About" />
       <LazyScene name="Services" />
       <LazyScene name="Projects" />
       <LazyScene name="Resume" />
          </>
          }
        />
        <Route
          /*Modal*/ path={routes.Project}
          element={<ModalProjectCard />}
        />
      </Routes>

      {background && (
        <Routes>
          <Route
            path={routes.Project}
            element={<ModalProjectCard />}
          />
        </Routes>
      )}
    </>
  );
}

export default RootRoutes;
