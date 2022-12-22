import GlobalStyles from './pages/styles/GobalStyles';
import { ThemeProvider } from 'styled-components';
import { Layout } from './components/Layout';

import dark from './pages/styles/theme/dark';

import light from './pages/styles/theme/light';

function Root () {
  return(
    <ThemeProvider theme={dark}>
      <GlobalStyles/>
      <Layout/>
    </ThemeProvider>
  );
};

export default Root;