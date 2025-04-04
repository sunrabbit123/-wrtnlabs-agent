/**
 * @module
 * This file contains functions to work with packages.
 */

import type { PackageJson } from "type-fest";
import process from "node:process";

/** supported package managers */
export type PackageManager =
  | "npm"
  | "yarn"
  | "pnpm"
  | "bun";

export const basePackageJson = {
  version: "0.0.1",
  description: "",
  scripts: {
    prepare: "ts-patch install",
    build: "tsc",
    dev: `ts-node src/index.ts`,
    start: `node dist/index.js`,
  },
} as const satisfies PackageJson;

interface InstallProps {
  packageManager: PackageManager;
  pkg: string;
}

/**
 * get install command depending on package manager
 */
export function installCommand({ packageManager, pkg }: InstallProps) {
  switch (packageManager) {
    case "npm":
      return `npm install ${pkg}`;
    case "yarn":
      return `yarn add ${pkg}`;
    case "pnpm":
      return `pnpm add ${pkg}`;
    case "bun":
      return `bun add ${pkg}`;
    default:
      /** exhaustive check */
      packageManager satisfies never;

      throw new Error(`Unsupported package manager: ${packageManager as unknown as string}`);
  }
}

/**
 * detect package manager from environment
 */
export function detectPackageManager(): PackageManager {
  const agent = process.env.npm_config_user_agent;

  // eslint-disable-next-line ts/switch-exhaustiveness-check
  switch (true) {
    case agent?.startsWith("npm"):
      return "npm";
    case agent?.startsWith("yarn"):
      return "yarn";
    case agent?.startsWith("pnpm"):
      return "pnpm";
    case agent?.startsWith("bun"):
      return "bun";
    default:
      return "npm";
  }
}
