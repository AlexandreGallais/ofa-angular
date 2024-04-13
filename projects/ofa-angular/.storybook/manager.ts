import { addons } from '@storybook/manager-api';

addons.setConfig({
    sidebar: {
        showRoots: true,
        filters: {
            patterns: (item) => {
                return !item.tags?.includes('hide');
            },
        },
    },
});
