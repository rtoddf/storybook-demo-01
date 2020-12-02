import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import Card from './Card';

export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        backgroundColor: { 
            control: 'color',
        },
        color: { 
            control: 'color'
        },
        textAlign: {
            control: {
                type: 'select',
                options: [
                    'left', 
                    'center', 
                    'right'
                ],
            },
        }
    },
    decorators: [withDesign],
};

const Template = (args) => <Card {...args} />;
export const Dark = Template.bind({});
export const Light = Template.bind({});

Dark.args = {
    // primary: true,
    backgroundColor: '#1a1a1a',
    color: '#e5e5e5',
    boxShadow: '6px 6px 18px rgba(0,0,0,1), -6px -6px 18px rgba(58, 58, 58, 1)',
    fontFamily: 'Roboto, Helvetica, sans-serif',
    fontSize: '16px',
    textAlign: 'center'
}

Light.args = {
    // primary: true,
    backgroundColor: '#e5e5e5',
    color: '#666666',
    boxShadow: '6px 6px 18px rgba(0,0,0,.25), -6px -6px 18px rgba(255, 255, 255, 1)',
    fontFamily: 'Roboto, Helvetica, sans-serif',
    fontSize: '16px',
    textAlign: 'center'
}

// design links
Dark.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/IvOpGuz5Vb5xA79821vB4H/UXUI-Process?node-id=67%3A156',
    },
}

Light.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/IvOpGuz5Vb5xA79821vB4H/UXUI-Process?node-id=67%3A94',
    },
}