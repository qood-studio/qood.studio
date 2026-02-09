'use client';

import { useEffect, useState } from 'react';

export default function ClockComponent({ initialTime }: { initialTime: string }) {
  const [currentTime, setCurrentTime] = useState(new Date(initialTime));
  const [showColon, setShowColon] = useState(true);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
      setShowColon(prev => !prev);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const locale =
    typeof navigator !== 'undefined'
      ? navigator.language
      : 'en-US';

  const dateString = formatDateWithDots(currentTime, locale);

  const hours = currentTime
    .getHours()
    .toString()
    .padStart(2, '0');

  const minutes = currentTime
    .getMinutes()
    .toString()
    .padStart(2, '0');

  const seconds = currentTime
    .getSeconds()
    .toString()
    .padStart(2, '0');

  return (
    <div className="flex flex-col font-bold items-center justify-center text-(--QOOD_WHITE) -rotate-90 font-mono text-2xl">
      <span className="text-nowrap">{dateString}</span>
      <span className="text-nowrap tracking-widest">
        {hours}
        <span className={showColon ? 'opacity-100' : 'opacity-0'}>
          :
        </span>
        {minutes}
        <span className={showColon ? 'opacity-100' : 'opacity-0'}>
          :
        </span>
        {seconds}
      </span>
    </div>
  );
}

/* ---------------- helpers ---------------- */

function formatDateWithDots(date: Date, locale: string) {
  const parts = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);

  const values: Record<string, string> = {};
  parts.forEach(p => {
    if (p.type !== 'literal') values[p.type] = p.value;
  });

  const order = parts
    .filter(p => p.type !== 'literal')
    .map(p => p.type);

  return order.map(type => values[type]).join('.');
}
