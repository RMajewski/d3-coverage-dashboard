/**
 * Copyright (c) 2025 René Majewski
 * This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.
 */

// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginSonarJs from "eslint-plugin-sonarjs"

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginSonarJs.configs.recommended,
)
