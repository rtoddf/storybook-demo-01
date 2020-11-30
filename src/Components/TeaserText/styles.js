import styled, { css } from 'styled-components';

const Bio = styled.p`
    // why does this not work with ${({ theme }) => theme.fontFamily}
    font-family: "Roboto", "Helvetica", sans-serif;
    background-color: ${(props) => props.backgroundColor};
    ${'' /* color: ${(props) => props.theme.textColor}; */}
    color: ${(props) => props.color};
    padding: ${(props) => props.size === 'large' ? '70px' : '10px'};
    font-size: ${(props) => props.size === 'large' ? '70px' : '10px'};

    ${props =>
        props.primary &&
        css`
            background: palevioletred;
            color: #ae0000;
        `};
`;

export { Bio }