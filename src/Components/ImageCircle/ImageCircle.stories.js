import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import ImageCircle from './ImageCircle';

export default {
    title: 'Components/ImageCircle',
    component: ImageCircle,
    argTypes: {
        borderColor: { 
            control: 'color'
        },
    },
    decorators: [withDesign],
};

const Template = (args) => <ImageCircle {...args} />;
export const Dark = Template.bind({});
export const Light = Template.bind({});

Dark.args = {
    borderColor: '#585858',
    boxShadow: '6px 6px 18px rgba(0,0,0,1), -6px -6px 18px rgba(58, 58, 58, 1)',
}

Light.args = {
    borderColor: '#e5e5e5',
    boxShadow: '6px 6px 18px rgba(0,0,0,.25), -6px -6px 18px rgba(255, 255, 255, 1)',
}

// design links
Dark.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/IvOpGuz5Vb5xA79821vB4H/UXUI-Process?node-id=8%3A5',
    },
}

Light.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/IvOpGuz5Vb5xA79821vB4H/UXUI-Process?node-id=1%3A2',
    },
}