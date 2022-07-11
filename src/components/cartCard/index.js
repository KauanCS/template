import PropTypes from 'prop-types';

import {
  Container,
  Image,
  Label,
  CloseIcon,
} from './styles';

const CartCard = (props) => {
  const { game, handleRemoveItem } = props;
  const {
    id,
    name,
    url,
    value,
  } = game;
  return (
    <Container>
      <Image src={url} />
      <Label>{name}</Label>
      <Label>{`R$${value}`}</Label>
      <CloseIcon
        type="crossInACircleFilled"
        color="white"
        onClick={() => handleRemoveItem(id)}
      />
    </Container>
  );
};

CartCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};

export default CartCard;
