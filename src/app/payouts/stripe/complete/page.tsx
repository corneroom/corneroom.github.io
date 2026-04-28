'use client';

import { useEffect } from 'react';

export default function StripeConnectComplete() {
  useEffect(() => {
    window.location.href = 'corneroom://payouts/stripe/complete';
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <p>Returning to Corneroom…</p>
    </div>
  );
}
