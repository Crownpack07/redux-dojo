import { Meta } from '@storybook/react';
import { Stepper } from '../../stepper';

const component: Meta<typeof Stepper> = {
  title: 'Components/Molecules/Stepper',
  component: Stepper,
  decorators: [(Story) => <Story />],
};

export default component;

export const Standard = {
  args: {
    steps: [
      { name: 'Step 1', component: <div>Step 1 content</div> },
      { name: 'Step 2', component: <div>Step 2 content</div> },
      { name: 'Step 3', component: <div>Step 3 content</div> },
    ],
    onNext: () => console.log('Next'),
    onPrevious: () => console.log('Previous'),
    onCancel: () => console.log('Cancel'),
    onFinish: () => console.log('Finish'),
  },
};
