import type { Meta, StoryObj } from '@storybook/angular';
import { OfaIconComponent } from './ofa-icon.component';
import { OfaIconName } from '../../constant/constant-icon-name';

const meta: Meta<OfaIconComponent> = {
    title: 'Component/Icon',
    component: OfaIconComponent,
    argTypes: {
        color: {
            description: '',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: undefined },
            },
            control: { type: 'color' },
        },

        size: {
            description: '',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: undefined },
            },
            control: { type: 'text' },
        },

        maskImage: {
            description: '',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: undefined },
            },
            control: { type: 'text' },
        },

        name: {
            description: '',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: undefined },
            },
            options: Object.values(OfaIconName),
            control: { type: 'select' },
        },
    },
};

export default meta;

type Story = StoryObj<OfaIconComponent>;

export const Default: Story = {
    tags: ['hide'],
    args: {
        size: '20px',
        color: 'black',
        name: OfaIconName.ChevronDown,
    },
};

export const ChevronDown: Story = {
    tags: ['hide'],
    args: {
        size: '20px',
        color: 'black',
        name: OfaIconName.ChevronDown,
    },
};
