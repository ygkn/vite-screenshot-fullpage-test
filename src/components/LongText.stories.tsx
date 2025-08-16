import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LongText } from "./LongText";

const meta: Meta<typeof LongText> = {
  component: LongText,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
