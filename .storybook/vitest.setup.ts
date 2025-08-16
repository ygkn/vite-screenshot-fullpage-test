import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";
import { setProjectAnnotations } from "@storybook/nextjs-vite";
import * as projectAnnotations from "./preview";
import { afterEach } from "vitest";
import { page } from "@vitest/browser/context";

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);

afterEach(async (context) => {
  await page.screenshot();

  (
    frameElement as HTMLIFrameElement
  ).style.width = `${document.body.offsetWidth}px`;
  (
    frameElement as HTMLIFrameElement
  ).style.height = `${document.body.offsetHeight}px`;

  await page.screenshot();
});
