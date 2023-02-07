import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'shared/config/i18n/i18';
import { classNames } from 'shared/libs/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwithcer.module.scss'

interface LangSwithcerProps {
  className?: string;
}
enum Lang {
  RU = 'ru',
  EN = 'en'
}

export const LangSwithcer = ({className}: LangSwithcerProps) => {
  const [lang, setLang] = useState('ru')
  const {t} = useTranslation()
  
  function onToggle(){
    i18n.changeLanguage(i18n.language === Lang.RU ? Lang.EN : Lang.RU);
  }
  return (
    <Button 
    className={classNames(cls.LangSwithcer, {}, [className])}
    theme={ThemeButton.CLEAR}
      onClick={onToggle}
    >
      {t('Язык')}
    </Button>
  );
};