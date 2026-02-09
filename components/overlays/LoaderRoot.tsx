'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Preloader from '../../components/Preloader/index';
import { usePathname } from 'next/navigation';
import { titlesByPathname } from './pathTitles';

export default function LoaderRoot({
  children,
}: {
  children: React.ReactNode;
}) {

  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  let title = titlesByPathname[pathname.replace('/', '')];

  useEffect(() => {
    setIsLoading(true);
  }, [pathname]);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, title ? 1000 : 2000)
      }
    )()
  }, [])

  return (
    <>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader title={title} />}
      </AnimatePresence>
      {children}
    </>
  );
}
