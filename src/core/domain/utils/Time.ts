const ONE_YEAR_MILLIS = 365 * 24 * 3600 * 1000

export const getArbitraryDate = () => new Date(Date.now() - ONE_YEAR_MILLIS * Math.random())
