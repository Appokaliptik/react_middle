import { classNames } from 'shared/libs/classNames/classNames';
import { memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg } = props;
  return (
    <Svg className={classNames(cls.Icon, {}, [className])} />
  );
});
