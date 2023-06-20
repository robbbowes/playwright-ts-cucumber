import { Then } from "@cucumber/cucumber";
import { ElementKey } from "../../env/global";
import { getElementLocator } from "../../support/web-element-helper";
import { ScenarioWorld } from "../setup/world";
import { waitFor } from "../../support/wait-for-behaviour";

Then(
  /^the "([^"]*)" (?:checkbox|radio button) should( not)? be checked$/,
  async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean) {
    const { screen: { page }, globalConfig } = this;

    const elementIdentifier = getElementLocator(page, elementKey, globalConfig)

    await waitFor(async () => {
      const isElementChecked = await page.isChecked(elementIdentifier)
      return isElementChecked === !negate
    })
  }
);
