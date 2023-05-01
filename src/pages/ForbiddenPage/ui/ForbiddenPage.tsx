import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ForbiddenPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page>
      {t('No access')}
    </Page>
  );
};

export default ForbiddenPage;
