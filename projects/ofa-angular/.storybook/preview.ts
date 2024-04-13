import type { Preview } from '@storybook/angular';

const preview: Preview = {
    parameters: {
        options: {
            storySort: {
                order: ['*'],
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            canvas: {
                sourceState: 'shown',
            },
        },
    },
};

export default preview;
