import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { extname, join, resolve } from 'node:path'

const headerTextMap = {
  '.css': `/* 
 * Copyright (c) 2025 René Majewski
 * This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.
 */\n\n`,

  '.ts': `/**
 * Copyright (c) 2025 René Majewski
 * This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.
 */\n\n`,

  '.vue': `<!--
  Copyright (c) 2025 René Majewski
  This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.
-->\n\n`,
}

const validExtensions = Object.keys(headerTextMap)

const ignoreDirs = ['node_modules', '.git', '.output', '.nuxt', 'dist']

function shouldAddHeader(content) {
  return !content.includes('René Majewski') && !content.includes('MIT license')
}

function processFile(filePath) {
  const ext = extname(filePath)
  if (!validExtensions.includes(ext)) return

  const content = readFileSync(filePath, 'utf-8')

  if (shouldAddHeader(content)) {
    const header = headerTextMap[ext]
    writeFileSync(filePath, header + content, 'utf-8')
    console.log(`✔️ Header added to: ${filePath}`)
  }
}

function walkDir(dirPath) {
  const entries = readdirSync(dirPath, { withFileTypes: true })

  entries.forEach((entry) => {
    const fullPath = join(dirPath, entry.name)
    if (entry.isDirectory()) {
      if (!ignoreDirs.includes(entry.name)) {
        walkDir(fullPath)
      }
    } else {
      processFile(fullPath)
    }
  })
}

// Starte im aktuellen Verzeichnis oder übergebe Pfad als Argument
const rootDir = process.argv[2] || resolve('.')
walkDir(join(rootDir, 'src'))
