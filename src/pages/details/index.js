import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import gameData from '../../core/utils/gameData';

import {
  Button,
  Container,
  ContainerImage,
  ContainerHeader,
  ContainerContent,
  ContainerLeft,
  ContainerRight,
  ComponentItem,
  ContainerPath,
  ItemText,
  Title,
  Image,
  LabelPath,
  LabelGame,
  Line,
  ItemTitle,
} from './styles';

const Details = () => {
  const [searchParams] = useSearchParams();
  const [gameInfo, setGameInfo] = useState({});
  useEffect(() => {
    const id = searchParams.get('id');
    const currentGame = gameData.find((game) => game.id === id);
    setGameInfo(currentGame);
  }, []);

  return (
    <Container>
      <ContainerImage>
        <Title>{gameInfo.name}</Title>
        <Image src={gameInfo.url} />
      </ContainerImage>

      <ContainerHeader>
        <ContainerPath>
          <LabelPath>Home /</LabelPath>
          <LabelPath>{`${gameInfo.category} /`}</LabelPath>
          <LabelGame>{gameInfo.name}</LabelGame>
        </ContainerPath>
        <Line />
      </ContainerHeader>

      <ContainerContent>
        <ContainerLeft>
          <ComponentItem big>
            <ItemTitle big>DESCRIÇÃO:</ItemTitle>
            <ItemText>
              {gameInfo.description}
            </ItemText>
          </ComponentItem>
        </ContainerLeft>

        <ContainerRight>
          <ComponentItem>
            <ItemTitle>TIPO:</ItemTitle>
            <ItemText>
              {gameInfo.category}
            </ItemText>
          </ComponentItem>

          <ComponentItem>
            <ItemTitle>VALOR:</ItemTitle>
            <ItemText>
              {`R$ ${gameInfo.value}`}
            </ItemText>
          </ComponentItem>

          <Button>ADICIONAR AO CARRINHO</Button>
          <Button>COMPRAR</Button>
        </ContainerRight>
      </ContainerContent>
    </Container>
  );
};

export default Details;
