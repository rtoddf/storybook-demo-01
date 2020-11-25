import React from 'react';
import PropTypes from 'prop-types';

import { Bio } from './styles'

const text = 'Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet enim quis augue sodales, porta fringilla leo mollis. Duis ornare ac elit non feugiat. Ut id mattis mi, id efficitur nisl.'

const TeaserText = ({ primary, backgroundColor, color, size, ...props }) => {
  return (
    <Bio color={ color } backgroundColor={ backgroundColor } size={ size }>{ text }</Bio>
  );
}

TeaserText.propTypes = {
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
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'large']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

TeaserText.defaultProps = {
  backgroundColor: null,
  color: null,
  primary: false,
  onClick: undefined,
};
  
export default TeaserText;