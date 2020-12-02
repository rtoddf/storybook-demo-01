import React from 'react';
import PropTypes from 'prop-types';
import { CardOutline } from './styles';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam ligula vitae mattis imperdiet. Proin feugiat vel risus lacinia tincidunt. Morbi malesuada blandit ante vel consequat. In hac habitasse platea dictumst. Ut pretium finibus erat, vitae posuere erat suscipit ut. Maecenas at enim at lorem ornare dignissim. Aliquam interdum tincidunt faucibus. Morbi eu diam maximus, elementum turpis nec, efficitur ligula. Sed et maximus massa.'

const Card = ({ backgroundColor, color, fontFamily, fontSize, boxShadow, textAlign, ...props }) => {
  return (
    <CardOutline color={ color } backgroundColor={ backgroundColor } fontFamily={fontFamily} fontSize={fontSize} boxShadow={boxShadow} textAlign={textAlign}>{text}</CardOutline>
  );
}

Card.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
//   primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * What text color to use
   */
  color: PropTypes.string,
    /**
   * What box-shadow settings to use
   */
  boxShadow: PropTypes.string,
  /**
   * What font family  to use
   */
  fontFamily: PropTypes.oneOf(['Roboto, Helvetica, sans-serif', 'Open Sans, sans-serif', 'Times New Roman, Times, serif', 'Arial, Helvetica, sans-serif', 'Lucida Console, Courier, monospace']),
  /**
   * How large should the font be?
   */
  fontSize: PropTypes.oneOf(['12px', '16px', '22px', '32px']),
  /**
   * Text Alignment
   */
  textAlign: PropTypes.oneOf(['left, cecnter, right']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Card.defaultProps = {
  backgroundColor: null,
  color: null,
  boxShadow: false,
  fontFamily: 'Roboto, Helvetica, sans-serif',
  fontSize: '16px',
  textAlign: null,
  onClick: undefined,
};
  
export default Card;