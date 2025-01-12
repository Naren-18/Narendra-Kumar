// import React from 'react';
// import { Moon, Sun } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';
// import { motion } from 'framer-motion';

// export function ThemeToggle() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <motion.button
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       onClick={toggleTheme}
//       className="fixed top-4 right-4 p-2 rounded-full bg-opacity-20 backdrop-blur-sm
//                  dark:bg-white/10 bg-black/10 hover:bg-opacity-30 transition-all
//                  border border-transparent hover:border-gray-300 dark:hover:border-gray-600"
//       aria-label="Toggle theme"
//     >
//       {theme === 'dark' ? (
//         <Sun className="w-6 h-6 text-yellow-400" />
//       ) : (
//         <Moon className="w-6 h-6 text-blue-600" />
//       )}
//     </motion.button>
//   );
// }