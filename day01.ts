

import fs from 'fs'

const input01 = fs.readFileSync('./input01.txt', 'utf-8')
const test = `199
200
208
210
200
207
240
269
260
263`

function parseInput(input: string): number[] {
  return String(input).split("\n").map(Number)
}

const testInput = parseInput(test)
const dayInput = parseInput(input01)

function part1(input: number[]): number {
  let previous = Number.MAX_SAFE_INTEGER
  let increasing = 0
  input.forEach(num => {
    if (previous && previous < num) {
      increasing += 1
    }
    previous = num
  })
  return increasing
}

function tripleSums(nums: number[]): number[] {
  const sums = []
  for (let i = 0; i < nums.length-2; i++) {
    sums.push(nums[i] + nums[i+1] + nums[i+2])
  }
  return sums
}

function part2(input: number[]): number {
  const sums = tripleSums(input)
  return part1(sums)
}

console.log('test1', part1(testInput))
console.log('part1', part1(dayInput))

console.log('test2', part2(testInput))
console.log('part2', part2(dayInput))
