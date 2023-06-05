import { Then } from "@cucumber/cucumber";
import { ElementKey } from "../../env/global";
import { getElementLocator } from "../../support/web-element-helper";
import { ScenarioWorld } from "../setup/world";
import { waitFor } from "../../support/wait-for-behaviour";
import { getValue } from "../../support/html-behaviour";

Then(
  /^the "([^"]*)" should( not)? contain the text "(.*)"$/,
  async function (
    this: ScenarioWorld, elementKey: ElementKey, negate: boolean, expectedElementText: string
  ) {
    const { screen: { page }, globalConfig } = this;

    const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

    await waitFor(async () => {
      const elementText = await page.textContent(elementIdentifier);
      return elementText?.includes(expectedElementText) === !negate
    });
  }
);

Then(
  /^the "([^"]*)" should( not)? equal the text "(.*)"$/,
  async function (
    this: ScenarioWorld, elementKey: ElementKey, expectedElementText: string, negate: boolean
  ) {
    const { screen: { page }, globalConfig } = this;

    const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

    await waitFor(async () => {
      const elementText = await page.textContent(elementIdentifier);
      return (expectedElementText === elementText) === ! negate 
    });
  }
)

Then(
  /^the "([^"]*)" should( not)? contain the value "(.*)"$/,
  async function (
    this: ScenarioWorld, elementKey: ElementKey, expectedElementText: string, negate: boolean
  ) {
    const { screen: { page }, globalConfig } = this;

    const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

    await waitFor(async () => {
      const elementValue = await getValue(page, elementIdentifier);
      return elementValue?.includes(expectedElementText) === !negate
    });

  }
)

Then(
  /^the "([^"]*)" should( not)? equal the value "(.*)"$/,
  async function (
    this: ScenarioWorld, elementKey: ElementKey, expectedElementValue: string, negate: boolean
  ) {
    const { screen: { page }, globalConfig } = this;

    const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

    await waitFor(async () => {
      const elementValue = await getValue(page, elementIdentifier);
      return (expectedElementValue === elementValue) === ! negate 
    });

  }
)