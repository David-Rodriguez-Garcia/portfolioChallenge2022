const ONE_DAY_MILLIS = 24 * 3600 * 1000
const ONE_YEAR_MILLIS = ONE_DAY_MILLIS * 365

export const getArbitraryDate = () => {
  return new Date(Date.now() - Math.random() * ONE_YEAR_MILLIS)
}
