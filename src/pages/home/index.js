import {
  Container,
  ContainerCategory,
  ContainerTitle,
  ContainerGames,
  Title,
  Line,
} from './styles';

import gameData from '../../core/utils/gameData';

import GameCard from '../../components/gameCard';

const Home = () => (
  <Container>
    <ContainerCategory>
      <ContainerTitle>
        <Title>DESTAQUES</Title>
        <Line />
      </ContainerTitle>

      <ContainerGames>
        {gameData.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </ContainerGames>
    </ContainerCategory>

    <ContainerCategory>
      <ContainerTitle>
        <Title>Mais Vendidos</Title>
        <Line />
      </ContainerTitle>

      <ContainerGames>
        {gameData.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </ContainerGames>
    </ContainerCategory>
  </Container>
);

export default Home;
