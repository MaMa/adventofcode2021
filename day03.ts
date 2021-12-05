import { readFileRows } from './utils';

const input03 = readFileRows('./input03.txt')
const test = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`.split("\n")

function part1(rows: string[]): number {
  // Positive sum means 1, negative 0
  const sums = rows.reduce((acc, row) => {
    const chars = row.split("")
    chars.forEach((char, idx) => {
      acc[idx] = (acc[idx] | 0) + (char === '1' ? 1 : -1)
    })
    return acc
  }, new Array(rows[0].length).fill(0))

  const gamma = parseInt(sums.map(sum => sum > 0 ? '1' : '0').join(''), 2)
  const epsilon = parseInt(sums.map(sum => sum > 0 ? '0' : '1').join(''), 2)
  return gamma * epsilon
}

console.log('test1', part1(test))
console.log('part1', part1(input03))
