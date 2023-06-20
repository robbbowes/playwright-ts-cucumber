import { Then } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";
import { checkElement, uncheckElement } from "../support/html-behaviour";
import { waitFor } from "../support/wait-for-behaviour";
import { getElementLocator } from "../support/web-element-helper";
import { ElementKey } from "../env/global";

Then(
  /^I (check)?(uncheck)? the "([^"]*)" (?:checkbox|radio button)$/,
  async function (
    this: ScenarioWorld,
    checked: boolean,
    unchecked: boolean,
    elementKey: ElementKey
  ) {
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
        if (!!unchecked) {
          await uncheckElement(page, elementIdentifier);
        } else {
          await checkElement(page, elementIdentifier);
        }
      }
      return result;
    });
  }
);
