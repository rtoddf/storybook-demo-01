import React from 'react';
import Card from './Card';

export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' }
    },
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    // primary: true,
    backgroundColor: '#1a1a1a',
    color: '#e5e5e5',
    fontFamily: 'Roboto, Helvetica, sans-serif'
    // size: 'small'
}