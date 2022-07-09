import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';

import {
  BackgroundDark,
  Container,
  ContainerButtons,
  Button,
  Image,
  Title,
  Price,
} from './styles';

const GameCard = (props) => {
  const {
    game,
  } = props;

  const {
    id,
    url,
    name,
    value,
  } = game;

  const navigate = useNavigate();

  const [showInfo, setShowInfo] = useState(false);

  const handleNavigate = useCallback(() => {
    navigate({
      pathname: '/details',
      search: createSearchParams({
        id,
      }).toString(),
    });
  }, [id]);

  return (
    <Container
      showInfo={showInfo}
      onMouseEnter={() => {
        setShowInfo(true);
      }}
      onMouseLeave={() => {
        setShowInfo(false);
      }}
    >
      <BackgroundDark showInfo={showInfo}>
        <Title>{name}</Title>
        <Price>{`R$${value}`}</Price>
      </BackgroundDark>
      <Image src={url} />
      <ContainerButtons showInfo={showInfo}>
        <Button size="s">ADD CART</Button>
        <Button size="s" onClick={handleNavigate}>DETALHES</Button>
      </ContainerButtons>
    </Container>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

export default GameCard;
