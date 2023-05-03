import { CSSProperties, memo, useMemo } from 'react';

import { classNames } from '@/shared/libs/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number,
}

export const Avatar = memo((props: AvatarProps) => {
  const {
    className,
    src,
    alt = '',
    size = 150,
  } = props;

  const sizeAvatar = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);
  return (
    <img
      className={classNames(cls.Avatar, {}, [className])}
      src={src}
      style={sizeAvatar}
      alt={alt}
    />
  );
});
