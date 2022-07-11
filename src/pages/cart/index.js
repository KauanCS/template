import PropTypes from 'prop-types';
import {
  Container,
  ContainerItems,
  ContainerEmpty,
  Header,
  Title,
} from './styles';

import Card from '../../components/cartCard';

const EmptyList = () => (
  <ContainerEmpty>
    <Title>Não há produtos no carrinho</Title>
  </ContainerEmpty>
);

const Cart = ({ setListCart, listCart }) => {
  const handleRemoveItem = (id) => {
    const idx = listCart.findIndex((game) => game.id === id);
    const filteredArray = listCart.filter((item, i) => i !== idx);
    setListCart(filteredArray);
  };

  return (
    <Container>
      <Header>
        <Title>CARRINHO</Title>
      </Header>
      <ContainerItems>
        {listCart.length > 0 ? listCart.map((game, i) => (
          <Card
            handleRemoveItem={handleRemoveItem}
            game={game}
            // eslint-disable-next-line react/no-array-index-key
            key={game.id + i}
          />
        )) : (
          <EmptyList />
        )}
      </ContainerItems>
    </Container>
  );
};

Cart.propTypes = {
  setListCart: PropTypes.func.isRequired,
  listCart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired,
};

export default Cart;
