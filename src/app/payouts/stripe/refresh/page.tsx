'use client';

import { useEffect } from 'react';

export default function StripeConnectRefresh() {
  useEffect(() => {
    window.location.href = 'corneroom://payouts/stripe/refresh';
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <p>Returning to Corneroom…</p>
    </div>
  );
}
