import { Meta, Story } from '@storybook/angular';

import { ParagraphComponent } from './paragraph.component';

export default {
  title: 'shared/Paragraph',
  component: ParagraphComponent,
} as Meta;

export const Default: Story = () => ({
  template: `<app-paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel dui et velit tincidunt vestibulum.</app-paragraph>`
});
