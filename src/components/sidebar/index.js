import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

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
};

const Sidebar = (props) => {
  const {
    sidebarWidth,
    isSidebarOpen,
    setIsSidebarOpen,
  } = props;

  const [currentPage, setCurrentPage] = useState(pages.HOME);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setInputValue(e.target.value);

  const handleCloseSidebar = () => setIsSidebarOpen(false);

  const handleHomeClick = () => {
    setCurrentPage(pages.HOME);
    navigate(`/${pages.HOME}`);
  };

  const handleProfileClick = () => {
    setCurrentPage(pages.PROFILE);
    navigate(`/${pages.PROFILE}`);
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
          value={inputValue}
          onChange={handleChange}
          isClearable
        />
        <Button
          isSelected={currentPage === pages.HOME}
          onClick={handleHomeClick}
          leftIcon="home"
          label="HOME"
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
  sidebarWidth: PropTypes.number.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
  setIsSidebarOpen: PropTypes.func.isRequired,
};

export default Sidebar;
