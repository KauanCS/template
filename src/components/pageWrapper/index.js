import { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../sidebar';
import Header from '../header';
import { Container, ContainerComponents } from './styles';
import gameData from '../../core/utils/gameData';

const IS_MOBILE = window.innerWidth < 768;

const SIDEBAR_WIDTH = IS_MOBILE ? '100%' : '330px';

const PageWrapper = ({ element: Component, ...remainingProps }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(!IS_MOBILE);
  const [gameList, setGameList] = useState(gameData);

  const handleFilterList = (searchValue) => {
    const newGameList = gameData.filter((value) => value.name.toLowerCase().includes(searchValue.toLowerCase()));
    setGameList(newGameList);
  };

  return (
    <Container>
      <Sidebar
        sidebarWidth={SIDEBAR_WIDTH}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        handleFilterList={handleFilterList}
      />
      <ContainerComponents
        sidebarWidth={SIDEBAR_WIDTH}
        isSidebarOpen={isSidebarOpen}
      >
        <Header
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <Component gameList={gameList} {...remainingProps} />
      </ContainerComponents>
    </Container>
  );
};

PageWrapper.propTypes = {
  element: PropTypes.func.isRequired,
};

export default PageWrapper;
