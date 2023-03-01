import { memo } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
// import { useTranslation } from 'react-i18next';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}
interface TextProps {
  className?: string;
  title?: string,
  text?: string,
  theme?: TextTheme
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
  } = props;
  // const { t } = useTranslation();
  return (
    <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
    </div>
  );
});
