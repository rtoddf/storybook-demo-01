import React from 'react';
import styled, { css } from 'styled-components';

const bio = 'Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet enim quis augue sodales, porta fringilla leo mollis. Duis ornare ac elit non feugiat. Ut id mattis mi, id efficitur nisl.';

const Bio = styled.p`
    
`;

const TeaserText = (props) => {
    return (
      <Bio>{ bio }</Bio>
    );
  }
  
  export default TeaserText;