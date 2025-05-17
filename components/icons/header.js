'use client';

import { useEffect, useState } from 'react';
import { Moon } from './icons/moon';
import { Sun } from './icons/sun';

export default function header() {
  const size = '24px';
  const [darkMode, setDarkMode] =
    (useState < boolean) | (undefined > undefined);

  const switchMode = () => {
    setDarkMode(!darkmode);
  };

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('darkMode', 'true');
      window.document.documentElement.classList.add('dark');
    } else if (darkMode === false) {
      localStorage.setItem('darkMode', 'false');
      window.document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="flex items-center justify-end w-full p-4">
      <div
        className="transition cursor-pointer hover:text-blue-600"
        onClick={switchMode}
      >
        {!darkMode ? (
          <Moon width={size} height={size} />
        ) : (
          <Sun width={size} height={size} />
        )}
      </div>
    </header>
  );
}
