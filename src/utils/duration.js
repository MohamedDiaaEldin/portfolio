/**
 * Computes the number of months between startDate and today.
 * @param {string} startDate - "YYYY-MM" or "YYYY-MM-DD"
 * @returns {{ months: number, years: number, monthsRemainder: number } | null} - null if invalid
 */
export function getMonthsSince(startDate) {
  if (!startDate || typeof startDate !== 'string') return null

  const parts = startDate.trim().split('-')
  const year = parseInt(parts[0], 10)
  const month = parseInt(parts[1], 10) - 1 // 0-indexed for Date

  if (isNaN(year) || isNaN(month) || month < 0 || month > 11) return null

  const start = new Date(year, month, 1)
  const now = new Date()

  if (start > now) return null // future date

  const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth())
  const years = Math.floor(months / 12)
  const monthsRemainder = months % 12

  return { months, years, monthsRemainder }
}

/**
 * Formats duration from startDate to today.
 * @param {string} startDate - "YYYY-MM" or "YYYY-MM-DD"
 * @returns {string | null} - "X months" or "X years Y months" or "1 year", null if invalid
 */
export function formatDuration(startDate) {
  const result = getMonthsSince(startDate)
  if (result === null) return null

  const { months, years, monthsRemainder } = result

  if (months >= 12) {
    if (monthsRemainder === 0) {
      return years === 1 ? '1 year' : `${years} years`
    }
    const yearStr = years === 1 ? '1 year' : `${years} years`
    const monthStr = monthsRemainder === 1 ? '1 month' : `${monthsRemainder} months`
    return `${yearStr} ${monthStr}`
  }

  if (months === 0) return '1 month' // same month or just started
  return months === 1 ? '1 month' : `${months} months`
}
