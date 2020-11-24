import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export const text = () => (
    <Button onClick={action('clicked')}>Just a Button</Button>
);

export default {
    component: Button,
    title: 'Button'
}