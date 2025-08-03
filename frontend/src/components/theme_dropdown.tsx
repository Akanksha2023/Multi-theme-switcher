import { useTheme } from '../contexts/ThemeContext';

//Select dropdown for theme switching
// This component allows users to select a theme from a dropdown menu
// It uses the useTheme context to get the current theme and set a new theme

const ThemeDropdown = () => {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as any)}
      className="border rounded-md px-3 py-2 text-sm sm:text-base bg-white text-gray-800 dark:bg-gray-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
    >
      <option value="theme1">Theme 1</option>
      <option value="theme2">Theme 2</option>
      <option value="theme3">Theme 3</option>
    </select>
  );
};

export default ThemeDropdown;
