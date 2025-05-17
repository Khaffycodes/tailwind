'use client';

import { useState, useEffect } from 'react';
import { Sun } from './sun';
import { Moon } from './moon';

export default function Header() {
  const size = '24px';
  const [darkMode, setDarkMode] = useState(false);

  const switchMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === null) {
      setDarkMode(false); // default mode
    } else {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('darkMode', 'true');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('darkMode', 'false');
      document.documentElement.classList.remove('dark');
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

// import { Moon } from './moon';
// import { Sun } from './sun';

// export default function Header() {
//   const size = '24px';
//   const [darkMode, setDarkMode] = useState(false);

//   const switchMode = () => {
//     setDarkMode(!darkmode);
//   };

//   useEffect(() => {
//     if (darkMode) {
//       localStorage.setItem('darkMode', 'true');
//       window.document.documentElement.classList.add('dark');
//     } else if (darkMode === false) {
//       localStorage.setItem('darkMode', 'false');
//       window.document.documentElement.classList.remove('dark');
//     } else {
//       setDarkMode(localStorage.getItem('darkMode') === 'true');
//     }
//   }, [darkMode]);

//   return (
//     <header className="flex items-center justify-end w-full p-4">
//       <div
//         className="transition cursor-pointer hover:text-blue-600"
//         onClick={switchMode}
//       >
//         {!darkMode ? (
//           <Moon width={size} height={size} />
//         ) : (
//           <Sun width={size} height={size} />
//         )}
//       </div>
//     </header>
//   );
// }
