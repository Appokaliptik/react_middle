import { classNames } from 'shared/libs/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Page } from 'shared/ui/Page/Page';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <Page className={classNames(cls.PageLoader, {}, [className])}>
    <Loader />
  </Page>
);
