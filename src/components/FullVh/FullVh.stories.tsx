import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FullVh } from "./FullVh";

const meta: Meta<typeof FullVh> = {
  component: FullVh,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
