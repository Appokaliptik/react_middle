import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18ForTests from 'shared/config/i18n/i18ForTests';

export interface optionRouter {
  route?: string
}

export function renderComponent(component: ReactNode, option: optionRouter = {}) {
  const { route = '/' } = option;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18ForTests}>
        {component}
      </I18nextProvider>
    </MemoryRouter>,
  );
}
