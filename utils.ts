
import fs from 'fs'

export function readFileRows(fileName: string): string[] {
  return fs.readFileSync(fileName, 'utf-8').trim().split("\n").map(row => row.trim())
}
