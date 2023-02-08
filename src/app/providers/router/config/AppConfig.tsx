import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { type RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/AppRoutes/AppRoutes';

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
};
