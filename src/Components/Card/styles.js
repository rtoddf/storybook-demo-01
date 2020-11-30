import styled, { css } from 'styled-components';

const CardOutline = styled.div`
    width: 300px;
    height: 560px;
    margin: 20px auto;
    border-radius: 20px;
    text-align: center;

    background-color: ${(props) => props.backgroundColor};
    // can you get this from global??
    font-family: ${(props) => props.fontFamily};

    color: ${(props) => props.color};
    padding: ${(props) => props.size === 'large' ? '70px' : '20px'};
    font-size: ${(props) => props.size === 'large' ? '70px' : '16px'};
    box-shadow: 4px 4px 10px rgba(0,0,0,1), -4px -4px 18px rgba(58, 58, 58, 1);
`;

export { CardOutline }