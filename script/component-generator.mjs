import { exec } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { createInterface } from 'node:readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Component name:`, (componentName) => {
    const componentNamePascalCase = componentName
        .split('-')
        .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
        .join('');

    const componentTitle = componentName
        .split('-')
        .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
        .join(' ');

    exec(
        `ng generate component component/${componentName}`,
        (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }

            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }

            console.log(`Component ${componentName} generated successfully.`);

            writeFileSync(
                `projects/ofa-angular/src/lib/component/${componentName}/${componentName}.stories.ts`,
                `import type { Meta, StoryObj } from '@storybook/angular';
import { ${componentNamePascalCase}Component } from './${componentName}.component';

const meta: Meta<${componentNamePascalCase}Component> = {
    title: 'Component/${componentNamePascalCase}',
    component: ${componentNamePascalCase}Component,
    argTypes: {},
};

export default meta;

type Story = StoryObj<${componentNamePascalCase}Component>;

export const Default: Story = {
    tags: ['hide'],
};
`,
            );

            writeFileSync(
                `projects/ofa-angular/src/lib/component/${componentName}/${componentName}.mdx`,
                `import { Meta, Primary, Controls } from '@storybook/blocks';
import * as Stories from './${componentName}.stories';

<Meta of={Stories} />

# ${componentTitle.replace('Ofa', '')}

\`\`\`ts
import { ${componentNamePascalCase}Component } from '@alexandregallais/ofa-angular';
\`\`\`

<Primary />

## Input

<Controls />
`,
            );

            rl.close();
        },
    );
});
