'use client';
import './globals.css';

import Header from '../components/icons/header';

// import { useEffect, useState } from 'react';

// export default function RootLayout({ children }) {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const darkmode = localStorage.getItem('darkMode');
//     setDarkMode(darkmode === 'true');
//   }, []);

//   return (
//     <html lang="en">
//       <head />
//       <body className={darkMode ? 'dark bg-slate-950 text-white' : ''}>
//         <Header />
//         {children}
//       </body>
//     </html>
//   );
// }

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
