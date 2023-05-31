import { Given } from "@cucumber/cucumber";
import { PageId } from "../env/global";
import {
  navigateToPage,
  currentPathMatchesPageId,
} from "../support/navigation-behaviour";
import { ScenarioWorld } from "./setup/world";
import { waitFor } from "../support/wait-for-behaviour";

Given(
  /^I am on the "([^"]*)" page$/,
  async function (this: ScenarioWorld, pageId: PageId) {
    const {
      screen: { page },
      globalConfig,
    } = this;

    await navigateToPage(page, pageId, globalConfig);

    await waitFor(() => currentPathMatchesPageId(page, pageId, globalConfig));
  }
);

Given(
  /^I am directed to the "([^"]*)" page$/,
  async function (this: ScenarioWorld, pageId: PageId) {
    const {
      screen: { page },
      globalConfig,
    } = this;

    await waitFor(() => currentPathMatchesPageId(page, pageId, globalConfig));
  }
);
