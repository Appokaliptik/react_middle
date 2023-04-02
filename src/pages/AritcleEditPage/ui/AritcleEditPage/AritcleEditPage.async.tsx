import { lazy } from 'react';

export const AritcleEditPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-expect-error
  setTimeout(() => { resolve(import('./AritcleEditPage')); }, 400);
}));
