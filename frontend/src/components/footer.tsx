import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  const footerClass =
    theme === 'theme1'
      ? 'bg-white text-gray-800'
      : theme === 'theme2'
      ? 'bg-gray-900 text-white'
      : 'bg-gradient-to-r from-pink-500 to-yellow-300 text-white';

  return (
    <footer
      className={`w-full text-center px-4 sm:px-6 py-3 sm:py-4 ${footerClass}`}
    >
      <p className="text-xs sm:text-sm">
        © 2025 Akanksha | All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
