import styled, { css } from 'styled-components';

const Bio = styled.p`
    // why does this not work with ${({ theme }) => theme.fontFamily}
    font-family: "Roboto", "Helvetica", sans-serif;
    color: #baba71;

    ${props =>
        props.primary &&
        css`
            background: palevioletred;
            color: #ae0000;
        `};
`;

export { Bio }