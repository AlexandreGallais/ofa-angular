import type { Meta, StoryObj } from '@storybook/angular';
import { OfaCoreButtonComponent } from './ofa-core-button.component';

const meta: Meta<OfaCoreButtonComponent> = {
    title: 'Component/OfaCoreButton',
    component: OfaCoreButtonComponent,
    argTypes: {},
};

export default meta;

type Story = StoryObj<OfaCoreButtonComponent>;

export const Default: Story = {
    tags: ['hide'],
};
