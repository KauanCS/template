import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';

import {
  Container,
  ContainerHeader,
  InputSearch,
  IconArrow,
  ContainerItems,
} from './styles';

import Button from '../customButton';

const pages = {
  HOME: 'home',
  PROFILE: 'perfil',
  CART: 'carrinho',
};

const IS_MOBILE = window.innerWidth < 768;

const Sidebar = (props) => {
  const {
    sidebarWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    setInputSearch,
  } = props;

  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(pages.HOME);
  const navigate = useNavigate();

  useEffect(() => {
    if (location && location.pathname === '/carrinho') {
      setCurrentPage(pages.CART);
    }
  }, [location]);

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  const handleHomeClick = () => {
    if (IS_MOBILE) {
      handleCloseSidebar();
    }
    setCurrentPage(pages.HOME);
    navigate(`/${pages.HOME}`);
  };

  const handleProfileClick = () => {
    setCurrentPage(pages.PROFILE);
  };

  const handleCartClick = () => {
    setCurrentPage(pages.CART);
    navigate(`/${pages.CART}`);
  };

  return (
    <Container sidebarWidth={sidebarWidth} isSidebarOpen={isSidebarOpen}>
      <ContainerHeader>
        <IconArrow
          onClick={handleCloseSidebar}
          type="arrowLeft"
          size="l"
        />
      </ContainerHeader>

      <ContainerItems>
        <InputSearch
          placeholder="BUSCAR"
          onChange={(e) => setInputSearch(e.target.value)}
          isClearable
        />
        <Button
          isSelected={currentPage === pages.HOME}
          onClick={handleHomeClick}
          leftIcon="home"
          label="HOME"
        />
        <Button
          isSelected={currentPage === pages.CART}
          onClick={handleCartClick}
          leftIcon="package"
          label="CARRINHO"
        />
        <Button
          isSelected={currentPage === pages.PROFILE}
          onClick={handleProfileClick}
          leftIcon="user"
          label="PERFIL"
        />
      </ContainerItems>
    </Container>
  );
};

Sidebar.propTypes = {
  sidebarWidth: PropTypes.string.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
  setIsSidebarOpen: PropTypes.func.isRequired,
  setInputSearch: PropTypes.func.isRequired,
};

export default Sidebar;
