import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import Card from './Card';

export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' }
    },
    decorators: [withDesign],
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    // primary: true,
    backgroundColor: '#1a1a1a',
    color: '#e5e5e5',
    fontFamily: 'Roboto, Helvetica, sans-serif',
    fontSize: '16px'
}

Primary.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/IvOpGuz5Vb5xA79821vB4H/UXUI-Process?node-id=67%3A156',
    },
}