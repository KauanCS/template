import PropTypes from 'prop-types';
import { useState } from 'react';

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

  const [showInfo, setShowInfo] = useState(false);

  const {
    url,
    name,
    value,
  } = game;

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
        <Button size="s">DETALHES</Button>
      </ContainerButtons>
    </Container>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

export default GameCard;
