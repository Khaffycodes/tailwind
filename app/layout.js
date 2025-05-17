'use client';
import './globals.css';

import Header from '../components/icons/header';

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={localStorage.getItem('darkMode') === 'true' ? 'dark' : 'light'}
    >
      <head />
      <body className="dark:bg-slate-950 dark:text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
