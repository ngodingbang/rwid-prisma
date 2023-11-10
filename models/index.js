import { PrismaClient } from "@prisma/client";
import chalk from "chalk";

export { Prisma } from "@prisma/client";
export const model = (() => {
  const model = new PrismaClient({
    log: [{ emit: "event", level: "query" }],
  });

  model.$on("query", event => {
    console.info(`${chalk.blue("prisma:query")} ${event.query}`);
    console.info(`${chalk.blue("prisma:params")}: ${event.params}`);
    console.info(`${chalk.blue("prisma:duration")}: ${event.duration}ms`);
    console.info(`${chalk.blue("-----")}`);
  });

  return model;
})();
