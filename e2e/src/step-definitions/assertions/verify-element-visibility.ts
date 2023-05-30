import { Then } from "@cucumber/cucumber";
import { ElementKey } from "../../env/global";
import { getElementLocator } from "../../support/web-element-helper";
import { ScenarioWorld } from "../setup/world";
import { waitFor } from "../../support/wait-for-behaviour";

Then(
  /^the "([^"]*)" should be displayed$/,
  async function (this: ScenarioWorld, elementKey: ElementKey) {
    const {
      screen: { page },
      globalVariables,
      globalConfig,
    } = this;

    console.log(`the ${elementKey} should be displayed`);

    const elementIdentifier = getElementLocator(
      page,
      elementKey,
      globalVariables,
      globalConfig
    );

    await waitFor(async () => {
      const isElementVIsible = (await page.$(elementIdentifier)) != null;
      return isElementVIsible;
    });
  }
);
