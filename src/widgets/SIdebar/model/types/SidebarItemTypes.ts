import { FunctionComponent, SVGAttributes } from 'react';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import { RoutePath } from 'shared/config/AppRoutes/AppRoutes';

export interface SidebarItemTypes {
  path: string,
  text: string,
  Icon: FunctionComponent<SVGAttributes<SVGElement>>,
  authOnly?: boolean;
}

export const SidebarItemList: SidebarItemTypes[] = [
  {
    path: RoutePath.main,
    Icon: HomeIcon,
    text: 'Menu main',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'Menu about',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'Menu profile',
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    Icon: ArticleIcon,
    text: 'Menu articles',
    authOnly: true,
  },
];
