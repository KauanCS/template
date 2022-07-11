import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import PropTypes from 'prop-types';
import {
  Container,
  ContainerCategory,
  ContainerTitle,
  ContainerGames,
  Title,
  Line,
} from './styles';

import GameCard from '../../components/gameCard';
import gameData from '../../core/utils/gameData';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = ({ inputSearch, setListCart }) => {
  const [gameList, setGameList] = useState(gameData);

  const handleFilterList = () => {
    const newGameList = gameData.filter((value) => value.name.toLowerCase().includes(inputSearch.toLowerCase()));
    setGameList(newGameList);
  };

  useEffect(() => {
    handleFilterList();
  }, [inputSearch]);

  return (
    <Container>
      <ContainerCategory>
        <ContainerTitle>
          <Title>DESTAQUES</Title>
          <Line />
        </ContainerTitle>

        <ContainerGames>
          <Carousel
            responsive={responsive}
            swipeable
            draggable
            infinite
            keyBoardControl
            customTransition="all .5"
            transitionDuration={500}
            removeArrowOnDeviceType={['tablet', 'mobile']}
          >
            {gameList.map((game) => (
              <GameCard
                setListCart={setListCart}
                game={game}
                key={game.id}
              />
            ))}
          </Carousel>
        </ContainerGames>
      </ContainerCategory>

      <ContainerCategory>
        <ContainerTitle>
          <Title>Mais Vendidos</Title>
          <Line />
        </ContainerTitle>

        <ContainerGames>
          <Carousel
            responsive={responsive}
            swipeable
            draggable
            infinite
            keyBoardControl
            customTransition="all .5"
            transitionDuration={500}
            removeArrowOnDeviceType={['tablet', 'mobile']}
          >
            {gameList.map((game) => (
              <GameCard
                setListCart={setListCart}
                game={game}
                key={game.id}
              />
            ))}
          </Carousel>
        </ContainerGames>
      </ContainerCategory>
    </Container>
  );
};

Home.propTypes = {
  inputSearch: PropTypes.string.isRequired,
  setListCart: PropTypes.func.isRequired,
};

export default Home;
