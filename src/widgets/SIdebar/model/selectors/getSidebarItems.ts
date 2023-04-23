import { createSelector } from '@reduxjs/toolkit';
import HomeIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { RoutePath } from '@/shared/config/AppRoutes/AppRoutes';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemTypes } from '../types/SidebarItemTypes';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemList: SidebarItemTypes[] = [
    {
      path: RoutePath.main,
      Icon: HomeIcon,
      text: 'Menu main',
    },
    {
      path: RoutePath.about,
      Icon: AboutIcon,
      text: 'Menu about',
    }];
  if (userData) {
    sidebarItemList.push(
      {
        path: RoutePath.profile + userData.id,
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
    );
  }
  return sidebarItemList;
});
