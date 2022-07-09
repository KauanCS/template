import '@elastic/eui/dist/eui_theme_light.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { ThemeProvider } from 'styled-components';

import { EuiProvider } from '@elastic/eui';
import createCache from '@emotion/cache';
import GlobalStyles from './styles/global-styles';

import Routes from './routes';
import theme from './styles/global';

const App = () => {
  const cache = createCache({
    key: 'template',
    container: document.querySelector('meta[name="emotion-styles"]'),
  });

  return (
    <EuiProvider colorMode="light" cache={cache}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </EuiProvider>
  );
};

export default App;
