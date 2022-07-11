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
    setListCart,
  } = props;

  const {
    id,
    url,
    name,
    value,
  } = game;

  const navigate = useNavigate();

  const [showInfo, setShowInfo] = useState(false);

  const handleDetailsNavigate = useCallback(() => {
    navigate({
      pathname: '/details',
      search: createSearchParams({
        id,
      }).toString(),
    });
  }, [id]);

  const handleCartNavigate = () => {
    setListCart((arr) => [...arr, game]);
    navigate('/carrinho');
  };

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
        <Button size="s" onClick={handleCartNavigate}>ADD CART</Button>
        <Button size="s" onClick={handleDetailsNavigate}>DETALHES</Button>
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
  setListCart: PropTypes.func.isRequired,
};

export default GameCard;
