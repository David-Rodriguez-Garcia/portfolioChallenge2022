import { getArbitraryDate } from '..'

describe('getArbitraryDate', () => {
  it('returns a Date object', () => {
    const date = getArbitraryDate()

    expect(date).toBeInstanceOf(Date)
  })

  it('returns an arbitrary date', () => {
    const date_1 = getArbitraryDate()
    const date_2 = getArbitraryDate()

    expect(date_1).not.toEqual(date_2)
  })
})
