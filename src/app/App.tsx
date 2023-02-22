import { classNames } from 'shared/libs/classNames/classNames';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/SIdebar';
import { Suspense } from 'react';
import { PageLoader } from 'features/PageLoader';
import { AppRouter } from './providers/router';

const App = () => (
  <div className={classNames('app', {})}>
    <Suspense fallback={<PageLoader />}>
      <Navbar />

      <div className="content-page">
        <Sidebar />
        <div className="wrapper-page">
          <AppRouter />
        </div>
      </div>
    </Suspense>
  </div>
);

export default App;
