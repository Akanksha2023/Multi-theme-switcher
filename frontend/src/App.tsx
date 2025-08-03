import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext';

import Theme1Content from './components/Theme1Context';
import Theme2Content from './components/Theme2/Theme2Content';
import Theme3Content from './components/Theme3Content';
import ThemeNavbar from './components/theme_navbar';
import Footer from './components/footer';

const App = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect to correct theme URL when theme changes
  useEffect(() => {
    if (theme === 'theme1' && location.pathname.startsWith('/theme2')) {
      navigate('/', { replace: true });
    } else if (theme === 'theme2' && !location.pathname.startsWith('/theme2')) {
      navigate('/theme2/home', { replace: true });
    } else if (theme === 'theme3' && location.pathname !== '/theme3') {
      navigate('/theme3', { replace: true });
    }
  }, [theme]);

  return (
    <>
      {/* Show ThemeNavbar only for theme1 and theme3 */}
      {theme !== 'theme2' && <ThemeNavbar />}

      {/* Render appropriate theme content */}
      {theme === 'theme1' && <Theme1Content />}
      {theme === 'theme2' && <Theme2Content />}
      {theme === 'theme3' && <Theme3Content />}

      <Footer />
    </>
  );
};

export default App;
