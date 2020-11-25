import React from 'react';
import TeaserText from './TeaserText';

export default {
    title: 'Componenets/TeaserText',
    component: TeaserText,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' }
    },
};

const Template = (args) => <TeaserText {...args} />;

// // reset the name
// Primary.storyName = 'I am the primary';

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    color: '#ff0000',
}