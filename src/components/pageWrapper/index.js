import { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../sidebar';
import Header from '../header';
import { Container, ContainerComponents } from './styles';

const IS_MOBILE = window.innerWidth < 768;

const SIDEBAR_WIDTH = IS_MOBILE ? '100%' : '330px';

const PageWrapper = ({ element: Component, ...remainingProps }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(!IS_MOBILE);
  const [inputSearch, setInputSearch] = useState('');

  return (
    <Container>
      <Sidebar
        sidebarWidth={SIDEBAR_WIDTH}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        setInputSearch={setInputSearch}
      />
      <ContainerComponents
        sidebarWidth={SIDEBAR_WIDTH}
        isSidebarOpen={isSidebarOpen}
      >
        <Header
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <Component inputSearch={inputSearch} {...remainingProps} />
      </ContainerComponents>
    </Container>
  );
};

PageWrapper.propTypes = {
  element: PropTypes.func.isRequired,
};

export default PageWrapper;
