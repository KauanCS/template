import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  Icon,
  Circle,
  Text,
} from './styles';

const ShopButton = ({ total }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/carrinho');
  };

  return (
    <Container onClick={handleNavigate}>
      <Icon type="package" size="l" />
      <Circle>
        <Text>{total}</Text>
      </Circle>
    </Container>
  );
};

ShopButton.propTypes = {
  total: PropTypes.number.isRequired,
};

export default ShopButton;
