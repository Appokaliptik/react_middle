import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      {t('Main')}
      <p>{t('glavnaya-tekst-posle-h1')}</p>
      <p>{t('glavnaya2.part1')}</p>
      <p>{t('glavnaya2.part2')}</p>
    </div>
  );
};

export default MainPage;
