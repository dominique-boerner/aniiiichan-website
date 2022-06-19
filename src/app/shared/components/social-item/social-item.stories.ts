import { Meta, Story } from '@storybook/angular';

import { SocialItemComponent } from './social-item.component';

export default {
  title: 'shared/SocialItem',
  component: SocialItemComponent,
} as Meta;

export const Instagram: Story = () => ({
  props: {
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
    text: "Instagram",
    href: "https://instagram.com"
  }
});

export const Discord: Story = () => ({
  props: {
    imageSrc: "https://www.designtagebuch.de/wp-content/uploads/mediathek//2021/05/discord-logo.jpg",
    text: "Discord",
    href: "https://discord.com"
  }
});
