import { useTheme } from '../contexts/ThemeContext';

const ThemeDropdown = () => {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as any)}
      className={`
        px-3 py-2 text-sm sm:text-base rounded-md border transition-all duration-200
        focus:outline-none focus:ring-2 shadow-sm
        ${
          theme === 'theme1'
            ? 'bg-white text-gray-800 border-gray-300 focus:ring-blue-500 shadow-md hover:shadow-lg'
            : theme === 'theme2'
            ? 'bg-gray-800 text-white border-gray-700 focus:ring-purple-500'
            : 'bg-gradient-to-r from-yellow-300 to-pink-400 text-purple-900 border-pink-400 focus:ring-pink-500'
        }
      `}
    >
      <option value="theme1">Theme 1</option>
      <option value="theme2">Theme 2</option>
      <option value="theme3">Theme 3</option>
    </select>
  );
};

export default ThemeDropdown;

// This component provides a dropdown to switch between themes
// It uses the ThemeContext to get the current theme and a function to change it
// The styles of the dropdown adapt based on the selected theme
// This allows users to easily switch themes from anywhere in the app