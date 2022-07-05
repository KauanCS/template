import PropTypes from 'prop-types';

import {
  Container,
  Icon,
  Text,
} from './styles';

const CustomButton = (props) => {
  const {
    onClick,
    label,
    leftIcon,
    rightIcon,
    isSelected,
  } = props;
  return (
    <Container onClick={onClick}>
      <Icon type={leftIcon} size="l" selected={isSelected} />
      <Text selected={isSelected}>{label}</Text>
      <Icon type={rightIcon} size="l" selected={isSelected} />
    </Container>
  );
};

CustomButton.defaultProps = {
  rightIcon: 'arrowRight',
};

CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  leftIcon: PropTypes.string.isRequired,
  rightIcon: PropTypes.string,
};

export default CustomButton;
