// global-error.js
'use client';

import { ErrorBoundary } from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default function AppWithErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        // Report to Sentry
        Sentry.captureException(error, { extra: info });
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
