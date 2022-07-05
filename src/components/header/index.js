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
  } = props;

  const handleOpenSidebar = () => setIsSidebarOpen(true);

  return (
    <Container>
      <ContainerSides>
        <IconMenu type="menu" size="l" onClick={handleOpenSidebar} />
        <Logo />
      </ContainerSides>

      <ContainerSides>
        <ShopButton />
        <UserButton />
      </ContainerSides>
    </Container>
  );
};

Header.propTypes = {
  setIsSidebarOpen: PropTypes.func.isRequired,
};

export default Header;
