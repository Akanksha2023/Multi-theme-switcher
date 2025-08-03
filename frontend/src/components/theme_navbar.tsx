import { useTheme } from '../contexts/ThemeContext';
import ThemeDropdown from './theme_dropdown';

const ThemeNavbar = () => {
  const { theme } = useTheme();

  const isSidebar = theme === 'theme2';
  const isKidsTheme = theme === 'theme3';

  const baseNavClass = isSidebar
    ? 'bg-gray-900 text-white h-screen w-64 px-4 py-6 fixed top-0 left-0 flex flex-col justify-start'
    : theme === 'theme1'
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
        {isSidebar ? 'App Name' : 'Multi-Theme Switcher'}
      </div>

      {/* Render nav links only if not Theme 3 */}
      {!isKidsTheme && (
        <div
          className={
            isSidebar
              ? 'flex flex-col gap-3 mt-4 sm:mt-6'
              : 'flex flex-col sm:flex-row items-center gap-4'
          }
        >
          <button onClick={() => scrollTo('home')} className={linkClass}>Home</button>
          <button onClick={() => scrollTo('about')} className={linkClass}>About</button>
          <button onClick={() => scrollTo('contact')} className={linkClass}>Contact</button>
        </div>
      )}

      <div className={isSidebar ? 'mt-auto pt-4' : 'mt-2 sm:mt-0'}>
        <ThemeDropdown />
      </div>
    </nav>
  );
};

export default ThemeNavbar;
