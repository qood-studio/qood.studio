'use client';

import { useState } from 'react';
import Loader from './Loader';

export default function LoaderRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const [done, setDone] = useState(false);

  return (
    <>
      {!done && <Loader onComplete={() => setDone(true)} />}
      {children}
    </>
  );
}
