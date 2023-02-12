import { PageLoader } from 'features/PageLoader';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '../config/AppConfig';

export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routerConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))}
      </Routes>
    </Suspense>
  );
}
