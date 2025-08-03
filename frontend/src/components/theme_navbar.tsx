import { useTheme } from '../contexts/ThemeContext';
import ThemeDropdown from './theme_dropdown';

const ThemeNavbar = () => {
  const { theme } = useTheme();

  const isKidsTheme = theme === 'theme3';
  const isDarkTheme = theme === 'theme2';

  const baseNavClass =
    theme === 'theme1'
      ? 'bg-white text-gray-800 border-b border-gray-200 px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4'
      : 'bg-gradient-to-r from-pink-500 to-yellow-300 text-purple-800 px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4';

  const linkClass = 'hover:underline py-1 text-sm sm:text-base';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={baseNavClass}>
      <div className="font-bold text-lg sm:text-xl">
        Multi-Theme Switcher
      </div>

      {!isKidsTheme && !isDarkTheme && (
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button onClick={() => scrollTo('home')} className={linkClass}>Home</button>
          <button onClick={() => scrollTo('about')} className={linkClass}>About</button>
          <button onClick={() => scrollTo('contact')} className={linkClass}>Contact</button>
        </div>
      )}

      <div className="mt-2 sm:mt-0">
        <ThemeDropdown />
      </div>
    </nav>
  );
};

export default ThemeNavbar;
