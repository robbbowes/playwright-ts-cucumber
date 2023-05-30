import dotenv from "dotenv";
import { env, getJSONFromFile } from "./env/parseEnv";
import {
  GlobalConfig,
  HostsConfig,
  PagesConfig,
  PageElementMappings,
} from "./env/global";
import * as fs from "fs";

dotenv.config({ path: env("COMMON_CONFIG_FILE") });

const hostsConfig: HostsConfig = getJSONFromFile(env("HOSTS_URLS_PATH"));

const pagesConfig: PagesConfig = getJSONFromFile(env("PAGE_URLS_PATH"));

const mappingFiles = fs.readdirSync(
  `${process.cwd()}${env("PAGE_ELEMENTS_PATH")}`
);

const pageElementMappings: PageElementMappings = mappingFiles.reduce(
    (pageElementConfigAcc: {}, file: string) => {
      const key = file.replace(".json", "");
      const elementMappings = getJSONFromFile(
        `${env("PAGE_ELEMENTS_PATH")}${file}`
      );
      return { ...pageElementConfigAcc, [key]: elementMappings };
    },
    {}
  );

const worldParameters: GlobalConfig = {
  hostsConfig,
  pagesConfig,
  pageElementMappings
};

const common = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require ./src/step-definitions/**/**/*.ts \
                --world-parameters ${JSON.stringify(worldParameters)} \
                -f json:./reports/report.json`;

const dev = `${common} --tags '@dev'`;
const smoke = `${common} --tags '@smoke'`;
const regression = `${common} --tags '@regression'`;

export { dev, smoke, regression };
