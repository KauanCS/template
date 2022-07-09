import { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../sidebar';
import Header from '../header';
import { Container, ContainerComponents } from './styles';

const SIDEBAR_WIDTH = 330;

const PageWrapper = ({ element: Component, ...remainingProps }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <Container>
      <Sidebar
        sidebarWidth={SIDEBAR_WIDTH}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <ContainerComponents
        sidebarWidth={SIDEBAR_WIDTH}
        isSidebarOpen={isSidebarOpen}
      >
        <Header
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <Component {...remainingProps} />
      </ContainerComponents>
    </Container>
  );
};

PageWrapper.propTypes = {
  element: PropTypes.func.isRequired,
};

export default PageWrapper;
