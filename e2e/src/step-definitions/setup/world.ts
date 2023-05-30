import playwright, { Browser, BrowserContextOptions, BrowserContext, BrowserType, Page } from 'playwright'
import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber'
import { env } from '../../env/parseEnv'

export type Screen = {
    browser: Browser
    context: BrowserContext
    page: Page
}

export class ScenarioWorld extends World {

    constructor(options: IWorldOptions) {
        super(options)
    }

    screen!: Screen

    async init(contextOptions: BrowserContextOptions): Promise<Screen> {
        await this.screen?.page?.close()
        await this.screen?.context?.close()
        await this.screen?.browser?.close()

        const browser = await this.newBrowser()
        const context = await browser.newContext(contextOptions)
        const page = await context.newPage()

        this.screen = { browser, context, page }

        return this.screen
    }

    private newBrowser = async (): Promise<Browser> => {

        const automationBrowsers = ['chromium', 'firefox', 'webkit']
        type AutomationBrowser = typeof automationBrowsers[number]
        const automationBrowser = env('UI_AUTOMATION_BROWSER') as AutomationBrowser

        const browserType: BrowserType = playwright[automationBrowser]
        const browser = await browserType.launch({
            headless: process.env.HEADLESS !== 'false',
            args: ['--disable-web-security', '--disable-features=IsolateOrigins,site-per-process']
        })
        return browser
    }

}

setWorldConstructor(ScenarioWorld)