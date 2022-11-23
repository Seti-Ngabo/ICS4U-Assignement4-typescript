/**
 * This program reads a single integer from the user
 *  and prints stars
 *
 * By:      Seti Ngabo
 * Version: 1.0
 * Since:   2022-21-11
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

/**
 *
 * The function makes asterisks or stars
 *
 * @param {number} string Int
 * @param {number} compString
 */

// process
function stars(integer: number, starInt: number = 0) {
  let compString: string = ''

  // forloop
  for (let count: number = 0; count < starInt; count++) {
    compString += ' '
  }

  for (let loopCount: number = 0; loopCount < integer; loopCount++) {
    compString += '* '
  }

  console.log(compString)

  if (integer > 1) {
    stars(integer - 1, starInt + 1)
  }
  console.log(compString)
}

// Input and Output
const userInput = prompt('Enter an integer: ')
try {
  const userInt = parseInt(userInput)

  if (isNaN(userInt)) {
    console.log('This is not an integer.')
  } else if (userInt <= 0) {
    console.log('This is not a positive integer, try again.')
  } else stars(userInt)
} catch (e) {
  console.log('\nThis is not an integer.')
}

console.log('Done.')
