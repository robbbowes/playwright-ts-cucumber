import { Then } from "@cucumber/cucumber";
import { waitFor } from "../support/wait-for-behaviour";
import { getElementLocator } from "../support/web-element-helper";
import { ScenarioWorld } from "./setup/world";
import { ElementKey } from "../env/global";
import { inputValue, selectValue } from "../support/html-behaviour";

Then(
  /^I fill in the "([^"]*)" input with "([^"]*)"$/,
  async function (this: ScenarioWorld, elementKey: ElementKey, input: string) {
    // this.parameters;
    const {
      screen: { page },
      globalConfig,
    } = this;

    const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

    await waitFor(async () => {
      const result = await page.waitForSelector(elementIdentifier, {
        state: "visible",
      });

      if (result) {
        await inputValue(page, elementIdentifier, input);
      }
      return result;
    });
  }
);

Then(
  /^I select the "([^"]*)" option from the "([^"]*)" dropdown$/,
  async function (this: ScenarioWorld, option: string, elementKey: ElementKey) {
    const {
      screen: { page },
      globalConfig,
    } = this;

    const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

    await waitFor(async () => {
      const result = await page.waitForSelector(elementIdentifier, {
        state: "visible",
      });
      if (result) {
        await selectValue(page, elementIdentifier, option);
      }
      return result;
    });
  }
);
