import { formatAge, isHttpUrl } from './helpers'

describe('General App Helpers', () => {
  jest
    .useFakeTimers('modern')
    .setSystemTime(new Date('2022-02-23T22:50:00.000Z').getTime())

  it.each([
    // Case #1:
    [
      // input:
      1645651546,
      // output:
      'An hour ago',
    ],
    // Case #2:
    [
      // input:
      1645575086,
      // output:
      'A day ago',
    ],
    // Case #3:
    [
      // input:
      1645582542,
      // output:
      '21 hours ago',
    ],
  ])(
    '"formatAge" should return the elapsed time so far by a given utc number',
    (input, output) => {
      expect(formatAge(input)).toBe(output)
    },
  )

  it.each([
    // Case #1:
    [
      // input:
      'http://test.com/',
      // output:
      true,
    ],
    // Case #2:
    [
      // input:
      'thisisinvalid',
      // output:
      false,
    ],
    // Case #3:
    [
      // input:
      'https://you.com',
      // output:
      true,
    ],
  ])(
    '"isHttpUrl" should check if the given string is a valid http url',
    (input, output) => {
      expect(isHttpUrl(input)).toBe(output)
    },
  )
})
