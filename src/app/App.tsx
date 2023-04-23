import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/SIdebar';
import { PageLoader } from '@/features/PageLoader';
import { getInitStatus, UserActions } from '@/entities/User';
import { AppRouter } from './providers/router';

const App = () => {
  const dispatch = useDispatch();

  const inited = useSelector(getInitStatus);
  useEffect(() => {
    dispatch(UserActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {})}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />

        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
