import { readFileRows } from './utils';

const input02 = readFileRows('./input02.txt')
const test = `forward 5
down 5
forward 8
up 3
down 8
forward 2`.split("\n")

enum Direction {
  forward = 'forward',
  up = 'up',
  down = 'down'
}

type Command = [Direction, number]

function parseInput(input: string[]): Command[] {
  const parseDir = (d: string) => {
    switch (d) {
      case 'up': return Direction.up
      case 'down': return Direction.down
      case 'forward': return Direction.forward
      default:
        console.error({ d })
        throw new Error(`Invalid direction`)
    }
  }
  return input.map(row => row.split(" "))
    .map(cmd => [parseDir(cmd[0]), Number(cmd[1])])
}

const testInput = parseInput(test)
const dayInput = parseInput(input02)

function part1(cmds: Command[]): number {
  let x = 0
  let y = 0
  cmds.forEach(cmd => {
    const [dir, amount] = cmd
    switch (dir) {
      case Direction.forward:
        x = x + amount
        break;
      case Direction.up:
        y = y - amount
        break;
      case Direction.down:
        y = y + amount
        break;
      default:
        throw new Error('nope')
    }
  })
  return x * y
}

function part2(cmds: Command[]): number {
  let x = 0
  let y = 0
  let aim = 0
  cmds.forEach(cmd => {
    const [dir, amount] = cmd
    switch (dir) {
      case Direction.forward:
        x = x + amount
        y = y + (aim * amount)
        break;
      case Direction.up:
        aim = aim - amount
        break;
      case Direction.down:
        aim = aim + amount
        break;
      default:
        throw new Error('nope')
    }
  })
  return x * y
}


console.log('test1', part1(testInput))
console.log('part1', part1(dayInput))

console.log('test2', part2(testInput))
console.log('part2', part2(dayInput))
