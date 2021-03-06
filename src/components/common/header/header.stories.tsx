import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Header} from './index';

export default {
    title: 'Example/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {};

