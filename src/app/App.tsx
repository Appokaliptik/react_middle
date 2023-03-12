import { classNames } from 'shared/libs/classNames/classNames';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/SIdebar';
import { Suspense, useEffect } from 'react';
import { PageLoader } from 'features/PageLoader';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuthStatus, UserActions } from 'entities/User';
import { AppRouter } from './providers/router';

const App = () => {
  const dispatch = useDispatch();

  const inited = useSelector(getIsAuthStatus);
  useEffect(() => {
    dispatch(UserActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {})}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />

        <div className="content-page">
          <Sidebar />
          <div className="wrapper-page">
            {inited && <AppRouter />}
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
