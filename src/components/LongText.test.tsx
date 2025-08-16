import { expect, test } from "vitest";
import { LongText } from "./LongText";
import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";

test("LongText screenshot", async () => {
  render(<LongText />);

  await page.screenshot(); // __screenshots__/src/components/LongText.test.tsx/LongText-1.png

  (
    frameElement as HTMLIFrameElement
  ).style.width = `${document.body.offsetWidth}px`;
  (
    frameElement as HTMLIFrameElement
  ).style.height = `${document.body.offsetHeight}px`;

  await page.screenshot(); // __screenshots__/src/components/LongText.test.tsx/LongText-2.png
});
