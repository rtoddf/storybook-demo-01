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

export const Primary = Template.bind({});
Primary.args = {
    primary: false,
    backgroundColor: '#e5e5e5',
    color: '#666',
    size: 'small'
}
//primary's color is set here and passed as a prop to the component

// reset the name
Primary.storyName = 'I am the primary';

export const Small = Template.bind({});
Small.args = {
    ...Primary.args,
    size: 'small',
};

export const Large = Template.bind({});
Large.args = {
    ...Primary.args,
    size: 'large',
};
// spreads the Primary args and uses them on Large