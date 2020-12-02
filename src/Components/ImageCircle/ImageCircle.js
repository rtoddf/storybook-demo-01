import React from 'react';
import PropTypes from 'prop-types';
import { ImageContainer, Image } from './styles';

const image = 'http://rtodd.net/images/male_headphone_800x800.jpg';

const ImageCircle = ({ borderColor, boxShadow, ...props }) => {
  return (
    <ImageContainer boxShadow={boxShadow}><Image alt="alt tag" src={ image } borderColor={borderColor} /></ImageContainer>
    // <ImageCircleOutline color={ color } backgroundColor={ backgroundColor } fontFamily={fontFamily} fontSize={fontSize} boxShadow={boxShadow} textAlign={textAlign} />
  );
}

ImageCircle.propTypes = {
  /**
   * What text color to use
   */
  borderColor: PropTypes.string,
    /**
   * What box-shadow settings to use
   */
  boxShadow: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ImageCircle.defaultProps = {
  borderColor: null,
  boxShadow: false,
  onClick: undefined,
};
  
export default ImageCircle;