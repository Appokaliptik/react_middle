import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/ui/Loader';
import { ButtonError } from 'widgets/pageError';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      {t('Main')}
      <p>{t('glavnaya-tekst-posle-h1')}</p>
      <p>{t('glavnaya2.part1')}</p>
      <p>{t('glavnaya2.part2')}</p>
      <Loader />
      <ButtonError />
    </div>
  );
};

export default MainPage;
