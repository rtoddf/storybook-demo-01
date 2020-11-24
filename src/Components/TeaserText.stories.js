import React from 'react';
import { storiesOf } from '@storybook/react';
import TeaserText from './TeaserText';

const defaultProps = {
    text: 'Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet enim quis augue sodales, porta fringilla leo mollis. Duis ornare ac elit non feugiat. Ut id mattis mi, id efficitur nisl.'
}

storiesOf('TeaserText', module)
    .add('default', () => <TeaserText {...defaultProps} />)
    .add('primary', () => <TeaserText primary {...defaultProps} />)

// export default {
//     title: 'TeaserText',
//     component: TeaserText,
// };

// export const Primary = () => <TeaserText variant='primary'>Primary</TeaserText>

// const Template = (args) => <TeaserText {...args} />;

// // reset the name
// Primary.storyName = 'I am the primary';

// export const PrimaryA = Template.bind({});
// PrimaryA.args = {
//     variant: 'primary',
//     color: '#ff0000',
// }

// export const Secondary = Template.bind({});
// Secondary.args = {
//     color: '#ae0000',
// }

// export const Tertiary = Template.bind({});
// Tertiary.args = {
//     color: '#baba71',
// }