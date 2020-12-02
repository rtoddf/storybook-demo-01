import styled, { css } from 'styled-components';

const CardOutline = styled.div`
    margin: 20px;
    padding: ${(props) => props.padding};

    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};

    // this is pulling from the theme.js file
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.boxShadow};

    font-family: ${(props) => props.fontFamily};
    font-size: ${(props) => props.fontSize};
    text-align: ${(props) => props.textAlign};
`;

export { CardOutline }


// width: 300px;
    // height: 560px;
// can you get this from global??

// padding: ${(props) => props.size === 'large' ? '70px' : '20px'};

// const CardOutline = styled.div(({ theme, ...props }) => ({
//     margin: '20px',
//     padding: '20px',

//     backgroundColor: `${(props) => props.backgroundColor}`,
//     color: `${(props) => props.color}`,
    
//     // border-radius: 20px;
//     borderRadius: `${(props) => props.theme.borderRadius}`,
//     boxShadow: `4px 4px 10px rgba(0,0,0,1), -4px -4px 18px rgba(58, 58, 58, 1)`,

//     fontFamily: `${(props) => props.fontFamily}`,
//     fontSize: `${(props) => props.fontSize === 'normal' ? '16px' : '12px'}`,
//     textAlign: 'center',
// }))