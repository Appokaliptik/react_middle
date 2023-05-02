import { classNames } from '@/shared/libs/classNames/classNames';
import { Loader } from '@/shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';
// eslint-disable-next-line appo-fsd-plugin/layer-imports
import { Page } from '@/widgets/Page';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <Page className={classNames(cls.PageLoader, {}, [className])}>
    <Loader />
  </Page>
);
