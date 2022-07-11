import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams, useNavigate } from 'react-router-dom';

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
  Line,
  ItemTitle,
} from './styles';

const Details = ({ setListCart }) => {
  const [searchParams] = useSearchParams();
  const [gameInfo, setGameInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const id = searchParams.get('id');
    const currentGame = gameData.find((game) => game.id === id);
    setGameInfo(currentGame);
  }, []);

  const handleAddToCart = useCallback(() => {
    setListCart((list) => [...list, gameInfo]);
    navigate('/carrinho');
  }, [gameInfo]);

  return (
    <Container>
      <ContainerImage>
        <Title>{gameInfo.name}</Title>
        <Image src={gameInfo.url} />
      </ContainerImage>

      <ContainerHeader>
        <ContainerPath>
          <LabelPath>
            {`Home / ${gameInfo.category} /`}
          </LabelPath>
          <LabelPath accent>{gameInfo.name}</LabelPath>
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

          <Button onClick={handleAddToCart}>ADICIONAR AO CARRINHO</Button>
          <Button>COMPRAR</Button>
        </ContainerRight>
      </ContainerContent>
    </Container>
  );
};

Details.propTypes = {
  setListCart: PropTypes.func.isRequired,
};
export default Details;
