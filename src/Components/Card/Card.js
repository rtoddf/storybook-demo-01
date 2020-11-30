import React from 'react';
import PropTypes from 'prop-types';
import { CardOutline } from './styles';

const text = 'Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet enim quis augue sodales, porta fringilla leo mollis. Duis ornare ac elit non feugiat. Ut id mattis mi, id efficitur nisl.'

const Card = ({ backgroundColor, color, fontFamily, ...props }) => {
  return (
    <CardOutline color={ color } backgroundColor={ backgroundColor } fontFamily={fontFamily}>{text}</CardOutline>
  );
}

Card.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * What text color to use
   */
  color: PropTypes.string,
  /**
   * What font family  to use
   */
  fontFamily: PropTypes.string,
  /**
   * How large should the button be?
   */
//   size: PropTypes.oneOf(['small', 'large']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Card.defaultProps = {
  backgroundColor: null,
  color: null,
  fontFamily: null,
  primary: false,
  onClick: undefined,
};
  
export default Card;