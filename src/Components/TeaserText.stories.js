import React from 'react';
import TeaserText from './TeaserText';

export default {
    title: 'TeaserText',
    component: TeaserText,
};

const Template = (args) => <TeaserText {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    /* the args you need here will depend on your component */
}