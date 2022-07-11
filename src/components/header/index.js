import PropTypes from 'prop-types';

import {
  Container,
  ContainerSides,
  IconMenu,
} from './styles';

import Logo from '../logo';
import UserButton from '../userButton';
import ShopButton from '../shopButton';

const Header = (props) => {
  const {
    setIsSidebarOpen,
    listCart,
  } = props;

  const handleOpenSidebar = () => setIsSidebarOpen(true);

  return (
    <Container>
      <ContainerSides>
        <IconMenu type="menu" size="l" onClick={handleOpenSidebar} />
        <Logo />
      </ContainerSides>

      <ContainerSides>
        <ShopButton total={listCart.length} />
        <UserButton />
      </ContainerSides>
    </Container>
  );
};

Header.propTypes = {
  setIsSidebarOpen: PropTypes.func.isRequired,
  listCart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired,
};

export default Header;
